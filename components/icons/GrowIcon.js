import * as React from "react"

const GrowIcon = (props) => (
  <svg
    className="ml-1.5 w-6 h-6 inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    />
  </svg>
)

export default GrowIcon