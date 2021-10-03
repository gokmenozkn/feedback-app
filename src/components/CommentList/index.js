import CommentItem from "../CommentListItem";
import style from "./index.module.scss";

export default function CommentList({ found }) {
  const comments = found.comments;

  function Comments() {
    return comments.map((item) => (
      <CommentItem 
        key={item.id}
        content={item.content}
        img={item.user.image}
        name={item.user.name}
        username={item.user.username}
      />
    ));
  }

  return (
    <div className={style.comment_container}>
      <h4>{comments.length} Comments</h4>
      <Comments />
    </div>
  );
}
