'use client';

import { Component, ReactNode, ErrorInfo } from 'react';
import { logger } from '@/lib/logger';

interface Props {
  children: ReactNode;
  /** Rendered when an error is caught. Defaults to null (renders nothing). */
  fallback?: ReactNode;
  /** Logged as context in error reports. */
  context?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Catches runtime errors in child component trees, logs them, and renders
 * an optional fallback UI instead of crashing the whole page.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    logger.error(this.props.context ?? 'ErrorBoundary', error.message, {
      stack: error.stack,
      componentStack: info.componentStack,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
