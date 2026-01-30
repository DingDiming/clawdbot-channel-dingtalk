import type { ClawdbotConfig } from 'openclaw/plugin-sdk';
import type { DingTalkConfig, SendMessageOptions, AxiosResponse, Logger, GatewayStartContext, GatewayStopResult } from './types';
declare let dingtalkConfigSchema: any;
declare function getAccessToken(config: DingTalkConfig, log?: Logger): Promise<string>;
declare function sendProactiveMessage(config: DingTalkConfig, target: string, text: string, log?: Logger): Promise<AxiosResponse>;
declare function sendProactiveMessage(config: DingTalkConfig, target: string, text: string, options?: SendMessageOptions): Promise<AxiosResponse>;
declare function sendBySession(config: DingTalkConfig, sessionWebhook: string, text: string, options?: SendMessageOptions): Promise<AxiosResponse>;
declare function sendInteractiveCard(config: DingTalkConfig, conversationId: string, text: string, options?: SendMessageOptions): Promise<{
    cardBizId: string;
    response: any;
}>;
declare function updateInteractiveCard(config: DingTalkConfig, cardBizId: string, text: string, options?: SendMessageOptions): Promise<any>;
declare function updateInteractiveCardThrottled(config: DingTalkConfig, cardBizId: string, text: string, options?: SendMessageOptions): Promise<any>;
declare function sendMessage(config: DingTalkConfig, conversationId: string, text: string, options?: SendMessageOptions & {
    cardBizId?: string;
    sessionWebhook?: string;
}): Promise<{
    ok: boolean;
    cardBizId?: string;
    error?: string;
}>;
export declare const dingtalkPlugin: {
    id: string;
    meta: {
        id: string;
        label: string;
        selectionLabel: string;
        docsPath: string;
        blurb: string;
        aliases: string[];
    };
    configSchema: any;
    capabilities: {
        chatTypes: string[];
        reactions: boolean;
        threads: boolean;
        media: boolean;
        nativeCommands: boolean;
        blockStreaming: boolean;
        outbound: boolean;
    };
    reload: {
        configPrefixes: string[];
    };
    config: {
        listAccountIds: (cfg: ClawdbotConfig) => string[];
        resolveAccount: (cfg: ClawdbotConfig, accountId?: string) => {
            accountId: string;
            config: DingTalkConfig;
            enabled: boolean;
        };
        defaultAccountId: () => string;
        isConfigured: (account: any) => boolean;
        describeAccount: (account: any) => {
            accountId: any;
            name: any;
            enabled: any;
            configured: boolean;
        };
    };
    security: {
        resolveDmPolicy: ({ account }: any) => {
            policy: any;
            allowFrom: any;
            policyPath: string;
            allowFromPath: string;
            approveHint: string;
            normalizeEntry: (raw: string) => string;
        };
    };
    groups: {
        resolveRequireMention: ({ cfg }: any) => boolean;
    };
    messaging: {
        normalizeTarget: ({ target }: any) => {
            targetId: any;
        } | null;
        targetResolver: {
            looksLikeId: (id: string) => boolean;
            hint: string;
        };
    };
    outbound: {
        deliveryMode: string;
        resolveTarget: ({ to }: any) => {
            ok: boolean;
            error: Error;
            to?: undefined;
        } | {
            ok: boolean;
            to: any;
            error?: undefined;
        };
        sendText: ({ cfg, to, text, accountId, log }: any) => Promise<{
            ok: boolean;
            data: AxiosResponse<any>;
            error?: undefined;
        } | {
            ok: boolean;
            error: any;
            data?: undefined;
        }>;
        sendMedia: ({ cfg, to, mediaPath, accountId, log }: any) => Promise<{
            ok: boolean;
            data: AxiosResponse<any>;
            error?: undefined;
        } | {
            ok: boolean;
            error: any;
            data?: undefined;
        }>;
    };
    gateway: {
        startAccount: (ctx: GatewayStartContext) => Promise<GatewayStopResult>;
    };
    status: {
        defaultRuntime: {
            accountId: string;
            running: boolean;
            lastStartAt: null;
            lastStopAt: null;
            lastError: null;
        };
        probe: ({ cfg }: any) => Promise<{
            ok: boolean;
            details: {
                clientId: string;
            };
            error?: undefined;
        } | {
            ok: boolean;
            error: any;
            details?: undefined;
        }>;
        buildChannelSummary: ({ snapshot }: any) => {
            configured: any;
            running: any;
            lastStartAt: any;
            lastStopAt: any;
            lastError: any;
        };
    };
};
/**
 * Public low-level API exports for the DingTalk channel plugin.
 *
 * - {@link sendBySession} sends a message to DingTalk using a session/webhook
 *   (e.g. replies within an existing conversation).
 * - {@link sendProactiveMessage} sends a proactive/outbound message to DingTalk
 *   without requiring an existing inbound session.
 * - {@link sendInteractiveCard} sends an interactive card to DingTalk
 *   (returns cardBizId for streaming updates).
 * - {@link updateInteractiveCard} updates an existing interactive card
 *   (for streaming message updates).
 * - {@link updateInteractiveCardThrottled} throttled version of updateInteractiveCard
 *   with rate limiting and auto-finalization timeout (recommended for streaming).
 * - {@link sendMessage} sends a message with automatic mode selection
 *   (text/markdown/card based on config).
 * - {@link getAccessToken} retrieves (and caches) the DingTalk access token
 *   for the configured application/runtime.
 *
 * These exports are intended to be used by external integrations that need
 * direct programmatic access to DingTalk messaging and authentication.
 */
export { sendBySession, sendProactiveMessage, sendInteractiveCard, updateInteractiveCard, updateInteractiveCardThrottled, sendMessage, getAccessToken, dingtalkConfigSchema, };
//# sourceMappingURL=channel.d.ts.map
