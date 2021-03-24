import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const Newmeetups = () => {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    // you need to add .json at the end - its a firebase thing
    // also anything after the url ends i.e meetups in this case will create a new table in the database
    // in firebase called meetups
    await fetch(
      "https://next-js-react-fundamentals-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    history.replace('/');
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default Newmeetups;
