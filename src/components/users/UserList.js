import React, { useState } from "react";
import UserForm from "./UserForm";
import Heading from "./Heading";
import Managing from "./Managing";

const UserList = (props) => {
  const [listofUser, SetListofUser] = useState([]);
  const [oneStar, setOneStar] = useState("0");
  const [twoStar, setTwoStar] = useState("0");
  const [threeStar, setThreeStar] = useState("0");
  const [fourStar, setFourStar] = useState("0");
  const [fiveStar, setFiveStar] = useState("0");

  const [editName, SetEditName] = useState();
  const [editRating, setEditRating] = useState();
  const formDetails = (name, rating) => {
    SetListofUser((prev) => {
      return [
        ...prev,
        { nameIs: name, ratingIs: rating, id: Math.random().toString() },
      ];
    });
  };

  const checkForStars = (rating) => {
    if (rating === "1") {
      setOneStar(+oneStar + 1);
    } else if (rating === "2") {
      setTwoStar(+twoStar + 1);
    } else if (rating === "3") {
      setThreeStar(+threeStar + 1);
    } else if (rating === "4") {
      setFourStar(+fourStar + 1);
    } else if (rating === "5") {
      setFiveStar(+fiveStar + 1);
    }
  };

  const deleteButton = (id, rating) => {
    if (rating === "1") {
      setOneStar(+oneStar - 1);
      SetListofUser((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
        return updatedList;
      });
    } else if (rating === "2") {
      setTwoStar(+twoStar - 1);
      SetListofUser((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
        return updatedList;
      });
    } else if (rating === "3") {
      setThreeStar(+threeStar - 1);
      SetListofUser((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
        return updatedList;
      });
    } else if (rating === "4") {
      setFourStar(+fourStar - 1);
      SetListofUser((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
        return updatedList;
      });
    } else if (rating === "5") {
      setFiveStar(+fiveStar - 1);
      SetListofUser((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
        return updatedList;
      });
    }
  };

  const editButton = (name, rating) => {
    SetEditName(name);
    setEditRating(rating);
  };

  return (
    <React.Fragment>
      <Heading arrayOfUser={listofUser} />
      <div>
        <p>* {oneStar}</p>
        <p>** {twoStar}</p>
        <p>*** {threeStar}</p>
        <p>**** {fourStar}</p>
        <p>***** {fiveStar}</p>
      </div>
      <UserForm
        onClickingSubmit={formDetails}
        checkForStars={checkForStars}
        name={editName}
        rating={editRating}
      />{" "}
      <br />
      <Managing
        User={listofUser}
        deleteButtonHandler={deleteButton}
        editButtonHandler={editButton}
      />
    </React.Fragment>
  );
};

export default UserList;
