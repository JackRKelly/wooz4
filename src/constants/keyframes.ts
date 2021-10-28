import {css, keyframes} from 'styled-components';
import {colors} from './colors';

export const redBlueFade = keyframes`
	0% {
		stroke: ${colors.sakuraBlue};
	}
	48% {
		stroke: ${colors.sakuraBlue};
	}
	52% {
		stroke: ${colors.sakuraRed};
	}
	100% {
		stroke: ${colors.sakuraRed};
	}
`;

export const spinnerDash = keyframes`
	0% {
		stroke-dashoffset: 187;
	}
	50% {
		stroke-dashoffset: 46.75;
		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 187;
		transform: rotate(450deg);
	}
`;

export const spinnerRotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(270deg);
	}
`;

export const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const pulse = {
	one: keyframes`
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	`,
	two: keyframes`
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.2);
		}

		100% {
			transform: scale(1);
		}
	`,
	three: keyframes`
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.3);
		}

		100% {
			transform: scale(1);
		}
	`,
};
