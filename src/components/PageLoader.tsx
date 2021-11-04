import React from 'react';
import {UseInfiniteQueryResult} from 'react-query';
import {ArrowRight} from '../assets/svg';
import {colors} from '../const';
import {StyledButton} from './Button';
import {FlexRowWrapper} from './Flex.styled';
import {NormalizedButton} from './Normalized.styled';
import {BoldUppercaseText} from './Text.styled';

export type PageLoaderProps = Pick<
	UseInfiniteQueryResult,
	'fetchNextPage' | 'hasNextPage' | 'isFetchingNextPage' | 'error'
>;

export const PageLoader: React.FC<PageLoaderProps> = props => (
	<FlexRowWrapper justifyContent="flex-end" padding="2rem 0">
		{(() => {
			if (props.error) {
				return (
					<StyledButton
						Icon={<ArrowRight />}
						iconHover="translate(5px)"
						onClick={async () => props.fetchNextPage()}
					>
						Try Again to Load More
					</StyledButton>
				);
			}

			if (props.hasNextPage || props.isFetchingNextPage) {
				return (
					<StyledButton
						Icon={<ArrowRight />}
						iconHover="translate(5px)"
						loading={props.isFetchingNextPage}
						onClick={async () => props.fetchNextPage()}
					>
						Load More
					</StyledButton>
				);
			}

			return (
				<NormalizedButton disabled type="button">
					<BoldUppercaseText color={colors.lightGray}>
						Nothing more to load
					</BoldUppercaseText>
				</NormalizedButton>
			);
		})()}
	</FlexRowWrapper>
);
