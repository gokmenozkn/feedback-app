import { Link, useParams } from "react-router-dom";
import { useFeedbackContext } from "../../context/FeedbackContext";
import detail from "./detail.module.scss";
import FeedbackItem from "../FeedbackItem";
import CommentList from "../CommentList";
import AddComment from "../AddComment/AddComment";

function Detail() {
  const { id } = useParams();
  const { feedbacks } = useFeedbackContext();
  const found = feedbacks.find((item) => item.id === parseInt(id, 10));

  return (
    <div className={detail.container}>
      <div className={detail.grid}>
        <div className={detail.links}>
          <div className={detail.go_btn}>
            <img src="/assets/shared/icon-arrow-left.svg" alt="left-icon" />
            <Link to="/">Go Back</Link>
          </div>
          <div className={detail.edit_btn}>
            <Link to={"/edit-feedback/" + id}>Edit Feedback</Link>
          </div>
        </div>
        <div className={detail.feedback}>
          <FeedbackItem data={found} />
        </div>
        <CommentList found={found ? found : {}} />
        <AddComment found={found} />
      </div>
    </div>
  );
}

export default Detail;
