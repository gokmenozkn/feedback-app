import { Link, useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import edit from "./edit.module.scss";
import { useFeedbackContext } from "../../context/FeedbackContext";

function EditFeed() {
  const { id } = useParams();
  const history = useHistory();
  const { feedbacks, updateFeedback } = useFeedbackContext();
  const foundItem = feedbacks.find((el) => el.id === parseInt(id, 10));

  const [title, setTitle] = useState(foundItem.title || "");
  const [ctgry, setCtgry] = useState(foundItem.category || "feature");
  const [status, setStatus] = useState(foundItem.status || "suggestion");
  const [detail, setDetail] = useState(foundItem.description || "");

  const formTitle = foundItem ? (
    <h2 className={edit.form__title}>Editing ‘{foundItem.title}’</h2>
  ) : (
    <h2 className={edit.form__title}>Editing ‘Add a dark theme option’</h2>
  );

  function handleForm(e, id, title, category, status, detail) {
    e.preventDefault();
    updateFeedback(id, title, category, status, detail);
    // updateFeedback(title, category, status, detail);
    history.push("/feedback/" + id);
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleCategory(e) {
    setCtgry(e.target.value)
  }

  function handleStatus(e) {
    setStatus(e.target.value)
  }

  function handleDetail(e) {
    setDetail(e.target.value)
  }

  return (
    <div className={edit.edit_container}>
      <Link to={"/feedback/" + id}>
        <img src="/assets/shared/icon-arrow-left.svg" alt="<" />
        Go Back
      </Link>
      <form
        onSubmit={(e) => handleForm(e, parseInt(id, 10), title, ctgry, status, detail)}
        // onSubmit={(e) => handleForm(e, title, ctgry, status, detail)}
        className={edit.form}
      >
        <img
          className={edit.add_icon}
          src="/assets/shared/icon-edit-feedback.svg"
          alt="+"
        />
        {formTitle}
        <div className={edit.form__group}>
          <label className={edit.form__group__title}>
            <h5>Feedback Title</h5>
            <p>Add a short, descriptive headline</p>
          </label>
          <input
            value={title}
            onChange={handleTitle}
            type="text"
            className={edit.form__group__input}
          />
        </div>
        <div className={edit.form__group}>
          <label className={edit.form__group__title}>
            <h5>Category</h5>
            <p>Choose a category for your feedback</p>
          </label>
          <div className={edit.select_wrapper}>
            <img
              src="/assets/shared/icon-arrow-down.svg"
              alt=""
              className={edit.dropdown}
            />
            <select
              name="categories"
              value={ctgry}
              onChange={handleCategory}
              className={edit.form__group__selection}
            >
              <option value="feature">Feature</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
            </select>
          </div>
        </div>
        <div className={edit.form__group}>
          <label className={edit.form__group__title}>
            <h5>Update Status</h5>
            <p>Change feedback state</p>
          </label>
          <div className={edit.select_wrapper}>
            <img
              src="/assets/shared/icon-arrow-down.svg"
              alt=""
              className={edit.dropdown}
            />
            <select
              name="categories"
              value={status}
              onChange={handleStatus}
              className={edit.form__group__selection}
            >
              <option value="suggestion">Suggestion</option>
              <option value="planned">Planned</option>
              <option value="in-progress">In-Progress</option>
              <option value="live">Live</option>
            </select>
          </div>
        </div>
        <div className={edit.form__group}>
          <label className={edit.form__group__title}>
            <h5>Feedback Detail</h5>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <textarea
            value={detail}
            onChange={handleDetail}
            type="text"
            className={edit.form__group__input}
            rows="4"
          />
        </div>

        <div className={edit.form__buttons}>
          <div className={edit.left}>
            <button className={edit.delete}>Delete</button>
          </div>
          <div className={edit.right}>
            <button className={edit.cancel}>Cancel</button>
            <button type="submit" className={edit.add}>Edit Feedback</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditFeed;
