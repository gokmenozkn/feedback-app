import { Link, useParams } from "react-router-dom";
import detail from "./detail.module.scss";
import FeedbackItem from "../FeedbackItem";
import CommentList from "../CommentList";
import { useFeedbackContext } from "../../context/FeedbackContext";

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
        <div className={detail.add_comment}>
          <div className={detail.wrapper}>
            <h4>Add Comment</h4>
            <div className={detail.textarea}>
              <textarea
                placeholder="Type your comment here"
                type="text"
                className={detail.input}
                rows="4"
              />
            </div>
            <div className={detail.wrapper__bottom}>
              <div>
                <span>250 Characters left</span>
              </div>
              <div className={detail.post_btn}>
                <button>Post Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
