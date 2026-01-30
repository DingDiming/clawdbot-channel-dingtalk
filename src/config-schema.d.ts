import { z } from 'zod';
/**
 * DingTalk configuration schema using Zod
 * Mirrors the structure needed for proper control-ui rendering
 */
export declare const DingTalkConfigSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    clientId: z.ZodOptional<z.ZodString>;
    clientSecret: z.ZodOptional<z.ZodString>;
    robotCode: z.ZodOptional<z.ZodString>;
    corpId: z.ZodOptional<z.ZodString>;
    agentId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    dmPolicy: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        open: "open";
        pairing: "pairing";
        allowlist: "allowlist";
    }>>>;
    groupPolicy: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        open: "open";
        allowlist: "allowlist";
    }>>>;
    allowFrom: z.ZodOptional<z.ZodArray<z.ZodString>>;
    showThinking: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    debug: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    messageType: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        text: "text";
        markdown: "markdown";
        card: "card";
    }>>>;
    cardTemplateId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    cardSendApiUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    cardUpdateApiUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    accounts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type DingTalkConfig = z.infer<typeof DingTalkConfigSchema>;
//# sourceMappingURL=config-schema.d.ts.map