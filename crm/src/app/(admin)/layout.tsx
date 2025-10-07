import Sidebar from '@/app/components/sidebar';
import React from 'react';


export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="ml-60 p-6">{children}</main>
    </>
  );
}
