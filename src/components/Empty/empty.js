import { Link } from "react-router-dom";
import empty from "./empty.module.scss";

function Empty() {
  return (
    <div className={empty.container}>
      <div className={empty.wrapper}>
        <img src="/assets/suggestions/illustration-empty.svg" alt="" />
        <h2>There is no feedback yet.</h2>
        <p>
          Got a suggestion? Found a bug that needs to be squashed?<br/> We love
          hearing about new ideas to improve our app.
        </p>
        <Link to={"/new-feedback"}>+ Add Feedback</Link>
      </div>
    </div>
  );
}

export default Empty;
