import React, {FC} from 'react';

export interface Option {
	value: string;
	id: string;
}

interface Props {
	options: Option[];
}

export const Select: FC<Props> = ({options}) => (
	<select>
		{options.map(({value, id}) => (
			<option key={id} value={value}>
				{value}
			</option>
		))}
	</select>
);
