'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Plum, the Heapvue chat mascot (character config exported from the Things studio).
export const PLUM = {
  name: 'Plum',
  seed: 30,
  shape: 'gumdrop',
  color: '#7FA7E8',
  accent: '#2678fd',
  eyes: 'oval',
  eyeSize: 1.15,
  mouth: 'none',
  cheeks: 'none',
  hat: 'beanie',
  hatColor: '#FF9F1C',
  glasses: 'sunglasses',
  glassesColor: '#F7F3EA',
  id: 'plum',
};

// The 3D engine (three.js, about 700 KB) is its own chunk, fetched only once an avatar is rendered.
const ThingsAvatar = dynamic(() => import('@rothenhall/things/react').then((m) => m.ThingsAvatar), { ssr: false });

// ThingsAvatar passes `distance: undefined` straight to the engine, which overwrites the engine's own
// default (7.4) and leaves the camera nowhere, so the scene renders blank. Always pass a number.
const DEFAULT_DISTANCE = 7.4;

/**
 * A live Plum in a box. `fallback` shows until the 3D scene is ready, and stays if WebGL is
 * unavailable (ThingsAvatar then leaves its box empty and never calls onReady).
 * Decorative only, so it is hidden from assistive technology.
 */
export default function PlumAvatar({ enabled, size, state = 'idle', distance = DEFAULT_DISTANCE, onReady, fallback = null, className = '' }) {
  const [ready, setReady] = useState(false);

  return (
    <span className={`fc-plum ${className}`.trim()} style={{ width: size, height: size }} aria-hidden="true">
      {!ready && fallback}
      {enabled && (
        <ThingsAvatar
          config={PLUM}
          state={state}
          quality="medium"
          interactive={false}
          distance={distance}
          onReady={(avatar) => {
            setReady(true);
            onReady?.(avatar);
          }}
          className="fc-plum-canvas"
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </span>
  );
}
