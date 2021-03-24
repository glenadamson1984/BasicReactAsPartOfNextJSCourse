import React from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Title</label>
          <input type="url" required id="image" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Descrition</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={styles.actions}>
            <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
