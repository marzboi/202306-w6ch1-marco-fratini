import { Actions } from "./core/components/actions";
import { Info } from "./core/components/info";
import { Keyboard } from "./core/components/keyboard";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
export function App() {
  return (
    <>
      <Provider store={store}>
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </Provider>
    </>
  );
}
