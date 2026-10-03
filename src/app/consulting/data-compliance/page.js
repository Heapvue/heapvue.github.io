import '@/components/consulting/Consulting.css';
import HeroSection from '@/components/consulting/data-compliance/HeroSection';
import AboutSection from '@/components/consulting/data-compliance/AboutSection';
import ServicesGridSection from '@/components/consulting/data-compliance/ServicesGridSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EngagementsSection from '@/components/consulting/data-compliance/EngagementsSection';
import ApproachSection from '@/components/consulting/data-compliance/ApproachSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Data & Compliance (DPDP, GDPR, HIPAA) | Heapvue - Data Privacy Consulting',
  description: 'Heapvue helps organisations design and implement technology solutions that support data privacy, strengthen security, and align with DPDP, GDPR, and HIPAA regulations.',
};

const complianceFaqs = [
  {
    id: 1,
    question: 'How does Heapvue assist with DPDP Act readiness and technical implementation?',
    answer: 'We assess personal data processing workflows, implement data principal consent controls, configure data retention/deletion pipelines, and establish privacy-by-design architecture aligned with the DPDP Act.',
  },
  {
    id: 2,
    question: 'What technical controls are required for HIPAA compliance in healthcare software?',
    answer: 'HIPAA compliance requires end-to-end data encryption at rest and in transit, strict role-based access control (RBAC), multi-factor authentication (MFA), immutable audit logging, and isolated infrastructure VPCs.',
  },
  {
    id: 3,
    question: 'How do you incorporate privacy-by-design into existing system architectures?',
    answer: 'Privacy-by-design ensures data minimization, field-level encryption, role-based data anonymization, and automatic audit trails are embedded directly into database schemas and API microservices.',
  },
  {
    id: 4,
    question: 'Do you work alongside legal and compliance officers during audits?',
    answer: 'Yes, we collaborate closely with internal IT teams, legal advisors, and compliance officers to translate regulatory rules into technical safeguards and audit evidence documentation.',
  },
];

export default function DataCompliancePage() {
  return (
    <div className="consulting-page-container">
      <HeroSection />
      <AboutSection />
      <ServicesGridSection />
      <MapStackSection />
      <EngagementsSection />
      <ApproachSection />
      <FaqSection customFaqs={complianceFaqs} />
    </div>
  );
}
