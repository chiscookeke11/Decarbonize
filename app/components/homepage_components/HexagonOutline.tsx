import React from "react";

type HexagonOutlineProps = {
  width?: number;
  height?: number;
  className?: string;
};

const HexagonOutline: React.FC<HexagonOutlineProps> = ({
  width = 602,
  height = 664,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 602 664"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M251.208 17.3529C282.019 -0.450983 319.981 -0.450974 350.792 17.3529L548.208 131.427C579.019 149.231 598 182.134 598 217.742V445.89C598 481.498 579.019 514.401 548.208 532.205L350.792 646.279C319.981 664.082 282.019 664.082 251.208 646.279L53.792 532.205C22.9806 514.401 4 481.498 4 445.89V217.742C4 182.134 22.9806 149.231 53.792 131.427L251.208 17.3529Z"
        stroke="url(#hexGradient)"
        strokeWidth="7"
      />
      <defs>
        <linearGradient
          id="hexGradient"
          x1="301"
          y1="4"
          x2="301"
          y2="659.631"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A0FF75" />
          <stop offset="1" stopColor="#E8FFDE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HexagonOutline;
