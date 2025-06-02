import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./AppLayout.css";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <Header />
      <div className="layout-body">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
