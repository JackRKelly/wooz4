import React, {FC} from 'react';
import styled from 'styled-components';
import {colors} from '../../const';

export const Dots: FC<{margin?: string}> = ({margin}) => (
	<Svg
		viewBox="0 0 1132 105"
		xmlns="http://www.w3.org/2000/svg"
		margin={margin}
	>
		<path d="M104.988 0L69.9913 -4.17335e-07L69.9913 32.6639L104.988 32.6639L104.988 0Z" />
		<path d="M104.988 72.3242L69.9913 72.3242L69.9913 104.988L104.988 104.988L104.988 72.3242Z" />
		<path d="M310.309 0.0078125L277.645 0.00781211L277.645 32.6717L310.309 32.6717L310.309 0.0078125Z" />
		<path d="M310.309 72.332L277.645 72.332L277.645 104.996L310.309 104.996L310.309 72.332Z" />
		<path d="M237.984 72.332L202.987 72.332L202.987 104.996L237.984 104.996L237.984 72.332Z" />
		<path d="M515.617 0L482.953 -3.89513e-07L482.953 32.6639L515.617 32.6639L515.617 0Z" />
		<path d="M443.293 0L408.296 -4.17335e-07L408.296 32.6639L443.293 32.6639L443.293 0Z" />
		<path d="M443.293 72.3359L408.296 72.3359L408.296 105L443.293 105L443.293 72.3359Z" />
		<path d="M720.941 0L688.278 -3.89513e-07L688.278 32.6639L720.941 32.6639L720.941 0Z" />
		<path d="M648.625 0L613.628 -4.17335e-07L613.628 32.6639L648.625 32.6639L648.625 0Z" />
		<path d="M926.262 72.3242L893.598 72.3242L893.598 104.988L926.262 104.988L926.262 72.3242Z" />
		<path d="M853.926 72.3242L818.929 72.3242L818.929 104.988L853.926 104.988L853.926 72.3242Z" />
		<path d="M926.262 0L893.598 -3.89513e-07L893.598 32.6639L926.262 32.6639L926.262 0Z" />
		<path d="M853.926 0L818.929 -4.17335e-07L818.929 32.6639L853.926 32.6639L853.926 0Z" />
		<path d="M1131.58 0L1098.91 -3.89513e-07L1098.91 32.6639L1131.58 32.6639L1131.58 0Z" />
		<path d="M1059.25 0L1024.26 -4.17335e-07L1024.26 32.6639L1059.25 32.6639L1059.25 0Z" />
		<path d="M32.6641 72.3242L0.00017208 72.3242L0.000171691 104.988L32.6641 104.988L32.6641 72.3242Z" />
		<path d="M32.6641 0L0.00017208 -3.89513e-07L0.000171691 32.6639L32.6641 32.6639L32.6641 0Z" />
	</Svg>
);

const Svg = styled.svg<{margin?: string}>`
	display: block;
	margin: ${props => (props.margin ? props.margin : '1rem 0')};
	width: 6rem;
	height: auto;
	fill: ${colors.gray};
`;
