import type { Logger, RetryOptions } from './src/types';
/**
 * Mask sensitive fields in data for safe logging
 * Prevents PII leakage in debug logs
 */
export declare function maskSensitiveData(data: unknown): any;
/**
 * Cleanup orphaned temp files from dingtalk media
 * Run at startup to clean up files from crashed processes
 */
export declare function cleanupOrphanedTempFiles(log?: Logger): number;
/**
 * Retry logic for API calls with exponential backoff
 * Handles transient failures like 401 token expiry
 */
export declare function retryWithBackoff<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
//# sourceMappingURL=utils.d.ts.map