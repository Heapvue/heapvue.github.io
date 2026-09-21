import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css';
import '@/components/home/Home.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <ClientProviders>
          <header className="fixed-top" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', zIndex: 1050, boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div className="w-100 py-2 text-white text-center fw-medium px-3" style={{ backgroundColor: '#002b80', fontSize: '0.8rem', letterSpacing: '0.03em' }}>
              Power AI Agents with Institutional Intelligence – DeepJudge Is Partnering with Harvey
            </div>
            <Navbar />
          </header>
          <main className="flex-grow-1" style={{ paddingTop: '110px' }}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
