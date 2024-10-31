import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.tsx';
import { Header } from './Header.tsx';

export function TodoApp() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
