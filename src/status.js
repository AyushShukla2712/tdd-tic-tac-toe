import React from 'react';

export default function TicTacToeStatus({ statusText }) {
  return (
    <div className="status">
      {statusText}
    </div>
  );
}