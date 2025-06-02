// Example App.tsx or Layout.tsx
import React, { useState } from 'react';
import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 
import Dashboard from './pages/Dashboard'; 

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main style={{ marginLeft: '250px', flexGrow: 1, paddingTop: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;