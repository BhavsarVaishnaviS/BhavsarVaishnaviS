import React, { useContext, useMemo, useState } from 'react';
import './MobileDashboard.css';
import { StudentsContext } from '../../context/StudentsContext';
import RacePieChart from '../RacePieChart/RacePieChart';
import MARKS_CRITERIA from '../../config/marksCriteria';
import { Button } from 'antd';
import { TrophyOutlined, BarChartOutlined, MenuOutlined } from '@ant-design/icons';
import LoadingSpinner from '../Loader/LoadingSpinner';

const raceColors = {
  '100m SRPF': '#FFD700',
  '100m Police': '#FFA500',
  '100m Female': '#FF6B9D',
  '800m Female': '#4169E1',
  '1600m Male': '#8A2BE2',
  '3km Female': '#32CD32',
  '5km SRPF': '#DC143C',
  '100m Male': '#00CED1',
  '800m Driver_Police': '#FF4500',
  '1600m Driver_Police': '#9370DB',
  '3km Male': '#228B22',
  '1600m Police': '#228B22'
};

const getRaceCategories = () => {
  const categories = [];
  Object.entries(MARKS_CRITERIA).forEach(([race, genders]) => {
    Object.entries(genders).forEach(([gender, categoriesOrMarks]) => {
      if (Array.isArray(categoriesOrMarks)) {
        categories.push({ label: `${race} ${gender}`, race, gender, studentRole: null, color: raceColors[`${race} ${gender}`] || '#6C757D' });
      } else {
        Object.keys(categoriesOrMarks).forEach((studentRole) => {
          categories.push({ label: `${race} ${studentRole}`, race, gender, studentRole, color: raceColors[`${race} ${studentRole}`] || '#6C757D' });
        });
      }
    });
  });
  return categories;
};

const MobileDashboard = () => {
  const { students } = useContext(StudentsContext);
  const raceCategories = useMemo(() => getRaceCategories(), []);
  const [activeRace, setActiveRace] = useState(raceCategories[0]);
  const [showCategories, setShowCategories] = useState(false);

  if (!students) return <LoadingSpinner />;

  return (
    <div className="mobile-dashboard">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="header-content">
          <div className="header-icon">
            <BarChartOutlined />
          </div>
          <div className="header-text">
            <h1 className="dashboard-title">Performance Analytics</h1>
            <p className="dashboard-subtitle">
              Analyze student performance across different racing categories.
            </p>
          </div>
        </div>
      </div>

      {/* Current Race Display */}
      <div className="current-race-section">
        <div className="current-race-header">
          <div className="race-info">
            <div className="race-badge" style={{ backgroundColor: activeRace.color }}>
              <TrophyOutlined />
            </div>
            <div className="race-details">
              <h2 className="race-name">
                {activeRace.race} {activeRace.studentRole || ''} {activeRace.gender}
              </h2>
              <span className="race-subtitle">Performance Overview</span>
            </div>
          </div>
          <Button 
            className="category-toggle-btn"
            onClick={() => setShowCategories(!showCategories)}
            icon={<MenuOutlined />}
          >
            Categories
          </Button>
        </div>
      </div>

      {/* Race Categories (Collapsible) */}
      {showCategories && (
        <div className="race-categories-mobile">
          <div className="categories-header">
            <h3>Select Race Category</h3>
            <Button 
              type="text" 
              onClick={() => setShowCategories(false)}
              className="close-btn"
            >
              ×
            </Button>
          </div>
          <div className="race-buttons-grid">
            {raceCategories.map((item) => (
              <Button
                key={item.label}
                onClick={() => {
                  setActiveRace(item);
                  setShowCategories(false);
                }}
                className={`mobile-race-button ${activeRace.label === item.label ? 'active' : ''}`}
                style={{
                  backgroundColor: activeRace.label === item.label ? item.color : 'rgba(255, 255, 255, 0.9)',
                  borderColor: item.color,
                  color: activeRace.label === item.label ? '#fff' : '#333',
                }}
              >
                <span className="race-color-indicator" style={{ backgroundColor: item.color }}></span>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Chart Section */}
      <div className="mobile-chart-section">
        <div className="chart-wrapper">
          <RacePieChart
            race={activeRace.race}
            gender={activeRace.gender}
            studentRole={activeRace.studentRole}
            students={students}
            color={activeRace.color}
          />
        </div>
      </div>

      {/* Mobile Bottom Stats */}
      <div className="mobile-stats">
        <div className="stat-item">
          <span className="stat-label">Active Category</span>
          <span className="stat-value" style={{ color: activeRace.color }}>
            {activeRace.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;