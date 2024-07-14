import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'

function App() {

  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer> </Footer>
    <Card></Card>
    <Button></Button>
    </>         // This is a fragment. It is used to return multiple elements in a single return statement.
  )
}

export default App
