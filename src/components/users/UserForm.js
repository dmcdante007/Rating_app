import React, { useRef } from "react";

const UserForm = (props) => {
  const nameRef = useRef();
  const ratingRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nameIs = nameRef.current.value;
    const ratingIs = ratingRef.current.value;

    props.onClickingSubmit(nameIs, ratingIs);
    props.checkForStars(ratingIs);

    nameRef.current.value = "";
    ratingRef.current.value = "";
  };
  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <h2>Feedback Form</h2> <br />
        <label htmlFor="name">Enter your Name</label>
        <input id="name" type="text" ref={nameRef} value={props.name} />
        <label htmlFor="rating">Choose Rating</label>
        <select id="rating" ref={ratingRef} value={props.rating}>
          <option id="1">1</option>
          <option id="2">2</option>
          <option id="3">3</option>
          <option id="4">4</option>
          <option id="5">5</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
