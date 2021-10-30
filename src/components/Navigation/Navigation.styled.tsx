import styled from 'styled-components';
import {columnWidth, breakpoints, colors, transitions} from '../../const';
import {FlexColumnWrapper} from '../Flex.styled';

export const StyledNavigation = styled.nav`
	${columnWidth}
`;

export const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;

	@media (max-width: ${breakpoints.lg}px) {
		display: block;
	}
`;

export const NavigationWrapper = styled.div`
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);

	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(255, 255, 255, 0.7);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
`;

interface StyledLinkProps {
	active: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
	display: block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;
	position: relative;

	&:nth-child(2n + 1) {
		&::after {
			background-color: ${props =>
				props.active ? colors.sakuraRed : colors.gray};
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: ${props => (props.active ? '90%' : '0%')};
		height: 1.5px;
		background-color: ${props =>
			props.active ? colors.sakuraBlue : colors.gray};
		transition: ${transitions.easeInOutShort};
	}

	&:hover::after {
		width: 90%;
	}
`;

export const StyledFullscreenNavigation = styled.div<{open: boolean}>`
	transition: ${transitions.easeInOutMedium};
	position: fixed;
	top: 0;
	width: 100vw;
	right: ${props => (props.open ? '0' : '-200%')};
	bottom: 0;
	background-color: white;
	z-index: 11;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FlexColumnWrapperHeight = styled(FlexColumnWrapper)`
	height: 50%;
`;
export const StyledDesktopNavigation = styled(StyledNavigation)`
	display: none;

	@media (min-width: ${breakpoints.lg}px) {
		display: block;
	}
`;
