/* eslint-disable */
import { v4 as uuidv4 } from "uuid";

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
          updatedUpvotedItems = upvotedItems.filter(
            (item) => item.id !== action.payload
          );
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
      return {
        ...state,
        feedbacks: state.feedbacks.filter(
          (feedback) => feedback.id !== action.payload
        ),
        upvotedItems: state.upvotedItems.filter(
          (upvoted) => upvoted.id !== action.payload
        ),
      };
    case "COMMENT": {
      var { content, id } = action.payload;
      var currentUser = state.currentUser;
      var x = state.feedbacks.map((feedback) => {
        if (id === feedback.id) {
          return {
            ...feedback,
            comments: [
              {
                id: uuidv4(),
                content,
                user: currentUser,
              },
              ...feedback.comments,
            ],
          };
        }
        return feedback;
      });
      return {
        ...state,
        feedbacks: x,
      };
    }
    default:
      break;
  }
}

export default feedbackReducer;
