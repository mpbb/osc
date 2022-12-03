import { StrategyLeg } from "./StrategyLeg"

export type CalculationInputs = {
    riskfree: number,
    spot: number,
    now: number,
    dates: [number],
    spots: [number],
    legs: [StrategyLeg]
}