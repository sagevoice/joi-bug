import logo from './logo.svg';
import './App.css';
import Joi from 'joi';

function App() {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    birthyear: Joi.number().integer().min(1970).max(2013),
  });
  const dataToValidate = {
    name: 'chris',
    birthyear: 1971
  }
  const result = Joi.validate(dataToValidate, schema);

  console.log(`result ${JSON.stringify(result)}`)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
