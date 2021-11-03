import React, {FC} from 'react';
import styled from 'styled-components';
import {colors} from '../../const';

export const Dash: FC<{margin?: string}> = ({margin}) => (
	<Svg
		viewBox="0 0 1176 105"
		xmlns="http://www.w3.org/2000/svg"
		margin={margin}
	>
		<path d="M503.125 104.68L606.081 0.00127046L538.092 0.00127641L435.135 104.68L503.125 104.68Z" />
		<path d="M413.767 0.00128727L472.044 0.00128218L483.7 0.00128116L380.744 104.68L310.811 104.68L413.767 0.00128727Z" />
		<path d="M619.679 104.68L722.636 0.00126027L843.075 0.00124974L740.119 104.68L619.679 104.68Z" />
		<path d="M895.524 104.68L998.48 0.00123616L1175.25 0.0012207L1072.3 104.68L895.524 104.68Z" />
		<path d="M194.257 104.68L297.213 0.00129746L102.956 0.00131445L0.000244141 104.68L194.257 104.68Z" />
	</Svg>
);

const Svg = styled.svg<{margin?: string}>`
	display: block;
	margin: ${props => (props.margin ? props.margin : '1rem 0')};
	width: 5rem;
	height: auto;
	fill: ${colors.gray};
`;
