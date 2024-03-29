import * as React from "react"

const HomeIcon = ({color = '#585B71', ...props}) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.183 11.836 12.53 2.189a.748.748 0 0 0-1.06 0l-9.654 9.647a1.501 1.501 0 0 0 1.06 2.562h1.017v6.883c0 .415.335.75.75.75H10.5v-5.25h2.625v5.25h6.232a.75.75 0 0 0 .75-.75v-6.883h1.017a1.502 1.502 0 0 0 1.06-2.562Z"
      fill={color}
    />
  </svg>
)

export default HomeIcon
