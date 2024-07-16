import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {

  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer> </Footer>
    <Card></Card>
    <Button></Button>
    <Student name="Deadpool" age=" 33" isStudent={true}> </Student>
    <Student name="Wolverine" age=" 39" isStudent={false}> </Student>
    <Student name="Professor X" age=" 35" isStudent={true}> </Student>
    <Student name="Magneto" age=" 33" isStudent={false}> </Student>
    <Student name="Jeangrey" age=" 33" isStudent={true}> </Student>
    <Student name="Lazer" age=" 35" isStudent={false}> </Student>




<UserGreeting isLoggedIn={true} username="Joy Khanna"></UserGreeting>

    
    
    </>         // This is a fragment. It is used to return multiple elements in a single return statement.
  )
}

export default App
