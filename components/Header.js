import { useState } from "react"
import Link from "next/link"
import { styled } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { useQuery } from "@apollo/client"
import { VIEWER } from "../apollo/queries"

const Header = () => {
  const { data } = useQuery(VIEWER)
  const viewer = data?.viewer

  const [open, setOpen] = useState(false)

  return (
    <>
      <HeaderWrapper elevation={2}>
        <Toolbar>
          <Link href="/">
            <LogoButton>MonkeyQuiz</LogoButton>
          </Link>

          <Box ml="auto">
            {!viewer && (
              <Link href="/user/login">
                <MenuLink>Войти</MenuLink>
              </Link>
            )}
            {viewer && (
              <Link href="/user/signout">
                <MenuLink>Выйти</MenuLink>
              </Link>
            )}
          </Box>

          <MenuButton onClick={() => setOpen((prevState) => !prevState)}>
            <MenuIcon />
          </MenuButton>
        </Toolbar>
      </HeaderWrapper>
      <CustomDrawer
        open={open}
        anchor="right"
        onClose={() => setOpen((prevState) => !prevState)}
      >
        <Box py={2} display="flex" justifyContent="center">
          <Link href="/">
            <LogoButton size="large">MonkeyQuiz</LogoButton>
          </Link>
        </Box>
        <List>
          <ListItem>
            <Link href="/rating">
              <MenuLink>Рейтинг команд</MenuLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about">
              <MenuLink>О нас</MenuLink>
            </Link>
          </ListItem>
        </List>
      </CustomDrawer>
    </>
  )
}

export default Header

const HeaderWrapper = styled(AppBar)({
  backgroundColor: "#f44336",
  color: "#fff",
})

const LogoButton = styled(Button)(({ size }) => ({
  fontSize: size === "large" ? "24px" : "16px",
  color: "#fff",
  textTransform: "uppercase",
}))

const MenuLink = styled(Button)({
  color: "#fff",
  minWidth: "unset",
})

const MenuButton = styled(IconButton)({
  color: "#fff",
})

const CustomDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    minWidth: "300px",
    backgroundColor: "#f44336",
  },
})
