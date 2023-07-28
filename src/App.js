// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { User } from './Components/User';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  let name = "Yash";
  let age = 19;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/user' element= {<User name={name} age={age} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
