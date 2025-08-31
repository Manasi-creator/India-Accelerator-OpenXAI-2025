// app/layout.tsx

import React from 'react';
import './globals.css'; // Assuming you have a global CSS file

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}