import { useEffect, useState, useRef } from "react";

interface MousePosition {
	x: number;
	y: number;
}

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});
	const throttleRef = useRef(false);

	useEffect(() => {
		// Disable on mobile/touch devices
		if (typeof window !== 'undefined' && 'ontouchstart' in window) {
			return;
		}

		const handleMouseMove = (event: MouseEvent) => {
			// Throttle updates to ~30fps max
			if (throttleRef.current) return;

			throttleRef.current = true;
			setMousePosition({ x: event.clientX, y: event.clientY });

			setTimeout(() => {
				throttleRef.current = false;
			}, 33); // ~30fps
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}
