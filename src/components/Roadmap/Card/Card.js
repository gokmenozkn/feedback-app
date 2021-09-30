import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import useCardStyle from "./style";

export default function Card({ ...props }) {
  const card = useCardStyle(props);
  const {
    title = "",
    description = "",
    upvotes = Number,
    comments = [],
    category = "",
    status = "",
  } = props;

  const firstLetterUpper =
    category.slice(0, 1).toUpperCase() + category.slice(1);

  const fixedStatus = status.slice(0, 1).toUpperCase() + status.slice(1);

  return (
    <div className={card.card}>
      <div className={"card__status"}>
        <div className={`card__status__circle orange`}></div>
        <p>{fixedStatus}</p>
      </div>
      <div className={card.card__title}>
        <h4>{title}</h4>
      </div>
      <div className={card.card__body}>
        <p>{description}</p>
      </div>
      <div className={card.card__label}>
        <div>{firstLetterUpper}</div>
      </div>
      <div className={card.card__bottom}>
        <div className={card.card__bottom__upvote}>
          <img src="/assets/shared/icon-arrow-up.svg" alt="" />
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
