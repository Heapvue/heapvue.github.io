'use client';

import React from 'react';

const clientLogos = [
  { name: 'Bonnacci', src: '/images/clients/bonnacci.webp' },
  { name: 'Forsight', src: '/images/clients/forsight.png' },
  { name: 'Zentra Learn', src: '/images/clients/zentra-learn.webp' },
  { name: 'SolveMyHealth', src: '/images/clients/solvemyhealth.webp' },
  { name: 'Conzaura', src: '/images/clients/conzaura.png' },
  { name: 'NTRL', src: '/images/clients/ntrl_dark.png' },
  { name: 'Saheli', src: '/images/clients/saheli.png' },
  { name: 'Ishika', src: '/images/clients/ishika.png' },
  { name: 'Pankajakasthuri', src: '/images/clients/pankajakasthuri.png' },
  { name: 'Cochin Urology', src: '/images/clients/cochin-urology.svg' },
  { name: 'Blocks & Prints', src: '/images/clients/blocksandprints.png' },
];

export default function ClientsSection() {
  return (
    <section className="clients-section-wrapper">
      <div className="clients-container">
        {/* Left Label */}
        <div className="clients-label-block">
          <p className="clients-label-text">
            Trusted by<br />
            Users Worldwide
          </p>
        </div>

        {/* Right Logo Marquee Track */}
        <div className="clients-marquee-container">
          <div className="clients-marquee-track">
            {/* Primary set of client logos */}
            {clientLogos.map((client, index) => (
              <div key={`client-1-${index}`} className="client-logo-item">
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo-img"
                />
              </div>
            ))}
            {/* Duplicated set for seamless continuous marquee loop */}
            {clientLogos.map((client, index) => (
              <div key={`client-2-${index}`} className="client-logo-item" aria-hidden="true">
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
