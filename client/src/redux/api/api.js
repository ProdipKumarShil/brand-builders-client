import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://brand-builders-solution.vercel.app' }), // https://brand-builders-solution.vercel.app/
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => 'service/services',
    }),
    addService: builder.mutation({
      query: (newService) => ({
        url: '/service/service',
        method: "POST",
        body: newService
      })
    })
  })
})

export const {
  // useGetServicesQuery
  useGetServicesQuery,
  useAddServiceMutation
} = brandApi
