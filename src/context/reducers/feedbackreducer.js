/* eslint-disable */
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
      var { feedbacks } = state;
      var itemId;
      var updatedItems = feedbacks.map((item) => {
        if (action.payload === item.id) {
          itemId = action.payload;
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
        upvotedItems: [{ id: itemId }, ...state.upvotedItems],
      };
    }
    case "UNVOTE": {
      var { feedbacks, upvotedItems } = state;
      var updatedUpvotedItems;
      var updatedFeedbacks = feedbacks.map((item) => {
        if (action.payload === item.id) {
          var found = upvotedItems.find((item) => item.id === action.payload);

          if (found) {
            updatedUpvotedItems = upvotedItems.filter(
              (item) => item.id !== found.id
            );
          }
          return {
            ...item,
            upvotes: item.upvotes - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        feedbacks: updatedFeedbacks,
        upvotedItems: updatedUpvotedItems,
      };
    }
    case "DELETE":
      break;
    default:
      break;
  }
}

export default feedbackReducer;