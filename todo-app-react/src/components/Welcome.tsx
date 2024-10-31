import React from "react";
import { useParams } from "react-router-dom";

export const Welcome = () => {
  const params = useParams();
  return (
    <div>
      <h1>Welcome {params.userName}</h1>
    </div>
  );
};
