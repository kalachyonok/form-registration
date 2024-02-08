import style from "./Toolbar.module.css";

export const Toolbar = () => {
  return (
    <div className={style.toolbar}>
      <div className={style.item}>
        <button type="button" className="btn btn-outline-secondary">
          <i className="bi bi-lock-fill"></i>
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-outline-secondary">
          <i className="bi bi-unlock-fill"></i>
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-danger">
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};
