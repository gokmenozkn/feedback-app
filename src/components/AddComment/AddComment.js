import styles from "./index.module.scss";
import { useState } from "react";
import { useFeedbackContext } from "../../context/FeedbackContext";

export default function AddComment({ found }) {
  const { addComment } = useFeedbackContext();
  const [content, setContent] = useState("");
  const [charCount, setCharCount] = useState(250);

  function handleChange(e) {
    if(e.nativeEvent.inputType === "insertLineBreak") return;

    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);
    const count = 250 - message.length;

    setContent(message);
    setCharCount(count);
  }

  function handlePost(e, id, text) {
    e.preventDefault();
    if (text) {
      addComment(id, text);
    }
  }

  return (
    <div className={styles.add_comment}>
      <div className={styles.wrapper}>
        <h4>Add Comment</h4>
        <div className={styles.textarea}>
          <textarea
            placeholder="Type your comment here"
            type="text"
            className={styles.input}
            rows="4"
            value={content}
            onChange={handleChange}
            maxLength={250}
          />
        </div>
        <div className={styles.wrapper__bottom}>
          <div>
            <span>{charCount} Characters left</span>
          </div>
          <div className={styles.post_btn}>
            <form onSubmit={(e) => handlePost(e, found.id, content)}>
              <button type="submit">Post Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
