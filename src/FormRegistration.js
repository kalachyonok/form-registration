import style from "./FormRegistration.module.css";

export const FormRegistration = () => {
  return (
    <div className={style.container}>
      <h2 className={style.label}>Please, log in to your account </h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Piter Pen"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            E-mail
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="piter@gmail.com"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="*******"
          />
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Sign in
          </button>
        </div>
      </form>

      <div className={style.line}></div>
      <div className={style.account}>
        <div className={style.label}>Don’t have an account?</div>
        <button type="button" class="btn btn-link">
          Register
        </button>
      </div>
    </div>
  );
};
