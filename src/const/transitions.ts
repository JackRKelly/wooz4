import {bezier} from './bezier';

export const transitions = {
	easeInOutVeryShort: 'all 50ms ease-in-out',
	easeInOutShort: 'all 100ms ease-in-out',
	easeInOutMedium: 'all 200ms ease-in-out',
	easeInOutLong: 'all 400ms ease-in-out',
	bezierShort: `all 100ms ${bezier.easeOutQuint}`,
	bezierMedium: `all 200ms ${bezier.easeOutQuint}`,
	bezierLong: `all 400ms ${bezier.easeOutQuint}`,
};
