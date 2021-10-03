import { createContext, useContext, useReducer, useState } from "react";
import feedbackData from "../data/data.json";
import feedbackReducer from "./reducers/feedbackreducer";

const FeedbackContext = createContext();

export const useFeedbackContext = () => useContext(FeedbackContext);

// Initial state
export const initialState = {
  feedbacks: feedbackData.productRequests,
  upvotedItems: [],
  filterName: "all",
  activeElementName: "all",
};

function FeedbackProvider({ children }) {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);
  const [sortName, setSortName] = useState("Most Upvotes");

  const DROPDOWN_MAP = {
    "Most Upvotes": (a, b) => b.upvotes - a.upvotes,
    "Least Upvotes": (a, b) => a.upvotes - b.upvotes,
    "Most Comments": (a, b) => {
      var aLen = a.comments.length;
      var bLen = b.comments.length;
      return bLen - aLen;
    },
    "Least Comments": (a, b) => {
      var aLen = a.comments.length;
      var bLen = b.comments.length;
      return aLen - bLen;
    },
  };

  const DROPDOWN_NAMES = Object.keys(DROPDOWN_MAP);

  function newFeedback(title, category, detail) {
    const { feedbacks } = state;
    const newItem = {
      id: feedbacks.length + 1,
      title: title,
      category: category,
      upvotes: 0,
      status: "suggestion",
      description: detail,
      comments: [],
    };
    dispatch({
      type: "ADD",
      payload: newItem,
    });
  }

  function updateFeedback(id, title, category, status, detail) {
    dispatch({
      type: "EDIT",
      payload: { id, title, category, status, detail },
    });
  }

  function upvote(id) {
    dispatch({
      type: "UPVOTE",
      payload: id,
    });
  }

  function unvote(id) {
    dispatch({
      type: "UNVOTE",
      payload: id,
    });
  }

  function removeFeedback(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  const value = {
    state,
    feedbacks: state.feedbacks,
    newFeedback,
    updateFeedback,
    upvote,
    unvote,
    removeFeedback,
    DROPDOWN_MAP,
    DROPDOWN_NAMES,
    sortName,
    setSortName,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
