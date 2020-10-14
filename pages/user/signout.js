import { useEffect } from "react"
import { useRouter } from "next/router"
import { useMutation, useApolloClient } from "@apollo/client"
import { SIGN_OUT } from "../../apollo/mutations"
import Header from "../../components/Header"

const SignOut = () => {
  const client = useApolloClient()
  const router = useRouter()
  const [signOut] = useMutation(SIGN_OUT)

  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        router.push("/user/login")
      })
    })
  }, [signOut, router, client])

  return (
    <div>
      <Header />
      <p>Выхожу...</p>
    </div>
  )
}

export default SignOut
