import '@/components/careers/Careers.css';
import CareersHero from '@/components/careers/CareersHero';
import WhyJoinSection from '@/components/careers/WhyJoinSection';
import CurrentOpeningsSection from '@/components/careers/CurrentOpeningsSection';

export const metadata = {
  title: 'Careers | Heapvue - Join Our Team',
  description: 'Be part of our mission to transform. Join a team passionate about AI, software innovation, and building scalable digital solutions.',
};

export default function CareersPage() {
  return (
    <div className="careers-page-container">
      {/* First Section Hero (1440 x 728 / 1440 x 648) */}
      <CareersHero />

      {/* Why Join Heapvue Section (1200 x 435 Hug) */}
      <WhyJoinSection />

      {/* Current Openings Section (1201 x 1153 Hug) */}
      <CurrentOpeningsSection />
    </div>
  );
}
