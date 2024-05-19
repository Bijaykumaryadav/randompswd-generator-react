import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          {/* note: readonly allow us to only provide the reading purpose and no other things than that */}
          <input type="text" readOnly />
          <button>Copy</button>
        </div>
        {/*           <input type="submit" value="Submit" name="" id="" /> note: In this line value = submit display in the browser what ever written in that and also <input type="text" value="John Doe" /> note in this usecase the john doe should be filled in the input form and shown in the browser  */}
        <div className="passLength">
          <label htmlFor="">Password length</label>
          <input type="number" max={20} />
        </div>

        <div className="passLength">
          <label htmlFor="">Include uppercase letters</label>
          <input type="checkbox" />
        </div>
        <div className="passLength">
          <label htmlFor="">Include lowercase letters</label>
          <input type="checkbox" />
        </div>
        <div className="passLength">
          <label htmlFor="">Include numbers</label>
          <input type="checkbox" />
        </div>
        <div className="passLength">
          <label htmlFor="">Include symbols</label>
          <input type="checkbox" />
        </div>
        <button className="btn">Generate password</button>
      </div>
    </>
  );
}

export default App;
