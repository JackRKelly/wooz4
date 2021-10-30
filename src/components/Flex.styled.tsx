import styled from 'styled-components';

export const FlexColumnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	flex-direction: column;
`;

export const FlexRowWrapper = styled.div<{
	justifyContent?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
	padding?: string;
}>`
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : 'space-between'};
	padding: ${props => (props.padding ? props.padding : 'none')};
	flex-wrap: wrap;
	flex-direction: row;
`;
