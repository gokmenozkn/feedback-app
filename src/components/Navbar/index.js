/* eslint-disable */
import navbar from "./navbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFeedbackContext } from "../../context/FeedbackContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {
    feedbacks = [],
    DROPDOWN_NAMES,
    sortName,
    setSortName,
  } = useFeedbackContext();
  const suggestions = feedbacks.filter((item) => item.status === "suggestion");
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  function Dropdown() {
    return DROPDOWN_NAMES.map((item) => {
      return (
        <li key={item} onClick={() => setSortName(item)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>{item}</div>
            <img
              src="/assets/shared/icon-check.svg"
              alt="☑"
              style={{
                display: item === sortName ? "block" : "none",
              }}
            />
          </div>
        </li>
      );
    });
  }

  return (
    <nav className={navbar.navbar}>
      <div className={navbar.navbar__left}>
        <div className={navbar.navbar__left__suggestions}>
          <img src="./assets/suggestions/icon-suggestions.svg" alt="icon" />
          <h3>{suggestions.length} Suggestions</h3>
        </div>
        <div
          className={navbar.navbar__left__sort}
          onClick={() => setDropdownDisplay(!dropdownDisplay)}
        >
          <div className={navbar.flex}>
            <div className={navbar.sort_by}>Sort by :</div>
            <div>
              <span style={{ marginRight: 0.3 + "em" }}>{sortName}</span>
              <FontAwesomeIcon
                style={{ fontSize: 0.6 + "rem" }}
                icon={faChevronDown}
              />
            </div>
          </div>
          <div
            className={navbar.dropdown}
            style={{ display: dropdownDisplay ? "block" : "none" }}
          >
            <ul>
              <Dropdown />
            </ul>
          </div>
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
