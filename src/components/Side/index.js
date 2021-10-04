/* eslint-disable */
import { Link } from "react-router-dom";
import side from "./side.module.scss";
import { useFilterContext } from "../../context/FilterContext";
import { useFeedbackContext } from "../../context/FeedbackContext";

export default function Side() {
  const { activeElement, handleFilter } = useFilterContext();
  const { feedbacks } = useFeedbackContext();
  const activeHandle = (name) => (activeElement === name ? side.active : ""); // set active class for labels

  const planned = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  ).length;

  const inProgress = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  ).length;

  const live = feedbacks.filter(
    (feedback) => feedback.status === "live"
  ).length;

  function clickHandle(filterBy) {
    handleFilter(filterBy);
  }

  return (
    <div className={side.side}>
      <div className={side.side__header}>
        <div className={side.side__header__brand}>
          <h3>Frontend Mentor</h3>
          <h6>Feedback Board</h6>
        </div>
        <div className={side.side__header__hamburger}>
          <img src="/assets/shared/mobile/icon-hamburger.svg" alt="" />
        </div>
      </div>
      <div className={side.side__mid}>
        <div className={side.side__mid__labels}>
          <div
            className={`${activeHandle("all")}`}
            onClick={() => clickHandle("all")}
          >
            All
          </div>
          <div
            className={`${activeHandle("ui")}`}
            onClick={() => clickHandle("ui")}
          >
            UI
          </div>
          <div
            className={`${activeHandle("ux")}`}
            onClick={() => clickHandle("ux")}
          >
            UX
          </div>
          <div
            className={`${activeHandle("enhancement")}`}
            onClick={() => clickHandle("enhancement")}
          >
            Enchancement
          </div>
          <div
            className={`${activeHandle("bug")}`}
            onClick={() => clickHandle("bug")}
          >
            Bug
          </div>
          <div
            className={`${activeHandle("feature")}`}
            onClick={() => clickHandle("feature")}
          >
            Feature
          </div>
        </div>
      </div>
      <div className={side.side__bottom}>
        <div className={side.side__bottom__title}>
          <h4>Roadmap</h4>
          <Link to="/roadmap">View</Link>
        </div>

        <ul className={side.side__bottom__lists}>
          <li className={side.planned}>
            <div>
              <p>Planned</p>
              <h5>{planned}</h5>
            </div>
          </li>
          <li className={side.progress}>
            <div>
              <p>In-Progress</p>
              <h5>{inProgress}</h5>
            </div>
          </li>
          <li className={side.live}>
            <div>
              <p>Live</p>
              <h5>{live}</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
