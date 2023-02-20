// smithy-typescript generated code
import { CodegenPluginServiceServiceException as __BaseException } from "./CodegenPluginServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * @public
 * @enum
 */
export const AppSyncScalar = {
  /**
   * An extended [ISO 8601 date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates)
   * string in the format `YYYY-MM-DD`.
   *
   * > **Note**: The `AWSDate`, `AWSTime`, and `AWSDateTime` scalars can
   * optionally include a [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators).
   * For example, the values `1970-01-01Z`, `1970-01-01-07:00`, and
   * `1970-01-01+05:30` are all valid for `AWSDate`. The time zone offset must
   * be either `Z` (UTC) or an offset in hours and minutes (and, optionally,
   * seconds). For example, `±hh:mm:ss`. The seconds field in the time zone
   * offset is considered valid even though it's not part of the ISO 8601
   * standard.
   *
   */
  AWS_DATE: "AWSDate",
  /**
   * An extended [ISO 8601 date and time](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
   * string in the format `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * > **Note**: The `AWSDate`, `AWSTime`, and `AWSDateTime` scalars can
   * optionally include a [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators).
   * For example, the values `1970-01-01Z`, `1970-01-01-07:00`, and
   * `1970-01-01+05:30` are all valid for `AWSDate`. The time zone offset must
   * be either `Z` (UTC) or an offset in hours and minutes (and, optionally,
   * seconds). For example, `±hh:mm:ss`. The seconds field in the time zone
   * offset is considered valid even though it's not part of the ISO 8601
   * standard.
   *
   */
  AWS_DATE_TIME: "AWSDateTime",
  /**
   * An email address in the format local-part@domain-part as defined by
   * [RFC 822](https://tools.ietf.org/html/rfc822).
   *
   */
  AWS_EMAIL: "AWSEmail",
  /**
   * A valid IPv4 or IPv6 address.
   *
   * IPv4 addresses are expected in quad-dotted notation (`123.12.34.56`).
   * IPv6 addresses are expected in non-bracketed, colon-separated format
   * (`1a2b:3c4b::1234:4567`). You can include an optional CIDR suffix
   * (`123.45.67.89/16`) to indicate subnet mask.
   *
   */
  AWS_IP_ADDRESS: "AWSIPAddress",
  /**
   * A JSON string.
   *
   * Any valid JSON construct is automatically parsed and loaded in the
   * resolver mapping templates as maps, lists, or scalar values rather than
   * as the literal input strings. Unquoted strings or otherwise invalid JSON
   * result in a GraphQL validation error.
   *
   */
  AWS_JSON: "AWSJSON",
  /**
   * A phone number.
   *
   * This value is stored as a string. Phone numbers can contain either spaces
   * or hyphens to separate digit groups. Phone numbers without a country code
   * are assumed to be US/North American numbers adhering to the
   * [North American Numbering Plan (NANP)](https://en.wikipedia.org/wiki/North_American_Numbering_Plan).
   *
   */
  AWS_PHONE: "AWSPhone",
  /**
   * An extended [ISO 8601 time](https://en.wikipedia.org/wiki/ISO_8601#Times)
   * string in the format `hh:mm:ss.sss`.
   *
   * > **Note**: The `AWSDate`, `AWSTime`, and `AWSDateTime` scalars can
   * optionally include a [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators).
   * For example, the values `1970-01-01Z`, `1970-01-01-07:00`, and
   * `1970-01-01+05:30` are all valid for `AWSDate`. The time zone offset must
   * be either `Z` (UTC) or an offset in hours and minutes (and, optionally,
   * seconds). For example, `±hh:mm:ss`. The seconds field in the time zone
   * offset is considered valid even though it's not part of the ISO 8601
   * standard.
   *
   */
  AWS_TIME: "AWSTime",
  /**
   * An integer value representing the number of seconds before or after
   * `1970-01-01-T00:00Z`.
   *
   */
  AWS_TIMESTAMP: "AWSTimestamp",
  /**
   * A URL as defined by [RFC 1738](https://tools.ietf.org/html/rfc1738).
   *
   * For example, `https://www.amazon.com/dp/B000NZW3KC/` or `mailto:example@example.com`.
   * URLs must contain a schema (`http`, `mailto`) and can't contain two
   * forward slashes (`//`) in the path part.
   *
   */
  AWS_URL: "AWSURL",
  /**
   * A boolean value, either `true` or `false`.
   *
   */
  BOOLEAN: "Boolean",
  /**
   * An IEEE 754 double-precision floating-point value.
   *
   */
  FLOAT: "Float",
  /**
   * A unique identifier for an object. This scalar is serialized like a
   * `String` but isn't meant to be human-readable.
   *
   */
  ID: "ID",
  /**
   * A signed 32-bit integer, e.g. an integer value between -(2^31) and 2^31-1.
   *
   */
  INT: "Int",
  /**
   * A UTF-8 character sequence.
   *
   */
  STRING: "String",
} as const
/**
 * @public
 */
export type AppSyncScalar = typeof AppSyncScalar[keyof typeof AppSyncScalar]

/**
 * @public
 * @enum
 */
export const AuthModelOperation = {
  CREATE: "create",
  DELETE: "delete",
  GET: "get",
  LIST: "list",
  LISTEN: "listen",
  READ: "read",
  SEARCH: "search",
  SYNC: "sync",
  UPDATE: "update",
} as const
/**
 * @public
 */
export type AuthModelOperation = typeof AuthModelOperation[keyof typeof AuthModelOperation]

/**
 * @public
 * @enum
 */
export const AuthProvider = {
  AMAZON_COGNITO_USER_POOLS: "userPools",
  API_KEY: "apiKey",
  AWS_IAM: "iam",
  FUNCTION: "function",
  OPENID_CONNECT: "oidc",
} as const
/**
 * @public
 */
export type AuthProvider = typeof AuthProvider[keyof typeof AuthProvider]

/**
 * @public
 * @enum
 */
export const AuthStrategy = {
  CUSTOM: "custom",
  GROUPS: "groups",
  OWNER: "owner",
  PRIVATE: "private",
  PUBLIC: "public",
} as const
/**
 * @public
 */
export type AuthStrategy = typeof AuthStrategy[keyof typeof AuthStrategy]

/**
 * @public
 */
export interface AuthRule {
  authStrategy: AuthStrategy | string | undefined;
  ownerField?: string;
  identityClaim?: string;
  groupClaim?: string;
  groups?: (string)[];
  groupsField?: string;
  provider?: AuthProvider | string;
  operations?: (AuthModelOperation | string)[];
}

/**
 * @public
 */
export class CodegenError extends __BaseException {
  readonly name: "CodegenError" = "CodegenError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodegenError, __BaseException>) {
    super({
      name: "CodegenError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, CodegenError.prototype);
  }
}

/**
 * @public
 */
export interface EnumTypeDefinition {
  name: string | undefined;
  values: (string)[] | undefined;
}

/**
 * @public
 */
export interface ModelAssociationBelongsTo {
  /**
   * The name of the associated model.
   */
  connectedModel: string | undefined;

  targetName: string | undefined;
  targetNames: (string)[] | undefined;
}

/**
 * @public
 * A custom enumeration.
 *
 * ```graphql
 * # `MyEnum` is an enum type.
 * enum MyEnum \{
 *   VALUE1
 *   VALUE2
 * \}
 * ```
 *
 */
export interface EnumType {
  /**
   * Whether the type is required (non-nullable) in this context.
   */
  isRequired: boolean | undefined;

  /**
   * The name of the enum type, as defined in the schema.
   */
  enum: string | undefined;
}

/**
 * @public
 * A custom structure with an `@model` directive.
 *
 * ```graphql
 * # `MyModel` is a model type.
 * type MyModel @model \{
 *   id: ID!
 * \}
 * ```
 *
 */
export interface ModelType {
  /**
   * Whether the type is required (non-nullable) in this context.
   */
  isRequired: boolean | undefined;

  /**
   * The name of the model type, as defined in the schema.
   */
  model: string | undefined;
}

/**
 * @public
 * A custom structure without an `@model` directive.
 *
 * ```graphql
 * # `MyNonModel` is a non-model type.
 * type MyNonModel \{
 *   name: String!
 * \}
 * ```
 *
 */
export interface NonModelType {
  /**
   * Whether the type is required (non-nullable) in this context.
   */
  isRequired: boolean | undefined;

  /**
   * The name of the non-model type, as defined in the schema.
   */
  nonModel: string | undefined;
}

/**
 * @public
 * A scalar (primitive) type, e.g. `ID`, `String`, `AWSDateTime`.
 *
 * AppSync defines 9 [scalar types](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html)
 * on top of the default 5 GraphQL scalar types (`ID`, `String`, `Int`, `Float`, `Boolean`):
 *
 * - `AWSDate`
 * - `AWSTime`
 * - `AWSDateTime`
 * - `AWSTimestamp`
 * - `AWSEmail`
 * - `AWSJSON`
 * - `AWSURL`
 * - `AWSPhone`
 * - `AWSIPAddress`
 *
 */
export interface ScalarType {
  /**
   * Whether the type is required (non-nullable) in this context.
   */
  isRequired: boolean | undefined;

  /**
   * The AppSync scalar type, as defined in the schema.
   */
  scalar: AppSyncScalar | string | undefined;
}

/**
 * @public
 * A foreign key model index, which is a special case of a secondary key.
 *
 */
export interface ModelForeignKey {
  /**
   * The primary field for the index.
   *
   * This is the field to which the `@index` or `@primaryKey` directive is
   * attached. For foreign keys, this is the field with the relational
   * directive.
   *
   */
  primaryField: string | undefined;

  /**
   * The list of field names which, combined with [field], form a composite key or index.
   *
   * This is the list of fields specified by the `sortKeyFields` argument
   * to the `@index` or `@primaryKey` directive. For foreign keys, this is
   * the list of target fields in this model.
   *
   */
  sortKeyFields: (string)[] | undefined;

  /**
   * The name of the the foreign key to use in the generated code.
   *
   */
  name: string | undefined;
}

/**
 * @public
 * An `@primaryKey` model index.
 *
 */
export interface ModelPrimaryKey {
  /**
   * The primary field for the index.
   *
   * This is the field to which the `@index` or `@primaryKey` directive is
   * attached. For foreign keys, this is the field with the relational
   * directive.
   *
   */
  primaryField: string | undefined;

  /**
   * The list of field names which, combined with [field], form a composite key or index.
   *
   * This is the list of fields specified by the `sortKeyFields` argument
   * to the `@index` or `@primaryKey` directive. For foreign keys, this is
   * the list of target fields in this model.
   *
   */
  sortKeyFields?: (string)[];
}

/**
 * @public
 * An `@index` model index.
 *
 */
export interface ModelSecondaryKey {
  /**
   * The primary field for the index.
   *
   * This is the field to which the `@index` or `@primaryKey` directive is
   * attached. For foreign keys, this is the field with the relational
   * directive.
   *
   */
  primaryField: string | undefined;

  /**
   * The list of field names which, combined with [field], form a composite key or index.
   *
   * This is the list of fields specified by the `sortKeyFields` argument
   * to the `@index` or `@primaryKey` directive. For foreign keys, this is
   * the list of target fields in this model.
   *
   */
  sortKeyFields?: (string)[];

  /**
   * The index's name that is defined by the `name` parameter of `@index`
   * directive in the model schema.
   *
   */
  name: string | undefined;

  /**
   * The index's query field that is defined by the `queryField` parameter of `@index`
   * directive in the model schema.
   *
   */
  queryField: string | undefined;
}

/**
 * @public
 */
export type ModelIndex =
  | ModelIndex.ForeignKeyMember
  | ModelIndex.PrimaryKeyMember
  | ModelIndex.SecondaryKeyMember
  | ModelIndex.$UnknownMember

/**
 * @public
 */
export namespace ModelIndex {

  /**
   * An `@primaryKey` model index.
   *
   */
  export interface PrimaryKeyMember {
    primaryKey: ModelPrimaryKey;
    secondaryKey?: never;
    foreignKey?: never;
    $unknown?: never;
  }

  /**
   * An `@index` model index.
   *
   */
  export interface SecondaryKeyMember {
    primaryKey?: never;
    secondaryKey: ModelSecondaryKey;
    foreignKey?: never;
    $unknown?: never;
  }

  /**
   * A foreign key model index, which is a special case of a secondary key.
   *
   */
  export interface ForeignKeyMember {
    primaryKey?: never;
    secondaryKey?: never;
    foreignKey: ModelForeignKey;
    $unknown?: never;
  }

  export interface $UnknownMember {
    primaryKey?: never;
    secondaryKey?: never;
    foreignKey?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    primaryKey: (value: ModelPrimaryKey) => T;
    secondaryKey: (value: ModelSecondaryKey) => T;
    foreignKey: (value: ModelForeignKey) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: ModelIndex,
    visitor: Visitor<T>
  ): T => {
    if (value.primaryKey !== undefined) return visitor.primaryKey(value.primaryKey);
    if (value.secondaryKey !== undefined) return visitor.secondaryKey(value.secondaryKey);
    if (value.foreignKey !== undefined) return visitor.foreignKey(value.foreignKey);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

}

/**
 * @public
 * A list of another [SchemaType].
 *
 * ```graphql
 * type MyNonModel \{
 *     name: String!
 * \}
 *
 * # `nonModels` is a list type of `MyNonModel` types
 * type MyModel @model \{
 *     id: ID!
 *     nonModels: [MyNonModel]
 * \}
 * ```
 *
 */
export interface ListType {
  /**
   * Whether the type is required (non-nullable) in this context.
   */
  isRequired: boolean | undefined;

  /**
   * The type of the list's elements.
   */
  ofType: SchemaType | undefined;
}

/**
 * @public
 * A reference to an Amplify schema type.
 *
 * An Amplify schema type is either a scalar, model, non-model, enum, or a collection of one of these.
 *
 */
export type SchemaType =
  | SchemaType.EnumMember
  | SchemaType.ListMember
  | SchemaType.ModelMember
  | SchemaType.NonModelMember
  | SchemaType.ScalarMember
  | SchemaType.$UnknownMember

/**
 * @public
 */
export namespace SchemaType {

  /**
   * A scalar (primitive) type, e.g. `ID`, `String`, `AWSDateTime`.
   *
   * AppSync defines 9 [scalar types](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html)
   * on top of the default 5 GraphQL scalar types (`ID`, `String`, `Int`, `Float`, `Boolean`):
   *
   * - `AWSDate`
   * - `AWSTime`
   * - `AWSDateTime`
   * - `AWSTimestamp`
   * - `AWSEmail`
   * - `AWSJSON`
   * - `AWSURL`
   * - `AWSPhone`
   * - `AWSIPAddress`
   *
   */
  export interface ScalarMember {
    scalar: ScalarType;
    enum?: never;
    model?: never;
    nonModel?: never;
    list?: never;
    $unknown?: never;
  }

  /**
   * A custom enumeration.
   *
   * ```graphql
   * # `MyEnum` is an enum type.
   * enum MyEnum \{
   *   VALUE1
   *   VALUE2
   * \}
   * ```
   *
   */
  export interface EnumMember {
    scalar?: never;
    enum: EnumType;
    model?: never;
    nonModel?: never;
    list?: never;
    $unknown?: never;
  }

  /**
   * A custom structure with an `@model` directive.
   *
   * ```graphql
   * # `MyModel` is a model type.
   * type MyModel @model \{
   *   id: ID!
   * \}
   * ```
   *
   */
  export interface ModelMember {
    scalar?: never;
    enum?: never;
    model: ModelType;
    nonModel?: never;
    list?: never;
    $unknown?: never;
  }

  /**
   * A custom structure without an `@model` directive.
   *
   * ```graphql
   * # `MyNonModel` is a non-model type.
   * type MyNonModel \{
   *   name: String!
   * \}
   * ```
   *
   */
  export interface NonModelMember {
    scalar?: never;
    enum?: never;
    model?: never;
    nonModel: NonModelType;
    list?: never;
    $unknown?: never;
  }

  /**
   * A list of another [SchemaType].
   *
   * ```graphql
   * type MyNonModel \{
   *     name: String!
   * \}
   *
   * # `nonModels` is a list type of `MyNonModel` types
   * type MyModel @model \{
   *     id: ID!
   *     nonModels: [MyNonModel]
   * \}
   * ```
   *
   */
  export interface ListMember {
    scalar?: never;
    enum?: never;
    model?: never;
    nonModel?: never;
    list: ListType;
    $unknown?: never;
  }

  export interface $UnknownMember {
    scalar?: never;
    enum?: never;
    model?: never;
    nonModel?: never;
    list?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    scalar: (value: ScalarType) => T;
    enum: (value: EnumType) => T;
    model: (value: ModelType) => T;
    nonModel: (value: NonModelType) => T;
    list: (value: ListType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: SchemaType,
    visitor: Visitor<T>
  ): T => {
    if (value.scalar !== undefined) return visitor.scalar(value.scalar);
    if (value.enum !== undefined) return visitor.enum(value.enum);
    if (value.model !== undefined) return visitor.model(value.model);
    if (value.nonModel !== undefined) return visitor.nonModel(value.nonModel);
    if (value.list !== undefined) return visitor.list(value.list);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

}

/**
 * @public
 */
export interface ModelField {
  name: string | undefined;
  /**
   * A reference to an Amplify schema type.
   *
   * An Amplify schema type is either a scalar, model, non-model, enum, or a collection of one of these.
   *
   */
  type: SchemaType | undefined;

  isReadOnly?: boolean;
  association?: ModelAssociation;
  authRules?: (AuthRule)[];
}

/**
 * @public
 */
export interface ModelTypeDefinition {
  name: string | undefined;
  pluralName: string | undefined;
  fields: Record<string, ModelField> | undefined;
  indexes: (ModelIndex)[] | undefined;
  authRules?: (AuthRule)[];
}

/**
 * @public
 */
export interface NonModelTypeDefinition {
  name: string | undefined;
  fields: Record<string, ModelField> | undefined;
}

/**
 * @public
 */
export interface ModelAssociationHasMany {
  /**
   * The name of the associated model.
   */
  connectedModel: string | undefined;

  associatedWith: ModelField | undefined;
  associatedWithFields: (ModelField)[] | undefined;
}

/**
 * @public
 */
export interface ModelAssociationHasOne {
  /**
   * The name of the associated model.
   */
  connectedModel: string | undefined;

  targetName: string | undefined;
  targetNames: (string)[] | undefined;
  associatedWith: ModelField | undefined;
  associatedWithFields: (ModelField)[] | undefined;
}

/**
 * @public
 */
export type ModelAssociation =
  | ModelAssociation.BelongsToMember
  | ModelAssociation.HasManyMember
  | ModelAssociation.HasOneMember
  | ModelAssociation.$UnknownMember

/**
 * @public
 */
export namespace ModelAssociation {

  export interface BelongsToMember {
    belongsTo: ModelAssociationBelongsTo;
    hasMany?: never;
    hasOne?: never;
    $unknown?: never;
  }

  export interface HasManyMember {
    belongsTo?: never;
    hasMany: ModelAssociationHasMany;
    hasOne?: never;
    $unknown?: never;
  }

  export interface HasOneMember {
    belongsTo?: never;
    hasMany?: never;
    hasOne: ModelAssociationHasOne;
    $unknown?: never;
  }

  export interface $UnknownMember {
    belongsTo?: never;
    hasMany?: never;
    hasOne?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    belongsTo: (value: ModelAssociationBelongsTo) => T;
    hasMany: (value: ModelAssociationHasMany) => T;
    hasOne: (value: ModelAssociationHasOne) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: ModelAssociation,
    visitor: Visitor<T>
  ): T => {
    if (value.belongsTo !== undefined) return visitor.belongsTo(value.belongsTo);
    if (value.hasMany !== undefined) return visitor.hasMany(value.hasMany);
    if (value.hasOne !== undefined) return visitor.hasOne(value.hasOne);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

}

/**
 * @public
 */
export type SchemaTypeDefinition =
  | SchemaTypeDefinition.EnumMember
  | SchemaTypeDefinition.ModelMember
  | SchemaTypeDefinition.NonModelMember
  | SchemaTypeDefinition.$UnknownMember

/**
 * @public
 */
export namespace SchemaTypeDefinition {

  export interface ModelMember {
    model: ModelTypeDefinition;
    nonModel?: never;
    enum?: never;
    $unknown?: never;
  }

  export interface NonModelMember {
    model?: never;
    nonModel: NonModelTypeDefinition;
    enum?: never;
    $unknown?: never;
  }

  export interface EnumMember {
    model?: never;
    nonModel?: never;
    enum: EnumTypeDefinition;
    $unknown?: never;
  }

  export interface $UnknownMember {
    model?: never;
    nonModel?: never;
    enum?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    model: (value: ModelTypeDefinition) => T;
    nonModel: (value: NonModelTypeDefinition) => T;
    enum: (value: EnumTypeDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: SchemaTypeDefinition,
    visitor: Visitor<T>
  ): T => {
    if (value.model !== undefined) return visitor.model(value.model);
    if (value.nonModel !== undefined) return visitor.nonModel(value.nonModel);
    if (value.enum !== undefined) return visitor.enum(value.enum);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

}

/**
 * @public
 */
export interface SchemaDefinition {
  typeDefinitions?: Record<string, SchemaTypeDefinition>;
  /**
   * The adjacency list representation of the model graph, indexed by
   * model name with the values representing the dependent model types.
   *
   * ## Example
   *
   * For the Blog, Post, Comment schema:
   *
   * ```graphql
   * type Blog @model \{
   *     posts: [Post] @hasMany
   * \}
   *
   * type Post @model \{
   *     blog: Blog @belongsTo
   *     comments: [Comment] @hasMany
   * \}
   *
   * type Comment @model \{
   *     post: Post @belongsTo
   * \}
   * ```
   *
   * The model graph would look like:
   *
   * ```json
   * \{
   *     "Blog": ["Post", "Comment"],
   *     "Post": ["Comment"],
   *     "Comment": []
   * \}
   *
   */
  modelGraph?: Record<string, (string)[]>;
}

/**
 * @public
 */
export interface CodegenRequest {
  /**
   * The path to the project root
   */
  projectRoot: string | undefined;

  /**
   * All type definitions in the schema.
   */
  schemaDefinition: SchemaDefinition | undefined;
}
