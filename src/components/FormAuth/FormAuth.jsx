import style from "./FormAuth.module.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const FormAuth = (props) => {
  const toggleFormHandler = () => {
    props.onOpenFormReg(true);
    props.onOpenFormAuth(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    console.log("registrationHandler  e:", e);
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        props.onOpenFormAuth(false);
      })
      .catch((error) => {
        console.log(error);
        // throw new Error("Sorry, couldn't find your account");
        setError("Sorry, couldn't find your account");
      });
  };

  return (
    <div className={style.container}>
      <h2 className={style.label}>Please, log in to your account </h2>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="piter@gmail.com"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>

      <div className={style.line}></div>
      <div className={style.account}>
        <div className={style.label}>Don’t have an account?</div>
        <button
          type="button"
          className="btn btn-link"
          onClick={toggleFormHandler}
        >
          Register
        </button>
      </div>
    </div>
  );
};
