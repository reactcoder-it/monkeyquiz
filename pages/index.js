import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Header from "../components/Header"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
  },
  logo: {
    color: "#fff",
    textTransform: "uppercase",
  },
  menuButton: {
    marginLeft: "auto",
    color: "#fff",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Container fixed>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            MonkeyQuiz
          </Typography>
          <Typography>
            Приложение для публикации информации об играх паб-квизах и
            возможность ведения рейтинга команд
          </Typography>
          <Box mt={3}>
            <Button color="primary" variant="outlined">
              Найти
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default IndexPage
