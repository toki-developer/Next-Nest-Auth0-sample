import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  sample?: Maybe<SampleModel>;
};


export type QuerySampleArgs = {
  sub: Scalars['String'];
};

export type SampleModel = {
  __typename?: 'SampleModel';
  sub: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  freeInput: Scalars['String'];
};

export type SampleQueryVariables = Exact<{
  sub: Scalars['String'];
}>;


export type SampleQuery = (
  { __typename?: 'Query' }
  & { sample?: Maybe<(
    { __typename?: 'SampleModel' }
    & Pick<SampleModel, 'id' | 'name' | 'freeInput'>
  )> }
);


export const SampleDocument = gql`
    query sample($sub: String!) {
  sample(sub: $sub) {
    id
    name
    freeInput
  }
}
    `;

/**
 * __useSampleQuery__
 *
 * To run a query within a React component, call `useSampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleQuery({
 *   variables: {
 *      sub: // value for 'sub'
 *   },
 * });
 */
export function useSampleQuery(baseOptions: Apollo.QueryHookOptions<SampleQuery, SampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SampleQuery, SampleQueryVariables>(SampleDocument, options);
      }
export function useSampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SampleQuery, SampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SampleQuery, SampleQueryVariables>(SampleDocument, options);
        }
export type SampleQueryHookResult = ReturnType<typeof useSampleQuery>;
export type SampleLazyQueryHookResult = ReturnType<typeof useSampleLazyQuery>;
export type SampleQueryResult = Apollo.QueryResult<SampleQuery, SampleQueryVariables>;