import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Main from "./src/components/Main";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
