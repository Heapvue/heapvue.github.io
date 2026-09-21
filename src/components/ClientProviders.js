'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export default function ClientProviders({ children }) {
  useEffect(() => {
    // Load Bootstrap 5 JS on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#6366f1"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f8fafc',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          },
        }}
      />
    </>
  );
}
