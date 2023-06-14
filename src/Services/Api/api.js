import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './Constants';
const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,

     // Comment:- Please share X_API_KEY and Auth token here.

  //  prepareHeaders: async (headers, { getState }) => {
  //   const token = getState().common.token
  //   headers.append('x-api-key', X_API_KEY)
  //   if (token) {
  //     headers.append('authorization', `${token}`)
  //   }
  //   return headers
  // },
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // here you can deal with 401 error
    }
    return result;
};
export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
});