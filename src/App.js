import Routes from "./routes/routes.jsx";
import Header from  "./components/Header"

import "./styles/app.css"


const App = () => {
  return (
    <div className="App">
       <Header />
 
      <Routes />

    </div>
  );
}

export default App;
