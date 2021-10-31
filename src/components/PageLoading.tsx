import React from 'react';
import {UseInfiniteQueryResult} from 'react-query';

export type PageLoaderProps = Pick<
	UseInfiniteQueryResult,
	'fetchNextPage' | 'hasNextPage' | 'isFetchingNextPage' | 'error'
>;

export const PageLoader: React.FC<PageLoaderProps> = props => (
	<div>
		{(() => {
			if (props.isFetchingNextPage) {
				return <button type="button">Loading...</button>;
			}

			if (props.error) {
				return (
					<button type="button" onClick={async () => props.fetchNextPage()}>
						Try Again to Load More
					</button>
				);
			}

			if (props.hasNextPage) {
				return (
					<button type="button" onClick={async () => props.fetchNextPage()}>
						Load More
					</button>
				);
			}

			return (
				<button disabled type="button">
					Nothing more to load
				</button>
			);
		})()}
	</div>
);
