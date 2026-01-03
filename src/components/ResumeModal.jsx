import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Ankit_Singh_Resume.pdf';
        link.click();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-5xl h-[90vh] bg-dark-surface border border-dark-border rounded-lg shadow-2xl animate-slide-up overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-dark-border bg-dark-bg/50">
                    <h2 className="text-xl font-semibold text-dark-text">Resume</h2>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-accent-hover text-white rounded-md transition-colors duration-200"
                        >
                            <Download size={18} />
                            <span className="hidden sm:inline">Download PDF</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-dark-border rounded-md transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-dark-muted hover:text-dark-text" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-hidden">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full"
                        title="Resume PDF"
                    />
                </div>

                {/* Mobile fallback message */}
                <div className="sm:hidden absolute inset-0 flex items-center justify-center bg-dark-surface/95 pointer-events-none">
                    <div className="text-center p-6 pointer-events-auto">
                        <p className="text-dark-muted mb-4">
                            PDF preview may not be available on mobile devices.
                        </p>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-hover text-white rounded-md transition-colors duration-200 mx-auto"
                        >
                            <Download size={20} />
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
