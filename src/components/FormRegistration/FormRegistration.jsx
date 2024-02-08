import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./FormRegistration.module.css";
import { useState } from "react";

export const FormReg = (props) => {
  const toggleFormHandler = () => {
    props.onOpenFormReg(false);
    props.onOpenFormAuth(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const registrationHandler = (e) => {
  //   console.log("registrationHandler  e:", e);
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((user) => {
  //       console.log(user);
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //     })
  //     .catch((error) => console.error(error));
  // };

  const registrationHandler = async (e, name, email, password) => {
    e.preventDefault();
    const res1 = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => console.error(error));

    console.log("registrationHandler  res1:", res1);

    const res = await updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((err) => console.log(err));

    console.log(res);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.container}>
      <h2 className={style.label}>Create account </h2>
      <form onSubmit={(e) => registrationHandler(e, name, email, password)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Piter Pen"
            aria-describedby="emailHelp"
          />
        </div>
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

        {/* <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Repeat your password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="*******"
          />
        </div> */}

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
        </div>
      </form>

      <div className={style.line}></div>
      <div className={style.account}>
        <div className={style.label}>Already have an account?</div>
        <button
          type="button"
          className="btn btn-link"
          onClick={toggleFormHandler}
        >
          Log in
        </button>
      </div>
    </div>
  );
};
