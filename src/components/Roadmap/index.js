import roadmap from "./roadmap.module.scss";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";
import { useFeedbackContext } from "../../context/FeedbackContext";

const borderRadius = 0.625 + "rem";

export const useHeaderStyles = createUseStyles({
  navbar: {
    backgroundColor: "#373F68",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: borderRadius,
    padding: ["1.3em", "1.5em"],

    "& .navbar__left": {
      "& h3": {
        fontSize: 1.5 + "rem",
        marginTop: 0.2 + "em",
      },
    },
  },
  add_feedback: {
    backgroundColor: "#AD1FEA",
    padding: [".7em", "1.5em"],
    borderRadius: borderRadius,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#C75AF6",
    },
  },
  goBack: {
    fontSize: 14 + "px",
    fontWeight: 500,

    "& .icon": {
      marginRight: 1 + "em",
      fontSize: 10,
    },

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export function Header() {
  const header = useHeaderStyles();

  return (
    <nav className={header.navbar}>
      <div className="navbar__left">
        <Link to="/" className={header.goBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          Go Back
        </Link>
        <h3>Roadmap</h3>
      </div>
      <div className={header.right}>
        <Link className={header.add_feedback} to="/new-feedback">
          + Add Feedback
        </Link>
      </div>
    </nav>
  );
}

function Roadmap() {
  const { feedbacks } = useFeedbackContext();
  const plannedFeedbacks = feedbacks.filter(
    (item) => item.status === "planned"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (item) => item.status === "in-progress"
  );
  const liveFeedbacks = feedbacks.filter((item) => item.status === "live");

  return (
    <div className={roadmap.container}>
      <Header />
      <div className={roadmap.grid}>
        {/* Planned Feedbacks */}
        <div className={roadmap.col}>
          <div className={roadmap.title}>
            <h4>Planned ({plannedFeedbacks.length})</h4>
            <p>Ideas prioritized for research</p>
          </div>

          <div className={roadmap.cards}>
            {plannedFeedbacks.map((item) => {
              return <Card {...item} key={item.id} status="planned" />;
            })}
          </div>
        </div>
        {/* In-Progress Feedbacks */}
        <div className={roadmap.col}>
          <div className={roadmap.title}>
            <h4>In-Progress ({inProgressFeedbacks.length})</h4>
            <p>Currently being developed</p>
          </div>

          <div className={roadmap.cards}>
            {inProgressFeedbacks.map((item) => {
              return <Card {...item} key={item.id} status="in-progress" />;
            })}
          </div>
        </div>
        {/* Live Feedbacks */}
        <div className={roadmap.col}>
          <div className={roadmap.title}>
            <h4>Live ({liveFeedbacks.length})</h4>
            <p>Released features</p>
          </div>

          <div className={roadmap.cards}>
            {liveFeedbacks.map((item) => {
              return <Card {...item} key={item.id} status="live" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
