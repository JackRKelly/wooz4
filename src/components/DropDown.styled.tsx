import styled from 'styled-components';
import {colors, transitions} from '../const';

export const DropDownHeader = styled.div<{isOpen: boolean}>`
	cursor: pointer;
	user-select: none;
	border-radius: ${props => (props.isOpen ? '3px 3px 0 0' : '3px')};
	transition: ${transitions.easeInOutMedium};
	padding: 0.3rem 0.9rem;
	text-transform: uppercase;
	font-weight: bold;
	border: 3px solid ${colors.darkGray};
	font-size: 1rem;
	background-color: ${colors.white};
	color: ${colors.darkGray};
`;

export const DropDownListContainer = styled.div<{isOpen: boolean}>`
	position: absolute;
	background-color: ${colors.white};
	border: ${props =>
		props.isOpen
			? `1.5px solid ${colors.lightGray}`
			: `0px solid ${colors.lightGray}`};
	transition: ${transitions.easeInOutMedium};
	overflow-y: scroll;
	width: 100%;
	max-height: ${props => (props.isOpen ? '20rem' : '0')};
	border-radius: 0 0 3px 3px;
`;

export const DropDownListWrapper = styled.div`
	position: relative;
	z-index: 3;
`;

export const DropDownContainer = styled.div``;

export const DropDownList = styled.ul`
	list-style: none;

	padding: 0.25rem 0.5rem;
	margin: 0;
`;

export const DropDownListItem = styled.li`
	cursor: pointer;
	padding: 0.25rem 0;
	user-select: none;
`;

export const ArrowWrapper = styled.div<{isOpen: boolean}>`
	color: ${colors.darkGray};
	transition: ${transitions.easeInOutMedium};
	transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
`;
