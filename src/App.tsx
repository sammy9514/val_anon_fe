import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

let persistor = persistStore(store);

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={MainRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
};
