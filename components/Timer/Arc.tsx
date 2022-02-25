import { f_svg_ellipse_arc } from 'utils';

const Arc = ({ center, radius, delta, mu, color, ticking }) => {
  const { sX, sY, eX, eY, fA, fS } = f_svg_ellipse_arc(
    [center, center],
    [radius, radius],
    [0, delta],
    mu
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={ticking ? 'gray' : color}
          strokeWidth="5px"
        />
        {ticking && (
          <path
            d={`M ${sX} ${sY} A ${radius} ${radius} ${
              (mu / (2 * Math.PI)) * 360
            } ${fA} ${fS} ${eX} ${eY}`}
            stroke={color}
            strokeWidth="5px"
            fill="none"
          />
        )}
      </g>
    </svg>
  );
};

export { Arc };
