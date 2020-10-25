import Link from "next/link"
import { styled } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Box from "@material-ui/core/Box"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import VkIcon from "../public/static/img/vk.svg"

const links = [
  {
    id: "rating",
    href: "/rating",
    title: "Рейтинг команд",
  },
  {
    id: "about",
    href: "/about",
    title: "О нас",
  },
]

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <FooterLogo>MonkeyQuiz</FooterLogo>
            <FooterInformation>
              Приложение для публикации информации об играх паб-квизах и
              возможность ведения рейтинга команд
            </FooterInformation>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinksContainer>
              {links.map((l) => (
                <Box mx={2}>
                  <Link key={l.id} href={l.href}>
                    <FooterLink>{l.title}</FooterLink>
                  </Link>
                </Box>
              ))}
            </LinksContainer>
          </Grid>
          <Grid item xs={12} sm={3} align="right">
            <SocialTitle>Соц. сети</SocialTitle>
            <Box display="flex" justifyContent="flex-end">
              <Box mr={2}>
                <SocialIcon>
                  <FacebookIcon />
                </SocialIcon>
              </Box>
              <Box mr={2}>
                <SocialIcon>
                  <InstagramIcon />
                </SocialIcon>
              </Box>
              <SocialIcon>
                <img src={VkIcon} alt="vk" />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled("footer")({
  backgroundColor: "#f44336",
  padding: "40px 0",
})

const FooterLogo = styled(Button)({
  color: "#fff",
  fontSize: "24px",
  minWidth: "unset",
  padding: 0,
})

const FooterInformation = styled(Typography)({
  color: "#fff",
  fontSize: 14,
})

const SocialTitle = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: 500,
  color: "#fff",
  marginBottom: "10px",
})

const SocialIcon = styled(IconButton)({
  width: "30px",
  height: "30px",
  border: "2px solid #fff",
  color: "#fff",
  "& svg": {
    width: "20px",
    height: "20px",
  },
  "& img": {
    width: "20px",
    height: "20px",
  },
  "&:hover": {
    transition: "background-color .7s ease",
    backgroundColor: "rgba(255,255,255,.1)",
  },
})

const FooterLink = styled(Button)({
  color: "#fff",
  minWidth: "unset",
})

const LinksContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
})
