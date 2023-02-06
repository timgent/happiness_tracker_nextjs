'use client';

import Modal from 'react-modal';
import '@/styles/globals.css'

Modal.setAppElement('#root');

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="root">{children}</body>
    </html>
  );
}
