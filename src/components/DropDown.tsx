import React, {FC, useState} from 'react';
import {ArrowDown} from '../assets/svg/Icons/ArrowDown';
import {SingleProduct} from '../services/product';
import {
	DropDownContainer,
	DropDownHeader,
	ArrowWrapper,
	DropDownListWrapper,
	DropDownListContainer,
	DropDownList,
	DropDownListItem,
} from './DropDown.styled';
import {FlexRowWrapper} from './Flex.styled';

interface Props {
	value: SingleProduct['variants'][0];
	options: SingleProduct['variants'];
	onSelect: (id: string) => void;
}

export const DropDown: FC<Props> = ({value, options, onSelect}) => {
	const [isOpen, setIsOpen] = useState(false);

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
								<FlexRowWrapper>
									<div>
										{value.id === option.id ? '* ' : ''}
										{option.title}
									</div>
									<span>{option.outOfStock ? ' Unavailable' : ''}</span>
								</FlexRowWrapper>
							</DropDownListItem>
						))}
					</DropDownList>
				</DropDownListContainer>
			</DropDownListWrapper>
		</DropDownContainer>
	);
};
