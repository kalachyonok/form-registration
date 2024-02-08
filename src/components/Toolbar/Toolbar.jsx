import style from "./Toolbar.module.css";

export const Toolbar = () => {
  return (
    <div className={style.toolbar}>
      <div className={style.item}>
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-lock-fill"></i>
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-unlock-fill"></i>
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-danger">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};
