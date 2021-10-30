import React, {FC} from 'react';
import {ArrowLeft, ArrowRight} from '../assets/svg';
import {FlexRowWrapper} from './Flex.styled';
import {PaginationButton, PaginationText} from './Pagination.styled';

interface Props {
	prev: () => void;
	hasPreviousPage: boolean;
	next: () => void;
	hasNextPage: boolean;
}

export const Pagination: FC<Props> = ({
	hasNextPage,
	hasPreviousPage,
	next,
	prev,
}) => (
	<FlexRowWrapper>
		<PaginationButton
			direction="left"
			type="button"
			disabled={!hasPreviousPage}
			onClick={() => {
				void new Audio('/pop.mp3').play().catch(() => null);
				prev();
			}}
		>
			<FlexRowWrapper>
				<ArrowLeft />
				<PaginationText>Prev</PaginationText>
			</FlexRowWrapper>
		</PaginationButton>
		<PaginationButton
			direction="right"
			type="button"
			disabled={!hasNextPage}
			onClick={() => {
				void new Audio('/pop.mp3').play().catch(() => null);
				next();
			}}
		>
			<FlexRowWrapper>
				<PaginationText>Next</PaginationText>
				<ArrowRight />
			</FlexRowWrapper>
		</PaginationButton>
	</FlexRowWrapper>
);
