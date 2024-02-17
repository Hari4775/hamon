import { Provider } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";
import store from "./Utils/Redux/Store";

function App() {
  return (
    <div className="bg-black">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
