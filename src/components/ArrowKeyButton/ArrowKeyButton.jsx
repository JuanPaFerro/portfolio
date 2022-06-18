import React from "react";

const ArrowKeyButton = ({ direction }) => {
  if (direction === "up")
    return (
      <button className="button-up w-12 h-7 bg-[#010C15] rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 8l6 6H6z" fill="rgba(255,255,255,1)" />
        </svg>
      </button>
    );
  if (direction === "left")
    return (
      <button className="button-left w-12 h-7 bg-[#010C15] rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M8 12l6-6v12z" fill="rgba(255,255,255,1)" />
        </svg>
      </button>
    );
  if (direction === "down")
    return (
      <button className="button-down w-12 h-7 bg-[#010C15] rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 16l-6-6h12z" fill="rgba(255,255,255,1)" />
        </svg>
      </button>
    );
  if (direction === "right")
    return (
      <button className="button-right w-12 h-7 bg-[#010C15] rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 12l-6 6V6z" fill="rgba(255,255,255,1)" />
        </svg>
      </button>
    );
};

export default ArrowKeyButton;
