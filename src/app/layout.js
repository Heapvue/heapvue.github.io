import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css';
import '@/components/home/Home.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Heapvue | Premium IT Solutions, Cloud Architecture & AI Integrations',
  description: 'Heapvue builds cutting-edge enterprise software, high-performance cloud architectures, and intelligence-driven custom solutions.',
  keywords: 'IT Consulting, Custom Software, Cloud Infrastructure, AI Development, Enterprise Software, Web Development',
  robots: 'index, follow',
  icons: {
    icon: '/images/minilogo_heapvue.png',
    shortcut: '/images/minilogo_heapvue.png',
    apple: '/images/minilogo_heapvue.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Heapvue',
  url: 'https://heapvue.com',
  logo: 'https://heapvue.com/images/Heapvue_Logo.png',
  description: 'Heapvue builds cutting-edge enterprise software, high-performance cloud architectures, and intelligence-driven custom solutions.',
  foundingDate: '2021',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39/2475-B1, Suite C54, LR Towers, SJRRA 104 S J Road, Palarivattom',
    addressLocality: 'Ernakulam',
    addressRegion: 'Kerala',
    postalCode: '682025',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@heapvue.com',
    telephone: '+919400171674',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.linkedin.com/company/heapvue/',
    'https://x.com/heapvue',
    'https://www.facebook.com/heapvue',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${poppins.className} ${poppins.variable} d-flex flex-column min-vh-100`}>
        <ClientProviders>
          <Navbar />
          <main className="flex-grow-1" style={{ paddingTop: '105px' }}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
