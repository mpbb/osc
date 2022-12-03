import Modal from 'react-bootstrap/Modal';
import type { StrategyLeg } from '../types/StrategyLeg';
import OptionChain from './OptionChain';

interface OptionSelectionModalProps {
    symbol: string
    show: boolean,
    onHide: () => void,
    onSelection: (strategyLeg: StrategyLeg) => void
}

function OptionSelectionModal(props: OptionSelectionModalProps) {

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.symbol} Options Chain</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OptionChain
                    onHide={props.onHide}
                    onSelection={props.onSelection}
                    show={props.show}
                    symbol={props.symbol}
                />
            </Modal.Body>
        </Modal>
    );
}

export default OptionSelectionModal;