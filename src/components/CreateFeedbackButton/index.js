import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const CreateFeedbackButton = () => {
  return (
    <Link className={styles.add_feedback} to="/new-feedback">
      + Add Feedback
    </Link>
  );
};

export default CreateFeedbackButton;
