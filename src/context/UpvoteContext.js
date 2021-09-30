import { useContext, createContext, useState } from "react";
import { useFeedbackContext } from "./FeedbackContext";

const UpvoteContext = createContext();

export const useUpvoteContext = () => useContext(UpvoteContext);

export default function UpvoteContextProvider({ children }) {
  const { feedbacks, setFeedbacks } = useFeedbackContext();
  const [upvotedItems, setUpvotedItems] = useState([]);

  function upvote(id) {
    let updated = feedbacks.map((elem) => {
      if (elem.id === id) {
        setUpvotedItems((prevState) => {
          let foundItem = upvotedItems.find((item) => id === item.id);
          if (foundItem) {
            return [...prevState];
          }
          return [{ id: id }, ...prevState];
        });
        return {
          ...elem,
          upvotes: elem.upvotes + 1,
        };
      }
      return elem;
    });
    setFeedbacks(updated);
  }

  const value = {
    upvote,
    upvotedItems,
  };

  return (
    <UpvoteContext.Provider value={value}>{children}</UpvoteContext.Provider>
  );
}
