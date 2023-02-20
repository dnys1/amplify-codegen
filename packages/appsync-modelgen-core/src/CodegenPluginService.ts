// smithy-typescript generated code
import {
  CodegenPluginServiceClient,
  CodegenPluginServiceClientConfig,
} from "./CodegenPluginServiceClient";
import {
  CodegenCommand,
  CodegenCommandInput,
  CodegenCommandOutput,
} from "./commands/CodegenCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  CodegenCommand,
}

export interface CodegenPluginService {
  /**
   * @see {@link CodegenCommand}
   */
  codegen(
    args: CodegenCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CodegenCommandOutput>;
  codegen(
    args: CodegenCommandInput,
    cb: (err: any, data?: CodegenCommandOutput) => void
  ): void;
  codegen(
    args: CodegenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CodegenCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class CodegenPluginService extends CodegenPluginServiceClient implements CodegenPluginService {}
createAggregatedClient(commands, CodegenPluginService);
