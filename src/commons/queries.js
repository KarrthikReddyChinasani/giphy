import { gql } from "@apollo/client";

export const TRENDING_QUERY = gql`
  query TrendingQuery($offset: Int!) {
    trending(offset: $offset) {
      gifs {
        id
        title
        images {
          original {
            height
            width
            url
          }
          downsized {
            height
            width
            url
          }
        }
        user {
          display_name
          avatar_url
          username
        }
      }
      pagination {
        total_count
        count
        offset
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  query SearchQuery($q: String!, $offset: Int!) {
    search(q: $q, offset: $offset) {
      gifs {
        id
        title
        images {
          original {
            height
            width
            url
          }
          downsized {
            height
            width
            url
          }
        }
        user {
          display_name
          avatar_url
          username
        }
      }
      pagination {
        total_count
        count
        offset
      }
    }
  }
`;