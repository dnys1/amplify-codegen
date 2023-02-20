// smithy-typescript generated code
import {
  CodegenPluginServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodegenPluginServiceClient";
import { CodegenRequest } from "../models/models_0";
import {
  de_CodegenCommand,
  se_CodegenCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CodegenCommand}.
 */
export interface CodegenCommandInput extends CodegenRequest {}
/**
 * @public
 *
 * The output of {@link CodegenCommand}.
 */
export interface CodegenCommandOutput extends __MetadataBearer {}

export class CodegenCommand extends $Command<CodegenCommandInput, CodegenCommandOutput, CodegenPluginServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: CodegenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodegenPluginServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CodegenCommandInput, CodegenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodegenPluginServiceClient";
    const commandName = "CodegenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        (_: any) => _,
      outputFilterSensitiveLog:
        (_: any) => _,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: CodegenCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CodegenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CodegenCommandOutput> {
    return de_CodegenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
