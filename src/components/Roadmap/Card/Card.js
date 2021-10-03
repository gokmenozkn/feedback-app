import useCardStyle from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useFeedbackContext } from "../../../context/FeedbackContext";
import { Link } from "react-router-dom";

export default function Card({ ...props }) {
  const { upvote, state, unvote } = useFeedbackContext();
  const card = useCardStyle(props);
  const {
    title = "",
    description = "",
    upvotes = Number,
    comments = [],
    category = "",
    status = "",
    id = Number,
  } = props;

  const firstLetterUpper =
    category.slice(0, 1).toUpperCase() + category.slice(1);

  const fixedStatus = status.slice(0, 1).toUpperCase() + status.slice(1);
  const found = state.upvotedItems.find((item) => item.id === id);

  const activeStyle = {
    color: "#fff",
    backgroundColor: "#4661E6",
  };

  function handleClick(feedbackId) {
    if (found) {
      unvote(feedbackId);
    } else {
      upvote(feedbackId);
    }
  }

  return (
    <div className={card.card}>
      <div className={"card__status"}>
        <div className={`card__status__circle orange`}></div>
        <p>{fixedStatus}</p>
      </div>
      <div className={card.card__title}>
        <Link className={card.link} to={`/feedback/${id}`}>{title}</Link>
      </div>
      <div className={card.card__body}>
        <p>{description}</p>
      </div>
      <div className={card.card__label}>
        <div>{firstLetterUpper}</div>
      </div>
      <div className={card.card__bottom}>
        <div
          className={card.card__bottom__upvote}
          onClick={() => handleClick(id)}
          style={found ? activeStyle : {}}
        >
          <FontAwesomeIcon size="xs" icon={faChevronUp} />
          <h5>{upvotes}</h5>
        </div>
        <div className={card.card__bottom__qty}>
          <FontAwesomeIcon style={{ color: "#CDD2EE" }} icon={faComment} />
          <h5>{comments.length}</h5>
        </div>
      </div>
    </div>
  );
}
