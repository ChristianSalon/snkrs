import Link from "next/link";
import React from "react";

interface Props {
  fill: "black" | "white";
}

const BackButton: React.FC<Props> = ({ fill }) => {
  return (
    <Link href="/">
      <div className="w-6 h-6 absolute top-4 left-4 cursor-pointer">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
        >
          <g>
            <path d="M471.4,961.2l79.9-79.9l-325-324.8H990v-113H226.3l325-324.8l-79.9-79.9L10,500L471.4,961.2z" />
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default BackButton;
