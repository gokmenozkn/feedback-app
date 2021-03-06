import feedback from "./feedback.module.scss";
import FeedbackItem from "../FeedbackItem";
import { useFeedbackContext } from "../../context/FeedbackContext";
import { useFilterContext } from "../../context/FilterContext";
import Empty from "../Empty/empty";

function Feedback() {
  const { feedbacks, DROPDOWN_MAP, sortName } = useFeedbackContext();
  const { filterBy } = useFilterContext();

  const dataToShow = (() => {
    if (filterBy === "all") {
      return [...feedbacks]
        .sort(DROPDOWN_MAP[sortName])
        .filter((item) => item.status === "suggestion");
    } else {
      return [...feedbacks]
        .sort(DROPDOWN_MAP[sortName])
        .filter(
          (item) => item.status === "suggestion" && item.category === filterBy
        );
    }
  })();

  const List = () => {
    if (dataToShow.length > 0) {
      return dataToShow.map((item) => {
        return <FeedbackItem key={item.id} data={item} />;
      });
    } else {
      return <Empty />;
    }
  };

  return (
    <div className={feedback.feedbacks__container}>
      <div className={feedback.feedbacks}>
        <List />
      </div>
    </div>
  );
}

export default Feedback;
