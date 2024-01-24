import "./App.css";
import SearchTextInput from "./components/SearchTextInput";
import UserTable from "./components/UserTable";
import LoadingIndicator from './components/LoadingIndicator'
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <SearchTextInput/>
        <LoadingIndicator/>
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;
