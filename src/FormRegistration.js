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

        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};
