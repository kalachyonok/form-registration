import { useState } from "react";
import { Header } from "./components/Header";
import { Toolbar } from "./components/Toolbar";
import { FormReg } from "./components/FormRegistration";
import { FormAuth } from "./components/FormAuth";

export function App() {
  const [isFormAuthOpened, setFormAuthOpened] = useState(false);
  const [isFormRegOpened, setFormRegOpened] = useState(false);

  const switchFormRegHandler = (state) => {
    setFormRegOpened(state);
  };

  const switchFormAuthHandler = (state) => {
    setFormAuthOpened(state);
  };

  return (
    <>
      <Header onOpenFormAuth={switchFormAuthHandler} />
      <Toolbar />
      {isFormAuthOpened && (
        <FormAuth
          onOpenFormAuth={switchFormAuthHandler}
          onOpenFormReg={switchFormRegHandler}
        />
      )}
      {isFormRegOpened && (
        <FormReg
          onOpenFormAuth={switchFormAuthHandler}
          onOpenFormReg={switchFormRegHandler}
        />
      )}
    </>
  );
}
