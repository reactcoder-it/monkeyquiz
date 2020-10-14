import { useState } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Header from "../../components/Header"
import { useMutation, useApolloClient } from "@apollo/client"
import { SIGN_IN } from "../../apollo/mutations"
import { getErrorMessage } from "../../lib/form"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
  },
  formControl: {
    marginTop: theme.spacing(1),
  },
}))

const LoginPage = () => {
  const classes = useStyles()
  const client = useApolloClient()
  const router = useRouter()
  const [signIn] = useMutation(SIGN_IN)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msgError, setMsgError] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      await client.resetStore()
      const { data } = await signIn({
        variables: {
          email: email.trim(),
          password: password.trim(),
        },
      })
      if (data.signIn.user) {
        await router.push("/")
      }
    } catch (error) {
      setMsgError(getErrorMessage(error))
    }
  }

  return (
    <div className={classes.root}>
      <Header />
      <Container fixed maxWidth="sm">
        <form onSubmit={handleFormSubmit}>
          <Paper>
            <Box p={2}>
              <Typography component="h1" variant="h3">
                Вход
              </Typography>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="email">Емэйл</InputLabel>
                <Input
                  id="email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="password">Пароль</InputLabel>
                <Input
                  id="password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {msgError && <Typography>{msgError}</Typography>}
              <Box pt={4}>
                <Button type="submit" color="primary" variant="outlined">
                  Войти
                </Button>
              </Box>
            </Box>
          </Paper>
        </form>
      </Container>
    </div>
  )
}

export default LoginPage
