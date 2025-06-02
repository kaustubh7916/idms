import React from 'react';
import './Header.css'; // Import the CSS for the Header
// Corrected import path: Go up one directory (..) then into 'assets'
import idmsLogo from '../assets/Screenshot 2025-06-03 013950.png'; // Import your image from src/assets

interface HeaderProps {
  // You might add props here later, e.g., for user name, logout handler
  userName?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName = "Functional Support", onLogout }) => {
  return (
    <header className="app-header">
      {/* Logo/Brand Section - Now with your imported image */}
      <div className="header-brand">
        <img
          src={idmsLogo} // Using the imported image
          alt="IDMS Infotech Logo"
          className="brand-logo"
          // Removed onError as local imports typically don't need this fallback
        />
      </div>

      {/* Welcome Message */}
      <div className="header-welcome">
        <span>Welcome {userName}</span>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
