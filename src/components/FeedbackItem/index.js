import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faComment } from "@fortawesome/free-solid-svg-icons";
import item from "./item.module.scss";
import { Link } from "react-router-dom";
import { useFeedbackContext } from "../../context/FeedbackContext";
import { useUpvoteContext } from "../../context/UpvoteContext";

function FeedbackItem({ data }) {
  const {
    upvotes = Number(),
    description = "",
    category = "",
    comments = [],
    id = Number(),
    title = "",
  } = data;
  const changedCategory =
    category.slice(0, 1).toUpperCase() + category.slice(1);

  const { upvotedItems } = useUpvoteContext();
  const { upvote } = useFeedbackContext();

  function handleClick(id) {
    let found = upvotedItems.find((item) => item.id === id);
    if (found) return;
    upvote(id);
  }

  function handleActiveClass(id) {
    let found = upvotedItems.find((item) => item.id === id);
    return found ? item.active : item.bg_light;
  }

  return (
    <div className={item.feedback}>
      <div className={item.feedback__row}>
        <div className={item.feedback__row__left}>
          <div
            className={`${item.vote} ${handleActiveClass(id)}`}
            onClick={() => handleClick(id)}
          >
            <div className={item.arrow}>
              <FontAwesomeIcon size="xs" icon={faChevronUp} />
            </div>
            <div className={item.number}>
              <h5>{upvotes}</h5>
            </div>
          </div>
          <div className={item.solution}>
            <Link to={`/feedback/${id}`}>{title}</Link>
            <p>{description}</p>
            <span className={item.label}>{changedCategory}</span>
          </div>
        </div>
        <div className={item.feedback__row__right}>
          <div className={item.comment_icon}>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className={item.comment_number}>
            <h5>{comments.length}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
