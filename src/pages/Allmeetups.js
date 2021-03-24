import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const firebaseToArrayHelper = (data) => {
    const meetups = [];

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };

      meetups.push(meetup);
    }

    return meetups;
}

const Allmeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  //running useEffect with no dependency provided will run it as if this is a normal function in the main function body so every render
  //running useEffect with an empty array will run the useEffect only after the first render
  //running useEffect with a populated array will run the useEffect after the first render or when anything in depency list changes
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://next-js-react-fundamentals-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeetupData(firebaseToArrayHelper(data));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }

  console.log(meetupData);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupData} />
    </section>
  );
};

export default Allmeetups;
