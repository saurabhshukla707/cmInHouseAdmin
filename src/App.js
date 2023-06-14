import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootRouter from "./Routes/RootRouter";
import { BrowserRouter } from "react-router-dom";
import {store,persistor} from './Store'

function App() {
  const baseName = process.env.REACT_APP_BASE_NAME;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter basename={baseName}>
        <RootRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
