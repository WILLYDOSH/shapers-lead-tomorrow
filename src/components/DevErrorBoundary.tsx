import React from "react";

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class DevErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console so we can read it via Lovable logs
    console.error("DevErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-lg w-full rounded-lg border bg-card p-6 text-card-foreground shadow-strong">
            <h1 className="font-display text-2xl mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">An error occurred while rendering the app.</p>
            {this.state.error && (
              <pre className="text-xs bg-muted/50 p-3 rounded overflow-auto max-h-64">
                {this.state.error.message}
              </pre>
            )}
            <button
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default DevErrorBoundary;
