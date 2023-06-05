'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function RootLayout({ children }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
