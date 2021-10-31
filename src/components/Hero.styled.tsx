import styled from 'styled-components';
import {colors} from '../const';

export const HeroWrapper = styled.section<{backgroundImage: string}>`
	background-image: linear-gradient(
			45deg,
			rgba(0, 0, 0, 0.727),
			rgba(0, 0, 0, 0.5)
		),
		url('${props => props.backgroundImage ?? 'none'}');
	background-size: cover;
	background-position: left;
`;

export const HeroTitle = styled.h1`
	color: ${colors.white};
	text-align: center;
	margin-top: 0;
`;

export const HeroDescription = styled.p`
	color: ${colors.white};
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;
