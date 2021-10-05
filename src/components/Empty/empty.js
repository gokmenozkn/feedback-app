import empty from "./empty.module.scss";
import CreateFeedbackButton from "./../CreateFeedbackButton"

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
        <CreateFeedbackButton />
      </div>
    </div>
  );
}

export default Empty;
