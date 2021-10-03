import style from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return <div className={style.error}>Can't be empty</div>;
};

export default ErrorMessage;
