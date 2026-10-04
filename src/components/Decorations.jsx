/**
 * Subtle hand-drawn and organic decorative elements
 * Designed for the warm editorial aesthetic: Sand + Coral + Soft Peach + Muted Green
 */

export function CurvedArrow({ className = '', color = '#F97360', width = 48, height = 36 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 32C15 36 32 34 44 14M44 14C38 15 32 17 28 20M44 14C45 20 44 26 43 31"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HandSwoosh({ className = '', color = '#F97360', width = 110, height = 14 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 9C25 4 68 3 108 9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 12C38 8 74 7 100 11"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
    </svg>
  )
}

export function HandSparkle({ className = '', color = '#F97360', size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C12.5 7 15 9.5 20 10C15 10.5 12.5 13 12 18C11.5 13 9 10.5 4 10C9 9.5 11.5 7 12 2Z"
        fill={color}
        fillOpacity="0.85"
      />
    </svg>
  )
}

export function DelicateLeafSprig({ className = '', color = '#A9B89A', size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Stem */}
      <path
        d="M6 30C10 24 16 16 26 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M14 20C12 16 14 13 18 13C18 17 16 20 14 20Z"
        fill={color}
        fillOpacity="0.35"
        stroke={color}
        strokeWidth="1"
      />
      {/* Leaf 2 */}
      <path
        d="M19 16C22 13 25 14 26 18C23 18 20 18 19 16Z"
        fill={color}
        fillOpacity="0.35"
        stroke={color}
        strokeWidth="1"
      />
      {/* Tip Leaf */}
      <path
        d="M26 8C27 4 30 5 31 8C29 10 27 10 26 8Z"
        fill={color}
        fillOpacity="0.4"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  )
}
