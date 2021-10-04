import styles from "./citem.module.scss";

function CommentItem({ ...props }) {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__hero}>
          <img src={`${props.img}`} alt="profile-pic" />
        </div>
        <div className={styles.item__main}>
          <div className={styles.item__main__header}>
            <div className={styles.left}>
              <h5>{props.name}</h5>
              <span className={styles.username}>@{props.username}</span>
            </div>
            <div className={styles.right}>
              <span className={styles.reply}>Reply</span>
            </div>
          </div>
          <div className={styles.item__main__body}>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
