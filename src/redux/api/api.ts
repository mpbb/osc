import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Quote } from '../../types/Quote';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: build => ({
    getData: build.query<Quote, string, number>({
      query: (symbol, date) => ({

      })
    }),
    computeStrategy: build.query({
        query: () => '/strategy'
    }),
    sendToAnalytics: build.mutation({
        query: () =>
    })
  })
})

export const { useGetQuoteQuery, useComputeStrategyQuery } = api