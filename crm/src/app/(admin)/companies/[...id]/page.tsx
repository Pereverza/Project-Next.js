'use client';
import React, { useEffect } from 'react';
import Header from '../../../components/header';
import { notFound } from 'next/navigation';


type PageProps = {
  params: { id: string[] };
};

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  },[params.id])
  return (
    <>
      <Header>Company({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
