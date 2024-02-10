import styleHeader from "./Header.module.css";
import { useAuthContext } from "../AuthDetails";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export const Header = (props) => {
  const user = useAuthContext();
  console.log("Header  user:", user);

  return (
    <header className={styleHeader.header}>
      <div>{`Hello, ${user ? user.displayName : "User"}`}</div>
      <div>
        {!user && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => props.onOpenFormAuth(true)}
          >
            Login
          </button>
        )}
        {user && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};
