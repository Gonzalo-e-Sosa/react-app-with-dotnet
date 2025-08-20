import { useState, useEffect, useRef, useCallback } from "react";

interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

/**
 * useFetch - Custom hook to fetch data with loading, error, and abort support (like React Query).
 * @template T Type of the data to fetch
 * @param {string | null} url The URL to fetch data from
 * @param {RequestInit} [options] Optional fetch options
 * @param {unknown[]} [deps] Dependency array to re-run fetch (besides url)
 * @returns {{
 *   data: T | null,
 *   loading: boolean,
 *   error: Error | null,
 *   refetch: () => void,
 *   abort: () => void
 * }}
 *
 * Example:
 *   const { data, loading, error, refetch, abort } = useFetch<User[]>('/api/users');
 */
export function useFetch<T = unknown>(
	url: string | null,
	options?: RequestInit,
	deps: unknown[] = [],
): FetchState<T> & { refetch: () => void; abort: () => void } {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const abortControllerRef = useRef<AbortController | null>(null);
	const [trigger, setTrigger] = useState(0);

	const abort = useCallback(() => {
		abortControllerRef.current?.abort();
	}, []);

	const refetch = useCallback(() => {
		setTrigger((t) => t + 1);
	}, []);

	useEffect(() => {
		if (!url) return;
		setLoading(true);
		setError(null);
		abortControllerRef.current?.abort();
		const controller = new AbortController();
		abortControllerRef.current = controller;

		fetch(url, { ...options, signal: controller.signal })
			.then(async (res) => {
				if (!res.ok) throw new Error(res.statusText);
				const data = (await res.json()) as T;
				setData(data);
				setError(null);
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					setError(err);
					setData(null);
				}
			})
			.finally(() => {
				setLoading(false);
			});

		return () => {
			controller.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, trigger, ...deps]);

	return { data, loading, error, refetch, abort };
}
