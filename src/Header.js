import styleHeader from "./Header.module.css";
import { useState } from "react";

export const Header = () => {
  const [isFormOpened, setFormIsOpened] = useState(false);

  const openFormRegistrationHandler = () => {
    setFormIsOpened(true);
  };

  return (
    <header className={styleHeader.header}>
      <div>Hello, User!</div>
      <div>
        <button
          type="button"
          class="btn btn-link"
          onClick={openFormRegistrationHandler}
        >
          Login
        </button>
      </div>
    </header>
  );
};
