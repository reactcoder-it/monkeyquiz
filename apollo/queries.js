import { gql } from "@apollo/client"

export const VIEWER = gql`
  query ViewerQuery {
    viewer {
      _id
      name
      email
    }
  }
`
