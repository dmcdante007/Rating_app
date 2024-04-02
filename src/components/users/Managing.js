import React from "react";

const Managing = (props) => {
  return (
    <React.Fragment>
      <ul>
        <b>All Feedbacks</b>
        {props.User.map((users) => (
          <li id={users.id}>
            {users.nameIs} {users.ratingIs}
            <button
              onClick={() => {
                props.deleteButtonHandler(users.id, users.ratingIs);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                props.editButtonHandler(users.nameIs, users.ratingIs);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Managing;
