import style from "./FormAuth.module.css";

export const FormAuth = (props) => {
  const toggleFormHandler = () => {
    props.onOpenFormReg(true);
    props.onOpenFormAuth(false);
  };

  return (
    <div className={style.container}>
      <h2 className={style.label}>Please, log in to your account </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
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
            placeholder="*******"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
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
