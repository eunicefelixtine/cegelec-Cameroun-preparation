import { useState } from 'react'
import Illustration from './Illustration.jsx'

/** Photo avec chargement progressif et illustration de secours en cas d'échec. */
export default function SmartImage({ src, alt = '', scene = 'pylon', className = '' }) {
  const [state, setState] = useState('loading')
  return (
    <div className={`smart-img ${className}`}>
      {state !== 'loaded' && <Illustration scene={scene} />}
      {state !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          style={{ opacity: state === 'loaded' ? 1 : 0 }}
        />
      )}
    </div>
  )
}
