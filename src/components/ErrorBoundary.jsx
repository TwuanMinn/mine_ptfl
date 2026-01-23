import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        this.setState({ errorInfo });

        // You can also log the error to an error reporting service here
        // Example: logErrorToService(error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-gradient-to-br from-[#050508] via-[#0a0a10] to-[#070709] flex items-center justify-center p-4">
                    <div className="max-w-md w-full">
                        {/* Error Card */}
                        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/10 p-8 text-center">
                            {/* Icon */}
                            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-6">
                                <AlertTriangle className="w-8 h-8 text-red-400" />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Oops! Something went wrong
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 mb-6">
                                We encountered an unexpected error. Don't worry, your data is safe.
                            </p>

                            {/* Error Details (Development Only) */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left overflow-auto max-h-32">
                                    <p className="text-red-400 text-sm font-mono">
                                        {this.state.error.toString()}
                                    </p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={this.handleRetry}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Try Again
                                </button>

                                <button
                                    onClick={this.handleGoHome}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 transition-all duration-300"
                                >
                                    <Home className="w-4 h-4" />
                                    Go Home
                                </button>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

/**
 * Section Error Boundary - For individual sections
 * Shows a smaller error message without breaking the entire page
 */
export const SectionErrorBoundary = ({ children, sectionName = 'Section' }) => {
    return (
        <ErrorBoundary
            fallback={
                <div className="py-12 px-4">
                    <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 text-center">
                        <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Unable to load {sectionName}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            This section encountered an error. Please refresh the page to try again.
                        </p>
                    </div>
                </div>
            }
        >
            {children}
        </ErrorBoundary>
    );
};

export default ErrorBoundary;
