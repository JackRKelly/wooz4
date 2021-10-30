export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export const scrollFromTop = (position: number) => {
	window.scrollTo({
		// Subtract navbar height, eventually make context for nav height?
		top: position - 48,
		behavior: 'smooth',
	});
};
