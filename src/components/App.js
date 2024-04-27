import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home  name={user.name} city={user.city}/>
      <About bio={user.bio} githubLink={user.githubLink} linkedinLink={user.linkedinLink} />
    </div>
  );
}
function About(){
  return(
    <div>
      < bio MyBio="I made this!"/>
      <github GithubLink="https://github.com/liza"/>
      <linkedin linkedinLink="https://www.linkedin.com/in/liza/"/>
    </div>
  )
}

export default App;
