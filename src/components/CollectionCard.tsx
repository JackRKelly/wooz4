import Link from 'next/link';
import React, {FC} from 'react';
import {CollectionWithCursor} from '../services/collection';
import {
	CollectionCardStyled,
	CollectionCardTitle,
	CollectionCardDescription,
} from './CollectionCard.styled';
import {NormalizedLink} from './Normalized.styled';

interface Props {
	collection: CollectionWithCursor;
}

export const CollectionCard: FC<Props> = ({collection}) => (
	<Link passHref href={`/collections/${collection.handle}`}>
		<NormalizedLink>
			<CollectionCardStyled backgroundImage={collection.image.src}>
				<CollectionCardTitle>{collection.title}</CollectionCardTitle>
				{collection.description ? (
					<CollectionCardDescription>
						{collection.description}
					</CollectionCardDescription>
				) : null}
			</CollectionCardStyled>
		</NormalizedLink>
	</Link>
);
