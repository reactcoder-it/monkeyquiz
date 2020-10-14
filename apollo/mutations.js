import { gql } from "@apollo/client"

export const SIGN_IN = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        _id
        name
        email
      }
    }
  }
`

export const SIGN_OUT = gql`
  mutation SignOutMutation {
    signOut
  }
`
