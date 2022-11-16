import type { ApiDate } from "./ApiDate";
import type { OptionContract } from "./OptionContract";

export type OptionChain = {
    expirationDate: ApiDate,
    hasMiniOptions?: boolean,
    calls: [OptionContract],
    puts: [OptionContract]
};