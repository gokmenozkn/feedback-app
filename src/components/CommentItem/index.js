import styles from "./citem.module.scss";

function CommentItem() {
  return (
    <div className={styles.item}>
      <div className={styles.item__hero}>
        <img src="/assets/user-images/image-elijah.jpg" alt="" />
      </div>
      <div className={styles.item__main}>
        <div className={styles.item__main__header}>
          <div className={styles.left}>
            <h5>Elijah Moss</h5>
            <span className={styles.username}>@hexagon.bestagon</span>
          </div>
          <div className={styles.right}>
            <span className={styles.reply}>Reply</span>
          </div>
        </div>
        <div className={styles.item__main__body}>
          <p>
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
