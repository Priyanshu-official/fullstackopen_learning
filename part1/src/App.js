// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Hello from './Components/Hello';


const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b);
  const name = "Demon King"
  const power = "Immortal"
  return (
    <div>
      <p>Hello Demon King, it is {now.toString()}</p>
      <p> {a} and {b} plus is {a+b}</p>
      <Hello name ="King" power ="Good"/>
      <Hello name = {name} power={power}/>
      <Footer/>
    </div>
  )
}
export default App;
