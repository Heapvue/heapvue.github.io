'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function AppointmentSection() {
  return (
    <section className="appointment-section-wrapper">
      <div className="appointment-container">
        {/* Top Header Block (801.54w x 209h Hug) */}
        <div className="appointment-header">
          {/* Badge Capsule */}
          <div className="appointment-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Book an Appointment</span>
          </div>

          {/* Main Title (732w x 100h Hug) */}
          <h2 className="appointment-main-title">
            Smarter <span className="appointment-highlight">Outreach</span>.
            <br />
            Better <span className="appointment-highlight">Conversations</span>. Faster <span className="appointment-highlight">Growth</span>.
          </h2>

          {/* Subheading Subtext */}
          <p className="appointment-subtext">
            Heapvue automates lead discovery, personalized outreach, follow-ups, and meeting scheduling - helping your team focus on closing deals instead of manual prospecting.
          </p>
        </div>

        {/* Second Main Content Box (1200w x 636.83h) */}
        <div className="appointment-main-box">
          {/* Left Box (505w x 636.83h) */}
          <div className="appointment-left-box">
            <div className="appointment-left-top">
              {/* Tag Pill (188w x 29h) */}
              <div className="pipeline-tag">
                YOUR PIPELINE, AUTOMATED
              </div>

              {/* Box Title (387w x 100h Hug) */}
              <h3 className="appointment-box-title">
                Book an Appointment
                <br />
                With Our Team
              </h3>

              {/* Book a Demo Button */}
              <Link href="/contact" className="btn appointment-demo-btn">
                Book a demo <FiArrowRight size={16} />
              </Link>
            </div>

            {/* Bottom Subtext */}
            <p className="appointment-box-subtext">
              Using AI-driven automation, intelligent lead targeting, and personalized engagement workflows, Heapvue helps businesses increase response rates, generate qualified meetings, and accelerate revenue growth.
            </p>
          </div>

          {/* Right Box (694w x 636.83h) - Calendar Image */}
          <div className="appointment-right-box">
            <Image
              src="/images/calender.png"
              alt="Interactive calendar scheduling view"
              width={694}
              height={637}
              className="calendar-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
