import {
  AppSyncModelVisitor,
  ParsedAppSyncModelConfig,
  RawAppSyncModelConfig,
  CodeGenField,
  CodeGenDirectives,
} from './appsync-visitor';
import { CodeGenConnectionType } from '../utils/process-connections';
import { AuthDirective, AuthRule } from '../utils/process-auth';
import { GraphQLSchema } from 'graphql';
import { DART_SCALAR_MAP } from '../scalars';
import * as plugin from '@aws-amplify/appsync-modelgen-core';
import { NormalizedScalarsMap } from '@graphql-codegen/visitor-plugin-common';

export interface RawAppSyncModelDartConfig extends RawAppSyncModelConfig {
  projectRoot?: string;
}

export interface ParsedAppSyncModelDartConfig extends ParsedAppSyncModelConfig {
  projectRoot: string;
}

export class AppSyncModelDartVisitor<
  TRawConfig extends RawAppSyncModelDartConfig = RawAppSyncModelDartConfig,
  TPluginConfig extends ParsedAppSyncModelDartConfig = ParsedAppSyncModelDartConfig
> extends AppSyncModelVisitor<TRawConfig, TPluginConfig> {
  constructor(
    schema: GraphQLSchema,
    rawConfig: TRawConfig,
    additionalConfig: Partial<TPluginConfig>,
    defaultScalars: NormalizedScalarsMap = DART_SCALAR_MAP,
  ) {
    super(schema, rawConfig, additionalConfig, defaultScalars);
    this._parsedConfig.projectRoot = rawConfig.projectRoot!;
  }

  private convertFieldType(field: CodeGenField): plugin.SchemaType {
    let type: plugin.SchemaType;
    if (field.type in this.scalars) {
      type = {
        scalar: {
          scalar: field.type,
          isRequired: !field.isNullable,
        },
      };
    } else if (this.isEnumType(field)) {
      type = {
        enum: {
          enum: field.type,
          isRequired: !field.isNullable,
        },
      };
    } else if (this.isModelType(field)) {
      type = {
        model: {
          model: field.type,
          isRequired: !field.isNullable,
        },
      };
    } else if (this.isNonModelType(field)) {
      type = {
        nonModel: {
          nonModel: field.type,
          isRequired: !field.isNullable,
        },
      };
    } else {
      type = {
        $unknown: ['unknown', {
          type: field.type,
          isRequired: !field.isNullable,
        }],
      }
    }

    if (field.isList) {
      type = {
        list: {
          ofType: type,
          isRequired: !field.isListNullable,
        },
      };
    }

    return type;
  }

  private convertField(field: CodeGenField): plugin.ModelField {
    return {
      name: field.name,
      type: this.convertFieldType(field),
      isReadOnly: field.isReadOnly,
      association: this.convertConnectionInfo(field),
      authRules: this.convertAuthRules(field.directives),
    };
  }

  private convertAuthRules(directives: CodeGenDirectives): plugin.AuthRule[] {
    const authDirectives = directives.filter(d => d.name === 'auth') as AuthDirective[];
    const authRules = authDirectives.reduce((acc, directive) => {
      acc.push(...directive.arguments.rules);
      return acc;
    }, [] as AuthRule[]);
    return authRules.map(authRule => {
      return {
        authStrategy: authRule.allow,
        ownerField: authRule.ownerField,
        identityClaim: authRule.identityClaim,
        groupClaim: authRule.groupClaim,
        groups: authRule.groups,
        groupsField: authRule.groupField,
        provider: authRule.provider,
        operations: authRule.operations,
      };
    });
  }

  private convertConnectionInfo(field: CodeGenField): plugin.ModelAssociation | undefined {
    if (!field.connectionInfo) {
      return;
    }
    const connectionInfo = field.connectionInfo;
    const connectedModel = connectionInfo.connectedModel;
    if (connectionInfo.kind === CodeGenConnectionType.HAS_MANY) {
      return {
        hasMany: {
          connectedModel: connectedModel.name,
          associatedWith: this.convertField(connectionInfo.associatedWith),
          associatedWithFields: connectionInfo.associatedWithFields.map(this.convertField),
        },
      };
    } else if (connectionInfo.kind === CodeGenConnectionType.BELONGS_TO) {
      return {
        belongsTo: {
          connectedModel: connectedModel.name,
          targetName: connectionInfo.targetName,
          targetNames: connectionInfo.targetNames,
        },
      };
    } else if (connectionInfo.kind === CodeGenConnectionType.HAS_ONE) {
      return {
        hasOne: {
          connectedModel: connectedModel.name,
          targetName: connectionInfo.targetName,
          targetNames: connectionInfo.targetNames,
          associatedWith: this.convertField(connectionInfo.associatedWith),
          associatedWithFields: connectionInfo.associatedWithFields.map(this.convertField),
        },
      };
    }
  }

  private convertIndexes(directives: CodeGenDirectives): plugin.ModelIndex[] {
    const indexes = directives.filter(directive => directive.name === 'key');
    return indexes.map(index => {
      const fields = index.arguments.fields as string[];
      if (index.arguments.name == null) {
        return {
          primaryKey: {
            primaryField: fields[0],
            sortKeyFields: fields.slice(1),
          },
        };
      }
      return {
        secondaryKey: {
          name: index.arguments.name,
          queryField: index.arguments.queryField,
          primaryField: fields[0],
          sortKeyFields: fields.slice(1),
        },
      };
    });
  }

  async generateAsync(): Promise<void> {
    // Build the model classes for the schema
    const typeDefinitions: Record<string, plugin.SchemaTypeDefinition> = {};
    Object.entries(this.modelMap).forEach(([name, model]) => {
      const fields: Record<string, plugin.ModelField> = {};
      for (const field of model.fields) {
        fields[field.name] = this.convertField(field);
      }
      typeDefinitions[name] = {
        model: {
          name,
          pluralName: this.pluralizeModelName(model),
          fields,
          indexes: this.convertIndexes(model.directives),
          authRules: this.convertAuthRules(model.directives),
        },
      };
    });

    const client = new plugin.CodegenPluginService({ endpoint: 'http://localhost:3000' });
    try {
      const response = await client.codegen({
        projectRoot: this._parsedConfig.projectRoot,
        schemaDefinition: {
          typeDefinitions,
          modelGraph: {},
        },
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
}
