import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./Data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [Fpass, setFpass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) {
        charSet += UC;
      }
      if (lowercase) {
        charSet += LC;
      }
      if (number) {
        charSet += NC;
      }
      if (symbols) {
        charSet += SC;
      }
      // console.log(charSet);
    } else {
      alert("Please select atleast one checkbox");
    }
    // note here charAt will give access to the string from 0 and also Math.random will give the random value from 0 to 1
    for (let i = 0; i < passwordLength; i++) {
      finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setFpass(finalPass);
  };
// note: In javascript it provides inbuilt to copy
  let copyPass = () => {
    navigator.clipboard.writeText(Fpass);
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          {/* note: readonly allow us to only provide the reading purpose and no other things than that */}
          <input type="text" value={Fpass} readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>
        {/*           <input type="submit" value="Submit" name="" id="" /> note: In this line value = submit display in the browser what ever written in that and also <input type="text" value="John Doe" /> note in this usecase the john doe should be filled in the input form and shown in the browser  */}
        <div className="passLength">
          <label htmlFor="">Password length</label>
          <input
            type="number"
            value={passwordLength}
            max={20}
            min={10}
            onChange={(event) => setPasswordLength(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Include lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Include numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Include symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createPassword}>
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;
