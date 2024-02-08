import { useState } from "react";
import { Header } from "./components/Header";
import { Toolbar } from "./components/Toolbar";
import { FormRegistration } from "./components/FormRegistration";
import { FormAuth } from "./components/FormAuth";

function App() {
  const [isFormRegOpened, setFormRegOpened] = useState(false);
  const [isFormAuthOpened, setFormAuthOpened] = useState(false);

  const openFormRegHandler = (state) => {
    setFormRegOpened(state);
  };

  const openFormAuthHandler = (state) => {
    setFormAuthOpened(state);
  };

  return (
    <>
      <Header onOpenFormReg={openFormRegHandler} />
      <Toolbar />
      {isFormRegOpened && (
        <FormRegistration
          onOpenFormAuth={openFormAuthHandler}
          onOpenFormReg={openFormRegHandler}
        />
      )}
      {isFormAuthOpened && <FormAuth />}
    </>
  );
}

export default App;
