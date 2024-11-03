import React from 'react';

export function LineMdPlayFilled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillOpacity={0}
        stroke="currentColor"
        strokeDasharray={40}
        strokeDashoffset={40}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 6l10 6l-10 6Z"
      >
        <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1" />
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0" />
      </path>
    </svg>
  );
}
