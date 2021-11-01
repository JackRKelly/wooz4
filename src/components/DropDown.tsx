import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ArrowDown} from '../assets/svg/Icons/ArrowDown';
import {colors, transitions} from '../const';
import {FlexRowWrapper} from './Flex.styled';

const DropDownHeader = styled.div`
	background-color: ${colors.lightGray};
	padding: 0.5rem;
	cursor: pointer;
`;

const DropDownListContainer = styled.div<{isOpen: boolean}>`
	position: absolute;
	background-color: ${colors.gray};
	transition: ${transitions.easeInOutMedium};
	overflow-y: scroll;
	width: 100%;
	max-height: ${props => (props.isOpen ? '20rem' : '0')};
`;

const DropDownListWrapper = styled.div`
	position: relative;
`;

const DropDownContainer = styled.div``;

const DropDownList = styled.ul`
	list-style: none;

	padding: 0.25rem 0.5rem;
	margin: 0;
`;

const DropDownListItem = styled.li`
	cursor: pointer;
	padding: 0.25rem 0;
`;

interface Option {
	id: string;
	title: string;
}

interface Props {
	value: Option;
	options: Option[];
	onSelect: (id: string) => void;
}

const ArrowWrapper = styled.div<{isOpen: boolean}>`
	transition: ${transitions.easeInOutMedium};
	transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
`;

export const DropDown: FC<Props> = ({value, options, onSelect}) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		void new Audio('/pop.mp3').play().catch(() => null);
	}, [isOpen]);

	return (
		<DropDownContainer>
			<DropDownHeader
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<FlexRowWrapper>
					<span>{value.title}</span>
					<ArrowWrapper isOpen={isOpen}>
						<ArrowDown />
					</ArrowWrapper>
				</FlexRowWrapper>
			</DropDownHeader>

			<DropDownListWrapper>
				<DropDownListContainer isOpen={isOpen}>
					<DropDownList>
						{options.map(option => (
							<DropDownListItem
								key={option.id}
								onClick={() => {
									onSelect(option.id);
									setIsOpen(!isOpen);
								}}
							>
								{value.id === option.id ? '* ' : ''}
								{option.title}
							</DropDownListItem>
						))}
					</DropDownList>
				</DropDownListContainer>
			</DropDownListWrapper>
		</DropDownContainer>
	);
};
