import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Calculation } from '../../types/Calculation';
import type { CalculationInputs } from '../../types/CalculationInputs';
import type { Quote } from '../../types/Quote';
import type { QuoteRequest } from '../../types/QuoteRequest';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: build => ({
    getQuote: build.query<Quote, QuoteRequest>({
      query: (quoteRequest) => {
        if (quoteRequest.date) return `/quote?symbol=${quoteRequest.symbol}&date=${quoteRequest.date}`;
        else return `/quote?symbol=${quoteRequest.symbol}`
      }
    }),
    calculateStrategy: build.query<Calculation, CalculationInputs>({
        query: (calculationInputs) => ({
          url: '/calculate',
          body: calculationInputs,
          method: 'POST'
        })
    })
  })
})

export const { useGetQuoteQuery, useCalculateStrategyQuery } = api