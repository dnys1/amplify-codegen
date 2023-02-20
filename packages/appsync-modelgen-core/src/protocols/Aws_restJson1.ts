// smithy-typescript generated code
import {
  CodegenCommandInput,
  CodegenCommandOutput,
} from "../commands/CodegenCommand";
import { CodegenPluginServiceServiceException as __BaseException } from "../models/CodegenPluginServiceServiceException";
import {
  AuthModelOperation,
  AuthRule,
  CodegenError,
  EnumType,
  EnumTypeDefinition,
  ListType,
  ModelAssociation,
  ModelAssociationBelongsTo,
  ModelAssociationHasMany,
  ModelAssociationHasOne,
  ModelField,
  ModelForeignKey,
  ModelIndex,
  ModelPrimaryKey,
  ModelSecondaryKey,
  ModelType,
  ModelTypeDefinition,
  NonModelType,
  NonModelTypeDefinition,
  ScalarType,
  SchemaDefinition,
  SchemaType,
  SchemaTypeDefinition,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  _json,
  collectBody,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * serializeAws_restJson1CodegenCommand
 */
export const se_CodegenCommand = async(
  input: CodegenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/codegen";
  let body: any;
  body = JSON.stringify(take(input, {
    'projectRoot': [],
    'schemaDefinition': _ => se_SchemaDefinition(_, context),
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * deserializeAws_restJson1CodegenCommand
 */
export const de_CodegenCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CodegenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CodegenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1CodegenCommandError
 */
const de_CodegenCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CodegenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodegenError":
    case "com.amazonaws.amplify.codegen#CodegenError":
      throw await de_CodegenErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      })
    }
  }

  const throwDefaultError = withBaseException(__BaseException);
  /**
   * deserializeAws_restJson1CodegenErrorRes
   */
  const de_CodegenErrorRes = async (
    parsedOutput: any,
    context: __SerdeContext
  ): Promise<CodegenError> => {
    const contents: any = map({
    });
    const data: any = parsedOutput.body;
    const doc = take(data, {
      'message': __expectString,
    });
    Object.assign(contents, doc);
    const exception = new CodegenError({
      $metadata: deserializeMetadata(parsedOutput),
      ...contents
    });
    return __decorateServiceException(exception, parsedOutput.body);
  };

  // se_AuthModelOperationList omitted.

  // se_AuthRule omitted.

  // se_AuthRuleList omitted.

  // se_EnumType omitted.

  // se_EnumTypeDefinition omitted.

  /**
   * serializeAws_restJson1ListType
   */
  const se_ListType = (
    input: ListType,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'isRequired': [],
      'ofType': _ => se_SchemaType(_, context),
    });
  }

  /**
   * serializeAws_restJson1ModelAssociation
   */
  const se_ModelAssociation = (
    input: ModelAssociation,
    context: __SerdeContext
  ): any => {
    return ModelAssociation.visit(input, {
      belongsTo: value => ({ "belongsTo": _json(value) }),
      hasMany: value => ({ "hasMany": se_ModelAssociationHasMany(value, context) }),
      hasOne: value => ({ "hasOne": se_ModelAssociationHasOne(value, context) }),
      _: (name, value) => ({ name: value } as any)
    });
  }

  // se_ModelAssociationBelongsTo omitted.

  /**
   * serializeAws_restJson1ModelAssociationHasMany
   */
  const se_ModelAssociationHasMany = (
    input: ModelAssociationHasMany,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'associatedWith': _ => se_ModelField(_, context),
      'associatedWithFields': _ => se_ModelFieldList(_, context),
      'connectedModel': [],
    });
  }

  /**
   * serializeAws_restJson1ModelAssociationHasOne
   */
  const se_ModelAssociationHasOne = (
    input: ModelAssociationHasOne,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'associatedWith': _ => se_ModelField(_, context),
      'associatedWithFields': _ => se_ModelFieldList(_, context),
      'connectedModel': [],
      'targetName': [],
      'targetNames': _json,
    });
  }

  /**
   * serializeAws_restJson1ModelField
   */
  const se_ModelField = (
    input: ModelField,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'association': _ => se_ModelAssociation(_, context),
      'authRules': _json,
      'isReadOnly': [],
      'name': [],
      'type': _ => se_SchemaType(_, context),
    });
  }

  /**
   * serializeAws_restJson1ModelFieldList
   */
  const se_ModelFieldList = (
    input: (ModelField)[],
    context: __SerdeContext
  ): any => {
    return input.filter((e: any) => e != null).map(entry => {
      return se_ModelField(entry, context);
    });
  }

  /**
   * serializeAws_restJson1ModelFieldMap
   */
  const se_ModelFieldMap = (
    input: Record<string, ModelField>,
    context: __SerdeContext
  ): any => {
    return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_ModelField(value, context);
      return acc;
    }, {});
  }

  // se_ModelForeignKey omitted.

  // se_ModelGraph omitted.

  // se_ModelIndex omitted.

  // se_ModelIndexList omitted.

  // se_ModelPrimaryKey omitted.

  // se_ModelSecondaryKey omitted.

  // se_ModelType omitted.

  /**
   * serializeAws_restJson1ModelTypeDefinition
   */
  const se_ModelTypeDefinition = (
    input: ModelTypeDefinition,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'authRules': _json,
      'fields': _ => se_ModelFieldMap(_, context),
      'indexes': _json,
      'name': [],
      'pluralName': [],
    });
  }

  // se_NonModelType omitted.

  /**
   * serializeAws_restJson1NonModelTypeDefinition
   */
  const se_NonModelTypeDefinition = (
    input: NonModelTypeDefinition,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'fields': _ => se_ModelFieldMap(_, context),
      'name': [],
    });
  }

  // se_ScalarType omitted.

  /**
   * serializeAws_restJson1SchemaDefinition
   */
  const se_SchemaDefinition = (
    input: SchemaDefinition,
    context: __SerdeContext
  ): any => {
    return take(input, {
      'modelGraph': _json,
      'typeDefinitions': _ => se_SchemaTypeDefinitionMap(_, context),
    });
  }

  /**
   * serializeAws_restJson1SchemaType
   */
  const se_SchemaType = (
    input: SchemaType,
    context: __SerdeContext
  ): any => {
    return SchemaType.visit(input, {
      enum: value => ({ "enum": _json(value) }),
      list: value => ({ "list": se_ListType(value, context) }),
      model: value => ({ "model": _json(value) }),
      nonModel: value => ({ "nonModel": _json(value) }),
      scalar: value => ({ "scalar": _json(value) }),
      _: (name, value) => ({ name: value } as any)
    });
  }

  /**
   * serializeAws_restJson1SchemaTypeDefinition
   */
  const se_SchemaTypeDefinition = (
    input: SchemaTypeDefinition,
    context: __SerdeContext
  ): any => {
    return SchemaTypeDefinition.visit(input, {
      enum: value => ({ "enum": _json(value) }),
      model: value => ({ "model": se_ModelTypeDefinition(value, context) }),
      nonModel: value => ({ "nonModel": se_NonModelTypeDefinition(value, context) }),
      _: (name, value) => ({ name: value } as any)
    });
  }

  /**
   * serializeAws_restJson1SchemaTypeDefinitionMap
   */
  const se_SchemaTypeDefinitionMap = (
    input: Record<string, SchemaTypeDefinition>,
    context: __SerdeContext
  ): any => {
    return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_SchemaTypeDefinition(value, context);
      return acc;
    }, {});
  }

  // se_StringList omitted.

  // se_StringSet omitted.

  const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  });

  // Encode Uint8Array data into string with utf-8.
  const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

  const isSerializableHeaderValue = (value: any): boolean =>
    value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

  const parseBody = (streamBody: any, context: __SerdeContext): any => collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

  const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
  }

  /**
   * Load an error code for the aws.rest-json-1.1 protocol.
   */
  const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
    const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

    const sanitizeErrorCode = (rawValue: string | number): string => {
      let cleanValue = rawValue;
      if (typeof cleanValue === "number") {
        cleanValue = cleanValue.toString();
      }
      if (cleanValue.indexOf(",") >= 0) {
        cleanValue = cleanValue.split(",")[0];
      }
      if (cleanValue.indexOf(":") >= 0) {
        cleanValue = cleanValue.split(":")[0];
      }
      if (cleanValue.indexOf("#") >= 0) {
        cleanValue = cleanValue.split("#")[1];
      }
      return cleanValue;
    };

    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
      return sanitizeErrorCode(output.headers[headerKey]);
    }

    if (data.code !== undefined) {
      return sanitizeErrorCode(data.code);
    }

    if (data["__type"] !== undefined) {
      return sanitizeErrorCode(data["__type"]);
    }
  };
