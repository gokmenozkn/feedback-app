import { createContext, useContext, useReducer } from "react";
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
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
