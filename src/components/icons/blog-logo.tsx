import { ComponentPropsWithoutRef } from "react";

export function BlogLogo({
  className,
  ...props
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="94"
      height="80"
      viewBox="0 0 94 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="8" y="8" width="78" height="64" rx="8" fill="#030712" />
      <g filter="url(#filter0_ddi_56_17)">
        <rect
          x="14"
          y="14"
          width="66"
          height="52"
          rx="4"
          fill="black"
          fillOpacity="0.05"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M30.112 52V34.688H33.568V38.08L33.152 37.632C33.5787 36.544 34.2613 35.7227 35.2 35.168C36.1387 34.592 37.2267 34.304 38.464 34.304C39.744 34.304 40.8747 34.5813 41.856 35.136C42.8373 35.6907 43.6053 36.4587 44.16 37.44C44.7147 38.4213 44.992 39.552 44.992 40.832V52H41.408V41.792C41.408 40.9173 41.248 40.1813 40.928 39.584C40.608 38.9653 40.1493 38.496 39.552 38.176C38.976 37.8347 38.3147 37.664 37.568 37.664C36.8213 37.664 36.1493 37.8347 35.552 38.176C34.976 38.496 34.528 38.9653 34.208 39.584C33.888 40.2027 33.728 40.9387 33.728 41.792V52H30.112ZM48.862 52V27.776H52.478V38.08L51.902 37.632C52.3287 36.544 53.0113 35.7227 53.95 35.168C54.8887 34.592 55.9767 34.304 57.214 34.304C58.494 34.304 59.6247 34.5813 60.606 35.136C61.5873 35.6907 62.3553 36.4587 62.91 37.44C63.4647 38.4213 63.742 39.5413 63.742 40.8V52H60.158V41.792C60.158 40.9173 59.9873 40.1813 59.646 39.584C59.326 38.9653 58.878 38.496 58.302 38.176C57.726 37.8347 57.0647 37.664 56.318 37.664C55.5927 37.664 54.9313 37.8347 54.334 38.176C53.758 38.496 53.2993 38.9653 52.958 39.584C52.638 40.2027 52.478 40.9387 52.478 41.792V52H48.862Z"
        fill="#F9FAFB"
      />
      <defs>
        <filter
          id="filter0_ddi_56_17"
          x="0"
          y="0"
          width="94"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_56_17"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_56_17"
            result="effect2_dropShadow_56_17"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_56_17"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_56_17"
          />
        </filter>
      </defs>
    </svg>
  );
}
