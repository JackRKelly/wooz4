import React from 'react';
import {UseInfiniteQueryResult} from 'react-query';
import {FlexRowWrapper} from './Flex.styled';
import {NormalizedButton} from './Normalized.styled';
import {BoldUppercaseText} from './Text.styled';

export type PageLoaderProps = Pick<
	UseInfiniteQueryResult,
	'fetchNextPage' | 'hasNextPage' | 'isFetchingNextPage' | 'error'
>;

export const PageLoader: React.FC<PageLoaderProps> = props => (
	<div>
		{(() => {
			if (props.isFetchingNextPage) {
				return (
					<NormalizedButton type="button">
						<BoldUppercaseText>Loading...</BoldUppercaseText>
					</NormalizedButton>
				);
			}

			if (props.error) {
				return (
					<NormalizedButton
						type="button"
						onClick={async () => props.fetchNextPage()}
					>
						<BoldUppercaseText>Try Again to Load More</BoldUppercaseText>
					</NormalizedButton>
				);
			}

			if (props.hasNextPage) {
				return (
					<NormalizedButton
						type="button"
						onClick={async () => props.fetchNextPage()}
					>
						<BoldUppercaseText>Load More</BoldUppercaseText>
					</NormalizedButton>
				);
			}

			return (
				<FlexRowWrapper justifyContent="flex-end" padding="1rem 0">
					<NormalizedButton disabled type="button">
						<BoldUppercaseText>Nothing more to load</BoldUppercaseText>
					</NormalizedButton>
				</FlexRowWrapper>
			);
		})()}
	</div>
);
