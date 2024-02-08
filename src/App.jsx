import { useState } from "react";
import { Header } from "./components/Header";
import { Toolbar } from "./components/Toolbar";
import { FormReg } from './components/FormRegistration';
import { FormAuth } from "./components/FormAuth";

export function App() {
  const [isFormAuthOpened, setFormAuthOpened] = useState(false);
  const [isFormRegOpened, setFormRegOpened] = useState(false);

  const openFormRegHandler = (state) => {
    setFormRegOpened(state);
  };

  const openFormAuthHandler = (state) => {
    setFormAuthOpened(state);
  };

  return (
    <>
      <Header onOpenFormAuth={openFormAuthHandler} />
      <Toolbar />
      {isFormAuthOpened && <FormAuth onOpenFormAuth={openFormAuthHandler}
          onOpenFormReg={openFormRegHandler}/>}
      {isFormRegOpened && (
        <FormReg
          onOpenFormAuth={openFormAuthHandler}
          onOpenFormReg={openFormRegHandler}
        />
      )}
      
    </>
  );
}
