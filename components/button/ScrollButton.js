import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default function ScrollButton() {
  return (
    <div>
      {" "}
      <ScrollUpButton
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
      >
        <div className="h-20 w-20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </ScrollUpButton>
    </div>
  );
}
