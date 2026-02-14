import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
    const { progress } = useScrollProgress();

    return (
        <div
            className="fixed top-0 left-0 h-1 z-[9999] transition-all duration-100 ease-out"
            style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, #F43F5E, #E11D48, #BE123C)',
                boxShadow: '0 0 10px rgba(244, 63, 94, 0.5)',
            }}
        />
    );
}
