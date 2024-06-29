import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // https://brand-builders-solution.vercel.app/  http://localhost:5000/
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
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/service/service/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  // useGetServicesQuery
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation
} = brandApi
