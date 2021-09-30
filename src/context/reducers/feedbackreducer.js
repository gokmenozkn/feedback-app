function feedbackReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };
    }
    case "EDIT": {
      let updatedFeedback = action.payload;
      let updatedFeedbacks = state.feedbacks.map((item) => {
        if (updatedFeedback.id === item.id) {
          return {
            ...item,
            title: updatedFeedback.title,
            status: updatedFeedback.status,
            category: updatedFeedback.category,
            description: updatedFeedback.detail,
          };
        }
        return item;
      });
      return {
        ...state,
        feedbacks: updatedFeedbacks,
      };
    }
    case "UPVOTE": {
      var { upvotedItems, feedbacks } = state;
      var updatedItems = feedbacks.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            upvotes: item.upvotes + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        feedbacks: updatedItems,
      };
    }
    case "DELETE":
      break;
    default:
      break;
  }
}

export default feedbackReducer;
