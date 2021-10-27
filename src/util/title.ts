export const buildTitle = (
	content: string,
	titlePlacement: 'before' | 'after',
) => {
	if (titlePlacement === 'before') {
		return `jrk.digital | ${content}`;
	}

	return `${content} | jrk.digital`;
};
