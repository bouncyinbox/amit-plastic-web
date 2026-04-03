type Level = 'info' | 'warn' | 'error';

interface LogEntry {
  ts: string;
  level: Level;
  context: string;
  message: string;
  data?: unknown;
}

function log(level: Level, context: string, message: string, data?: unknown): void {
  const entry: LogEntry = {
    ts: new Date().toISOString(),
    level,
    context,
    message,
    ...(data !== undefined && { data }),
  };

  if (level === 'error') console.error(entry);
  else if (level === 'warn') console.warn(entry);
  else console.log(entry);
}

export const logger = {
  info:  (context: string, message: string, data?: unknown) => log('info',  context, message, data),
  warn:  (context: string, message: string, data?: unknown) => log('warn',  context, message, data),
  error: (context: string, message: string, data?: unknown) => log('error', context, message, data),
};
