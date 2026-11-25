// Illustrations SVG de secours (utilisées si une photo ne se charge pas, ex. hors-ligne).
export default function Illustration({ scene = 'pylon' }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="illus" role="img" aria-label="Illustration">
      <defs>
        <linearGradient id={`sky-${scene}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7a0c12" />
          <stop offset="0.55" stopColor="#d71920" />
          <stop offset="1" stopColor="#ff7a59" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#sky-${scene})`} />
      <circle cx="320" cy="62" r="34" fill="#fff" opacity="0.18" />
      <circle cx="320" cy="62" r="18" fill="#fff" opacity="0.3" />
      {scene === 'pylon' && (
        <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M120 240 160 70 200 240M138 170h44M146 130h28M130 205h60M160 70 160 40M130 52h60" />
          <path d="M280 240 310 110 340 240M292 190h36M300 150h20M285 120h50" opacity="0.8" />
          <path d="M130 52Q220 80 310 110M190 52Q250 70 335 120M0 90Q60 100 130 52" opacity="0.6" strokeWidth="1.6" />
        </g>
      )}
      {scene === 'rig' && (
        <g>
          <rect y="200" width="400" height="60" fill="#3b0508" opacity="0.7" />
          <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M150 200 200 50 250 200M165 160h70M178 120h44M190 80h20M160 180l80-60M240 180l-80-60" />
            <path d="M120 200h160M270 200v-30h50v30" strokeWidth="4" />
          </g>
          <circle cx="295" cy="150" r="6" fill="#ffd166" />
        </g>
      )}
      {scene === 'panel' && (
        <g>
          <rect x="70" y="50" width="260" height="170" rx="14" fill="#2a0508" opacity="0.85" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle cx={130 + i * 70} cy="110" r="26" fill="none" stroke="#fff" strokeWidth="4" opacity="0.9" />
              <path d={`M${130 + i * 70} 110 l${i % 2 ? 14 : -12} -${i ? 12 : 16}`} stroke="#ffd166" strokeWidth="4" strokeLinecap="round" />
            </g>
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={95 + i * 46} y="170" width="30" height="16" rx="4" fill={i % 2 ? '#fff' : '#ff5a5f'} opacity="0.85" />
          ))}
        </g>
      )}
      {scene === 'team' && (
        <g>
          {[110, 200, 290].map((x, i) => (
            <g key={x}>
              <path d={`M${x - 22} 78a22 22 0 0 1 44 0z`} fill={i === 1 ? '#fff' : '#ffd166'} />
              <rect x={x - 26} y="78" width="52" height="7" rx="3" fill={i === 1 ? '#fff' : '#ffd166'} />
              <circle cx={x} cy="106" r="20" fill="#ffe0d1" />
              <path d={`M${x - 36} 230q0-90 36-90t36 90z`} fill="#fff" opacity="0.92" />
            </g>
          ))}
        </g>
      )}
      <g fill="#fff" opacity="0.9">
        <path d="M205 214 187 238h9l-2 14 16-22h-9z" transform="translate(150 -60) scale(0.0)" />
      </g>
    </svg>
  )
}
