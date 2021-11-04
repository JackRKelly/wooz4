import styled from 'styled-components';
import {colors, transitions} from '../const';

export const DropDownHeader = styled.div`
	background-color: ${colors.lightGray};
	padding: 0.5rem;
	cursor: pointer;
	user-select: none;
`;

export const DropDownListContainer = styled.div<{isOpen: boolean}>`
	position: absolute;
	background-color: ${colors.gray};
	transition: ${transitions.easeInOutMedium};
	overflow-y: scroll;
	width: 100%;
	max-height: ${props => (props.isOpen ? '20rem' : '0')};
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
	transition: ${transitions.easeInOutMedium};
	transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
`;
