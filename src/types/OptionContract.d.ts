export type OptionContract = {
    contractSymbol: string,
    strike: number,
    currency: string,
    lastPrice?: number,
    change?: number,
    percentChange?: number,
    volume?: number,
    openInterest?: number,
    bid: number,
    ask: number,
    contractSize?: string,
    expiration: number,
    lastTradeDate?: number,
    impliedVolatility?: number,
    inTheMoney: boolean
};