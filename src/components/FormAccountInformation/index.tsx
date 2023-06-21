import React from "react";

function FormAccountInformation({ entity }: any) {
  return (
    <div>
      <div>UserId: {entity.userId}</div>
      <div>Title: {entity.title}</div>
      <div>Body: {entity.body}</div>
    </div>
  );
}

export default FormAccountInformation;
