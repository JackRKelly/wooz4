import {breakpoints} from 'const';
import {css} from 'styled-components';

export const columnWidth = css`
	width: 87.5%;
	max-width: 1200px;

	@media (min-width: ${breakpoints.sm}px) {
		width: 75%;
	}

	@media (min-width: ${breakpoints.md}px) {
		width: 60%;
	}

	@media (min-width: ${breakpoints.lg}px) {
		width: 55%;
	}

	@media (min-width: ${breakpoints.xl}px) {
		width: 50%;
	}
`;
