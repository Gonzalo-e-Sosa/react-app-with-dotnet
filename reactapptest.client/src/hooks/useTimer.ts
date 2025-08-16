import { useEffect, useRef, useCallback } from 'react';

/**
 * useTimer - Custom hook to run a callback after a delay, with cancel and reset support.
 * @param callback Function to call after delay
 * @param delay Delay in ms (number or null to disable)
 * @param deps Dependency array to reset timer
 * @returns { start, cancel }
 */
export function useTimer(
    callback: () => void,
    delay: number | null,
    deps: unknown[] = []
) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const cancel = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const start = useCallback(() => {
        cancel();
        if (delay !== null) {
            timerRef.current = setTimeout(callback, delay);
        }
    }, [callback, delay, cancel]);

    useEffect(() => {
        start();
        return cancel;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { start, cancel };
}
