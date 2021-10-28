export const buildTitle = (
	content: string,
	titlePlacement: 'before' | 'after',
) => {
	if (titlePlacement === 'before') {
		return `wooz4.com — ${content}`;
	}

	return `${content} — wooz4.com`;
};
