import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

interface ExpiryDatePickerProps {
	value?: number,
	dates?: [number],
	onChange: (date: number) => void
}

function ExpiryDatePicker(props: ExpiryDatePickerProps) {

	const title = props.value ? (new Date(props.value * 1000).toISOString().split("T")[0]) : "";
	
	const dates = props.dates?.map(date => <Dropdown.Item
		onClick={() => props.onChange(date)}
		href="javascript:void(0)"
	>
		{(new Date(date * 1000)).toISOString().split("T")[0]}
	</Dropdown.Item>)

	return (
		<InputGroup>
			<InputGroup.Text>Expiry</InputGroup.Text>
			<DropdownButton
				variant="outline-secondary"
				title={title}
			>
				{dates}
			</DropdownButton>
		</InputGroup>
	);
}

export default ExpiryDatePicker;