import { OptionContract } from "./OptionContract"

export type StrategyLeg = {
    quantity: number,
    premium: number,
    put: boolean
    option: OptionContract
}