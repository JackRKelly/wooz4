import {keyframes} from 'styled-components';
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
