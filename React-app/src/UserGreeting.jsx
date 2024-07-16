// conditional rendering = 
// allows you to control what gets rendered in ur app based on the state of ur app

function UserGreeting(props) {
 
 if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

export default UserGreeting;