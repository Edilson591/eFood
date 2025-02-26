import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Products from "../component/models/Products";

const restaurantesApi = createApi({
  reducerPath: "restaurantesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Products[], void>({
        query: () => "restaurantes"
    })
  })
});

export const {useGetRestaurantesQuery} = restaurantesApi

export default restaurantesApi
