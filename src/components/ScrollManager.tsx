import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {debounce} from 'util/debouce';

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
