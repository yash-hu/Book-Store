// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { User } from "./Components/User";
import { Profile } from "./Components/Profile";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Register } from "./Components/Register/Register";

function App() {
  const name = "Yash";
  const age = 19;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d32f2f",
      },
      secondary: {
        main: "#d3f400",
      },
      
    },

  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User name={name} age={age} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
