import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Welcome = () => {
  const params = useParams();
  return (
    <div>
      <h1>Welcome {params.userName}</h1>
      <div>
        Go to your todo list <Link to="/todos">here</Link>
      </div>
    </div>
  );
};
