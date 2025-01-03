export default function ArrowStatus({ active }) {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${active ? '180deg' : '0'})`,
        // transition: 'transform 0.3s ease-in',
      }}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#635FC7"
        strokeWidth="2"
      />
    </svg>
  )
}
