import {useRouter} from 'next/router';
import {useEffect} from 'react';

function debounce<Params extends any[]>(
	func: (...args: Params) => any,
	timeout: number,
): (...args: Params) => void {
	let timer: NodeJS.Timeout;
	return (...args: Params) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, timeout);
	};
}

const pathMap = new Map();

const ScrollManager = () => {
	const {pathname} = useRouter();

	useEffect(() => {
		if (pathMap.has(pathname)) {
			window.scrollTo(0, pathMap.get(pathname));
		} else {
			pathMap.set(pathname, 0);
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	useEffect(() => {
		const fn = debounce(() => {
			pathMap.set(pathname, window.scrollY);
		}, 200);

		window.addEventListener('scroll', fn);
		return () => {
			window.removeEventListener('scroll', fn);
		};
	}, [pathname]);

	return null;
};

export default ScrollManager;
