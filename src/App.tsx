import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown'
import OptionChain from './components/OptionChain'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { BsTrash } from "react-icons/bs";
import { StrategyLeg } from './types/StrategyLeg';
import OptionSelectionModal from './components/OptionSelectionModal';

function App() {

  const [symbol, setSymbol] = useState("AAPL");
  const [riskFree, setRiskFree] = useState(0);
  const [legs, setLegs] = useState([]);

  const [showOptionsChain, setShowOptionsChain] = useState(false);

  const onHideOptionsChain = () => setShowOptionsChain(false);
  const onShowOptionsChain = () => setShowOptionsChain(true);


  return (
    <>
      <OptionSelectionModal symbol='AAPL' show={true} onHide={() => {}} onSelection={(strategyLeg: StrategyLeg) => {}}/>
      <Container>
        <br />
        <h1>Option Strategy Calculator</h1>
        <h6>By Matthew Buckingham-Bishop</h6>
        <hr />
        <Stack gap={2}>
          <h4>Configuration</h4>
          <InputGroup>
            <FloatingLabel label="Risk-Free Rate (% Annualized)">
              <Form.Control type="text" value={riskFree} onChange={onChangeRate} />
            </FloatingLabel>
          </InputGroup>
          <InputGroup>
            <FloatingLabel label="Symbol">
              <Form.Control type="text" spellCheck={false} value={symbol} onChange={onChangeSymbol} />
            </FloatingLabel>
          </InputGroup>
          <br />
          <h4>Strategy Legs</h4>
          {
            legs.map((leg, i) => <>
              <InputGroup size="sm">
                <Form.Control type="number" value={leg.quantity} />
                <InputGroup.Text>{leg.name}</InputGroup.Text>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" value={leg.premium} />
                <Button variant="outline-danger"><BsTrash /></Button>
              </InputGroup>
            </>)
          }
          <ButtonGroup>
            <Button variant="success" onClick={onShowOptionsChain}>Buy Option</Button>
            <Button variant="danger" onClick={onShowOptionsChain}>Write Option</Button>
          </ButtonGroup>
          <Button variant="primary">Calculate Strategy</Button>
        </Stack>
      </Container>
    </>
  );
}

export default App;