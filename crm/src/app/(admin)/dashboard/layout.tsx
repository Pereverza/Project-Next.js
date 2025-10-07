import React from 'react';
import Sidebar from '../../components/sidebar';

export default function DashboardLayout({
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
