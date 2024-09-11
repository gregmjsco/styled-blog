import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import { Container } from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/Global"
import content from "./content"

const theme = {
  colors: {
    header: '#E6E2E1',
    body: '#E6E2E1',
    violet: '#5B5F97',
    dark: '#333',
    red: '#FF5A5F',

  },
  mobile: '768px',
}

function App() {
  

  return (
    <ThemeProvider theme = {theme}>

    <>
    <GlobalStyles />
      <Header />
      <Container>

        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}

      </Container>
      <Footer />
    </>

    </ThemeProvider>
  )
}

export default App
