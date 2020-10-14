import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useQuery } from "@apollo/client"
import { VIEWER } from "../apollo/queries"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
  },
  logo: {
    color: "#fff",
    textTransform: "uppercase",
  },
  menuButton: {
    color: "#fff",
  },
}))

const Header = () => {
  const classes = useStyles()
  const { data } = useQuery(VIEWER)
  const viewer = data?.viewer

  return (
    <AppBar color="primary" elevation={2}>
      <Toolbar>
        <Link href="/">
          <Button className={classes.logo}>MonkeyQuiz</Button>
        </Link>

        <Box ml="auto">
          {!viewer && (
            <Link href="/user/login">
              <Button className={classes.menuButton}>Войти</Button>
            </Link>
          )}
          {viewer && (
            <Link href="/user/signout">
              <Button className={classes.menuButton}>Выйти</Button>
            </Link>
          )}
        </Box>

        <IconButton className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
