import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildWebpackDevServer(
  options: BuildOptions
): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
  };
}
