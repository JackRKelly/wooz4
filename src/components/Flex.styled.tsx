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
}>`
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : 'space-between'};
	flex-wrap: wrap;
	flex-direction: row;
`;

export const FlexRowWrapperPadded = styled(FlexRowWrapper)`
	padding: 1rem 0;
`;
