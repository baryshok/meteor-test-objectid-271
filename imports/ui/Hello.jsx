import React from "react";

export const Hello = () => {
  const onClick = () => {
    Meteor.call("testObjectId", (error, result) => {
      console.log("result", result);
    });
  };

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
