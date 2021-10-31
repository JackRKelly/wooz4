import React from 'react';
import {UseInfiniteQueryResult} from 'react-query';
import {colors} from '../const';
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
			if (props.isFetchingNextPage) {
				return (
					<NormalizedButton type="button">
						<BoldUppercaseText color={colors.gray}>
							Loading...
						</BoldUppercaseText>
					</NormalizedButton>
				);
			}

			if (props.error) {
				return (
					<NormalizedButton
						type="button"
						cursor="pointer"
						onClick={async () => props.fetchNextPage()}
					>
						<BoldUppercaseText color={colors.darkGray}>
							Try Again to Load More
						</BoldUppercaseText>
					</NormalizedButton>
				);
			}

			if (props.hasNextPage) {
				return (
					<NormalizedButton
						type="button"
						cursor="pointer"
						onClick={async () => props.fetchNextPage()}
					>
						<BoldUppercaseText color={colors.darkGray}>
							Load More
						</BoldUppercaseText>
					</NormalizedButton>
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
