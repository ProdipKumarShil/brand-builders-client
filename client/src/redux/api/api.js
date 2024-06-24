import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => '/service/services'
    })
  })
})

export const {useGetServicesQuery} = brandApi
