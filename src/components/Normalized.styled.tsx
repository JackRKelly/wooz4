import styled from 'styled-components';

export const NormalizedLink = styled.a`
	background-color: transparent;
	text-decoration: none;
	border-radius: 0;
	cursor: pointer;
`;

export const NormalizedIconLink = styled(NormalizedLink)`
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NormalizedButton = styled.button<{cursor?: 'pointer' | 'none'}>`
	background-color: transparent;
	border-radius: 0;
	cursor: ${props => props.cursor ?? 'auto'};
	border: none;
	color: black;
	padding: 0;
`;

export const NormalizedIconButton = styled(NormalizedButton)`
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
