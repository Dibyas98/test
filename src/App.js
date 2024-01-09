import logo from './logo.svg';
import './App.css';
import Generator from './component/Generator';
import PasswordOptionsForm from './component/CheckBox';
import { useState } from 'react';
import Pass from './component/Pass';

function App() {
  const [length, setlength] = useState(8)
  const [pass,setpass] =useState('')
  const ReciveLength = (arg) =>{
    setlength(arg)
    // console.log(length);
  }
  const activeCheck = (arg) =>{
    
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/[]{}';

    let validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let password = '';
    if (arg.includeNumbers) validChars += numberChars;
    if (arg.includeSymbols) validChars += symbolChars;


     // You can customize the length of the password

    for (let i = 0; i <length; i++) {
      // console.log(password.length);
      
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setpass(password)
  }
  console.log(pass.length);
  return (
    <>
    <Generator len={ReciveLength}></Generator>
    {pass.length > 0 ? <Pass pass={pass}></Pass> : null}
    <PasswordOptionsForm active = {activeCheck}></PasswordOptionsForm>
    </>
  );
}

export default App;
