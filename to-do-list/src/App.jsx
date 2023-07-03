import "./App.css";
import ListFooter from "./ListFooter/ListFooter";
import ListHeader from "./ListHeader/ListHeader";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <ListHeader />
      <Home />
      <ListFooter />
    </>
  );
}

export default App;
