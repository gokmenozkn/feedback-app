/* eslint-disable */
import navbar from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { useFeedbackContext } from "../../context/FeedbackContext";

const Navbar = () => {
  const { feedbacks = [] } = useFeedbackContext();
  const suggestions = feedbacks.filter((item) => item.status === "suggestion");

  return (
    <nav className={navbar.navbar}>
      <div className={navbar.navbar__left}>
        <div className={navbar.navbar__left__suggestions}>
          <img src="./assets/suggestions/icon-suggestions.svg" alt="icon" />
          <h3>{suggestions.length} Suggestions</h3>
        </div>
        <div className={navbar.navbar__left__sort}>
          <h5>
            <span className={navbar.sort_by}>Sort by :</span> Most Upvotes
          </h5>
        </div>
      </div>
      <div className={navbar.navbar__right}>
        <Link className={navbar.add_feedback} to="/new-feedback">
          + Add Feedback
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
