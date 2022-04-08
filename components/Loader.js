

export const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <circle fill="rgb(82, 104, 219)" cx={6} cy={50} r={6}>
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 15 ; 0 -15; 0 15"
        repeatCount="indefinite"
        begin={0.1}
      />
    </circle>
    <circle fill="rgb(82, 104, 219)" cx={30} cy={50} r={6}>
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 10 ; 0 -10; 0 10"
        repeatCount="indefinite"
        begin={0.2}
      />
    </circle>
    <circle fill="rgb(82, 104, 219)" cx={54} cy={50} r={6}>
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 5 ; 0 -5; 0 5"
        repeatCount="indefinite"
        begin={0.3}
      />
    </circle>
  </svg>
)

export default Loader
