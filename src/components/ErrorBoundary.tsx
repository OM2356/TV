import {Component, type ErrorInfo, type ReactNode} from 'react';
import {Home} from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {hasError: false};

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Aai Baba TV recovered from an unexpected display error:', error, info);
  }

  handleReset = () => {
    this.setState({hasError: false});
    window.scrollTo({top: 0});
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FAF6F0] text-[#1F1712]">
          <div className="max-w-lg w-full bg-white border-2 border-[#E4D8C8] rounded-3xl p-8 text-center space-y-5 shadow-sm">
            <h1 className="text-3xl font-bold">काही हरकत नाही ❤️</h1>
            <p className="text-xl">
              पान उघडताना छोटी अडचण आली. कृपया खालील बटण दाबून मुख्य पानावर जा.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="min-h-[65px] px-8 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl inline-flex items-center gap-3 cursor-pointer"
            >
              <Home className="w-6 h-6" aria-hidden="true" />
              <span>🏠 मुख्य पान</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
