import "./App.css";
import ListHeader from './Components/ListHeader/ListHeader'
import ListFooter from './Components/ListFooter/ListFooter';
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
     <ListHeader/>
      <Home />
   <ListFooter />
    </>
  );
}

export default App;
