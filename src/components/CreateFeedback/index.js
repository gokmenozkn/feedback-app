import create from "./create.module.scss";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useFeedbackContext } from "../../context/FeedbackContext";

function CreateFeedback() {
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState("feature");
  const [area, setArea] = useState("");
  const { newFeedback } = useFeedbackContext();
  const history = useHistory();

  function handleChange(e) {
    const { value } = e.target;
    setTitle(value);
  }

  function handleSelect(e) {
    const { value } = e.target;
    setSelected(value);
  }

  function handleTextarea(e) {
    const { value } = e.target;
    setArea(value);
  }

  function handleSubmit(e, title, category, detail) {
    e.preventDefault();
    newFeedback(title, category, detail);
    history.push("/");
  }

  return (
    <div className={create.form_container}>
      <Link to="/">
        <img src="/assets/shared/icon-arrow-left.svg" alt="<" />
        Go Back
      </Link>
      <form
        onSubmit={(e) => handleSubmit(e, title, selected, area)}
        className={create.form}
      >
        <img
          className={create.add_icon}
          src="/assets/shared/icon-new-feedback.svg"
          alt="+"
        />
        <h2 className={create.form__title}>Create New Feedback</h2>
        <div className={create.form__group}>
          <label className={create.form__group__title}>
            <h5>Feedback Title</h5>
            <p>Add a short, descriptive headline</p>
          </label>
          <input
            defaultValue={title}
            onChange={handleChange}
            type="text"
            className={create.form__group__input}
          />
        </div>
        <div className={create.form__group}>
          <label className={create.form__group__title}>
            <h5>Category</h5>
            <p>Choose a category for your feedback</p>
          </label>
          <div className={create.select_wrapper}>
            <img
              src="/assets/shared/icon-arrow-down.svg"
              alt=""
              className={create.dropdown}
            />
            <select
              value={selected}
              onChange={handleSelect}
              name="categories"
              className={create.form__group__selection}
            >
              <option value="feature">Feature</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
            </select>
          </div>
        </div>
        <div className={create.form__group}>
          <label className={create.form__group__title}>
            <h5>Feedback Detail</h5>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <textarea
            type="text"
            onChange={handleTextarea}
            className={create.form__group__input}
            rows="4"
          />
        </div>

        <div className={create.form__buttons}>
          <div className={create.right}>
            <button className={create.cancel}>Cancel</button>
            <button type="submit" className={create.add}>
              Add Feedback
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateFeedback;
