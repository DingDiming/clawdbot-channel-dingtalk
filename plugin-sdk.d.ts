// Minimal SDK type stubs to keep builds working across OpenClaw/Clawdbot.

declare module 'openclaw/plugin-sdk' {
  export type AnyRecord = Record<string, any>;

  export interface PluginRuntime extends AnyRecord {}

  export interface ClawdbotConfig extends AnyRecord {}

  export interface ClawdbotPluginApi {
    runtime: PluginRuntime;
    registerChannel(input: AnyRecord): void;
    registerGatewayMethod(name: string, handler: AnyRecord): void;
    logger?: {
      info?: (message: string) => void;
      warn?: (message: string) => void;
      error?: (message: string) => void;
    };
  }

  export function buildChannelConfigSchema(schema: AnyRecord): AnyRecord;
}

declare module 'clawdbot/plugin-sdk' {
  export * from 'openclaw/plugin-sdk';
}
