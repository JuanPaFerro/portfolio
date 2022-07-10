import React from "react";

const TechnologyFilterIcon = ({ type }) => {
  if (type === "angular")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.934l1.17 2.92h2.167L12 4.21zm1.698 8.33h-3.396L12 8.45l1.698 4.09z"
          fill="rgba(96,123,150,1)"
        />
      </svg>
    );
  if (type === "react")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
          fill="rgba(96,123,150,1)"
        />
      </svg>
    );
  if (type === "css")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z"
          fill="rgba(96,123,150,1)"
        />
      </svg>
    );
  if (type === "html")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z"
          fill="rgba(96,123,150,1)"
        />
      </svg>
    );
  if (type === "javascript")
    return (
      <svg viewBox="0 0 24 24" width="24px" height="24px">
        <path
          d="M21.73 1.117a.468.468 0 00-.351-.156H2.62a.468.468 0 00-.351.156.467.467 0 00-.125.367l1.69 18.922c.017.2.153.367.345.422l7.687 2.195a.485.485 0 00.13.016c.046 0 .089-.004.132-.016l7.691-2.195a.486.486 0 00.348-.422l1.687-18.922a.482.482 0 00-.125-.367zM5.762 13.922l3.36.933V5.281h1.917v12.48l-5.277-1.464zm12.504-3.363l-.504 5.882-4.801 1.32v-2.21l3.238-.89.121-1.802-3.36.582v-8.16h5.759L18.555 7.2h-3.676v3.84zm0 0"
          fill="#607b96"
        />
      </svg>
    );
  if (type === "tailwind")
    return (
      <svg viewBox="0 0 24 24" width="24px" height="24px">
        <path
          d="M12 4.8c-3.2 0-5.2 1.602-6 4.802C7.2 8 8.602 7.402 10.2 7.8c.913.226 1.566.89 2.288 1.625C13.664 10.617 15.028 12 18 12c3.2 0 5.2-1.598 6-4.8-1.2 1.6-2.602 2.202-4.2 1.8-.913-.227-1.566-.89-2.288-1.621C16.336 6.184 14.972 4.8 12 4.8zM6 12c-3.2 0-5.2 1.598-6 4.8 1.2-1.6 2.602-2.202 4.2-1.8.913.227 1.566.89 2.288 1.621C7.664 17.816 9.028 19.2 12 19.2c3.2 0 5.2-1.601 6-4.8-1.2 1.601-2.602 2.199-4.2 1.8-.913-.226-1.566-.89-2.288-1.625C10.336 13.383 8.972 12 6 12zm0 0"
          fill="#607b96"
        />
      </svg>
    );
  if (type === "next")
    return (
      <svg width="24px" height="24px">
        <path
          d="M18.113 1.665C10.175-3.002.089 2.698.001 11.901c-.086 8.987 9.425 14.791 17.345 10.836L8.698 10.015v7.874c0 .873-1.669.873-1.669 0V7.332c0-.692 1.286-.749 1.651-.147l9.856 14.873c7.404-4.768 7.304-15.85-.423-20.393zm-1.114 14.903l-1.675-2.558V7.006c0-.653 1.675-.653 1.675 0v9.562z"
          fill="#607b96"
        />
      </svg>
    );
};

export default TechnologyFilterIcon;
