import { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { StrategyLeg } from '../types/StrategyLeg';
import { useGetQuoteQuery } from '../redux/api/api';
import ExpiryDatePicker from './ExpiryDatePicker';

interface OptionChainProps {
	symbol: string
	show: boolean,
	onHide: () => void,
	onSelection: (strategyLeg: StrategyLeg) => void
}

function OptionChain(props: OptionChainProps) {

	const [chainDate, setChainDate] = useState(0);

	const {
		data: quote,
		isLoading,
		isFetching
	} = useGetQuoteQuery({ symbol: 'AAPL', date: chainDate ? chainDate : undefined });

	if (isLoading || isFetching) return <>

	</>;
	if (isFetching) return <></>;
	if (!quote) return <></>;

	return (
		<>
			<ExpiryDatePicker onChange={setChainDate} dates={quote.expirationDates} value={quote.options[0].expirationDate} />
			<Table bordered size="sm" className="text-center">
				<thead>
					<tr>
						<th colSpan={2}>Calls</th>
						<th>Strike</th>
						<th colSpan={2}>Puts</th>
					</tr>
					<tr>
						<th>Bid</th>
						<th>Ask</th>
						<th></th>
						<th>Bid</th>
						<th>Ask</th>
					</tr>
				</thead>
				<tbody>
					{quote.strikes.map(strike => {
						let call = quote.options[0].calls.find(call => call.strike == strike && call.bid > 0.01);
						let put = quote.options[0].puts.find(put => put.strike == strike && put.bid > 0.01);
						if (call && put) {
							return (<>
								<tr>
									<td className={call.inTheMoney ? "table-secondary" : ""}>
										<a href='javascript:void(0)'>{call.bid.toFixed(2)}</a>
									</td>
									<td className={call.inTheMoney ? "table-secondary" : ""}>
										<a href='javascript:void(0)'>{call.ask.toFixed(2)}</a></td>
									<td className="table-primary">
										<b>{strike.toFixed(2)}</b>
									</td>
									<td className={put.inTheMoney ? "table-secondary" : ""}>
										<a href='javascript:void(0)'>{put.bid.toFixed(2)}</a>
									</td>
									<td className={put.inTheMoney ? "table-secondary" : ""}>
										<a href='javascript:void(0)'>{put.ask.toFixed(2)}</a>
									</td>
								</tr>
							</>)
						}
					})}
				</tbody>
			</Table>
		</>
	);

}

export default OptionChain;