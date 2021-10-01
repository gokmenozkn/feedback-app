import { createContext, useContext, useReducer } from "react";
// import { useState, createContext, useContext, useReducer } from "react";
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
  // const [feedbacks, setFeedbacks] = useState(feedbackData.productRequests); // Array[]
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
    // setFeedbacks((prevState) => {
    //   return [newItem, ...prevState];
    // });
  }

  function updateFeedback(id, title, category, status, detail) {
    // const { feedbacks } = state;
    // let found = feedbacks.find((elem) => elem.id === id);
    // found.title = title;
    // found.status = status;
    // found.category = category;
    // found.description = detail;

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
    console.log(state.upvotedItems);
  }

  function unvote(id) {
    dispatch({
      type: "UNVOTE",
      payload: id,
    });
  }

  const value = {
    state,
    feedbacks: state.feedbacks,
    // setFeedbacks,
    newFeedback,
    updateFeedback,
    upvote,
    unvote,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
