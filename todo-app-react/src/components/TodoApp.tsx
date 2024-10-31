import React from "react";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";
import { Outlet } from "react-router-dom";

export function TodoApp() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
