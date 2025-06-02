import React from 'react';
import './Dashboard.css'; // Import the CSS for the Dashboard

const Dashboard: React.FC = () => {
  // Define common chart properties for reusability
  const chartHeight = 250;
  const chartWidth = 400; // This will be adjusted by CSS to be responsive
  const padding = 30; // Padding inside the SVG for axes and labels

  // Y-axis values and labels
  const yAxisValues = Array.from({ length: 11 }, (_, i) => (i * 0.1).toFixed(1)).reverse(); // 1.0 down to 0.0
  const yAxisTickInterval = (chartHeight - 2 * padding) / (yAxisValues.length - 1);

  // X-axis months
  const xAxisMonths = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const xAxisTickInterval = (chartWidth - 2 * padding) / (xAxisMonths.length - 1);

  const renderChartSVG = (title: string) => (
    <div className="chart-card">
      <h3 className="chart-title">{title}</h3>
      <div className="chart-placeholder">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="xMidYMid meet">
          {/* Y-axis line */}
          <line x1={padding} y1={padding} x2={padding} y2={chartHeight - padding} className="axis-line" />
          {/* X-axis line */}
          <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} className="axis-line" />

          {/* Y-axis grid lines and labels */}
          {yAxisValues.map((value, index) => {
            const y = padding + index * yAxisTickInterval;
            return (
              <React.Fragment key={`y-axis-${index}`}>
                <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} className="grid-line" />
                <text x={padding - 5} y={y + 4} textAnchor="end" className="axis-label y-label">
                  {value}
                </text>
              </React.Fragment>
            );
          })}
          <text x={padding - 20} y={chartHeight / 2} textAnchor="middle" transform={`rotate(-90 ${padding - 20}, ${chartHeight / 2})`} className="axis-label axis-title">Value</text>


          {/* X-axis grid lines and labels */}
          {xAxisMonths.map((month, index) => {
            const x = padding + index * xAxisTickInterval;
            return (
              <React.Fragment key={`x-axis-${index}`}>
                <line x1={x} y1={padding} x2={x} y2={chartHeight - padding} className="grid-line" />
                <text x={x} y={chartHeight - padding + 15} textAnchor="middle" className="axis-label x-label">
                  {month}
                </text>
              </React.Fragment>
            );
          })}
          <text x={chartWidth / 2} y={chartHeight - padding + 35} textAnchor="middle" className="axis-label axis-title">Month</text>

          {/* Placeholder for actual data lines if needed later */}
          {/* <polyline points="..." fill="none" stroke="blue" strokeWidth="2" /> */}
        </svg>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Main Header/Navigation for the Dashboard */}
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <a href="#masters" className="nav-link">Masters</a>
          <a href="#transaction" className="nav-link">Transaction</a>
          <a href="#reports" className="nav-link">Reports</a>
        </nav>
        <h1 className="dashboard-title">Project Mgmt. Overview</h1>
      </header>

      {/* Statistics Cards Section */}
      <section className="stats-grid">
        {/* Individual Statistic Card */}
        <div className="stat-card">
          <h3 className="stat-title">Total Projects</h3>
          <p className="stat-value">6</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-title">WIP Projects</h3>
          <p className="stat-value">6</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-title">Closed Projects</h3>
          <p className="stat-value">0</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-title">Total SOW Amount</h3>
          <p className="stat-value">27.16 Lakh</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-title">Outstanding SOW Amt</h3>
          <p className="stat-value">10.34 Lakh</p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts-grid">
        {renderChartSVG("Monthly Projects [By Count]")}
        {renderChartSVG("Monthly Projects [By Amount]")}
      </section>
    </div>
  );
};

export default Dashboard;
