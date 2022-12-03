import type { OptionChain } from "./OptionChain"

export type Quote = {
    underlyingSymbol: string,
    expirationDates: [number],
    strikes: [number],
    hasMiniOptions?: boolean,
    quote: any,
    options: [OptionChain]
}