import styled from 'styled-components';
import {colors} from '../const';

export const CollectionCardGrid = styled.div`
	width: 100%;
	display: grid;
	justify-items: stretch;
	row-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(1fr));
`;

export const CollectionCardStyled = styled.div<{backgroundImage: string}>`
	background-image: linear-gradient(
			45deg,
			rgba(0, 0, 0, 0.827),
			rgba(0, 0, 0, 0.6)
		),
		url('${props => props.backgroundImage ?? 'none'}');
	background-size: cover;
	background-position: left;
	padding: 2rem 1rem;
	border-radius: 3px;
`;

export const CollectionCardTitle = styled.h2`
	color: ${colors.white};
	text-align: center;
	margin: 0;
`;

export const CollectionCardDescription = styled.p`
	color: ${colors.white};
	max-width: 800px;
	margin: 1rem auto 0;
	text-align: center;
`;
