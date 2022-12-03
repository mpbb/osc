import type { OptionContract } from "./OptionContract";

export type OptionChain = {
    expirationDate: number,
    hasMiniOptions?: boolean,
    calls: [OptionContract],
    puts: [OptionContract]
};