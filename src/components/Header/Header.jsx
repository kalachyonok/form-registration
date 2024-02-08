import styleHeader from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={styleHeader.header}>
      <div>Hello, User!</div>
      <div>
        <button
          type="button"
          class="btn btn-link"
          onClick={() => props.onOpenFormAuth(true)}
        >
          Login
        </button>
      </div>
    </header>
  );
};
