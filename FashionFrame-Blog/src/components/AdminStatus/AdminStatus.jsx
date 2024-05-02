import React from 'react';
import '../../styles/AdminStatus.css'; // Make sure to create and link the CSS file

const AdminStatus = ({ emotion, emoji, daysAgo, additionalText }) => {
  const timeText = daysAgo === '1' ? 'day ago' : 'days ago';

  return (
    <div className="admin-status">
      <div className="status-header">Nathan_Nugget Status</div>
      <div className="status-body">
        Nathan_Nugget feels <strong>{emotion}</strong> {emoji}
      </div>
      <div className="status-footer">
        <div className="status-time">
          <strong>
            Nathan_Nugget {emoji} - {daysAgo} {timeText}
          </strong>
        </div>
        <div className="status-additional">{additionalText}</div>
      </div>
    </div>
  );
};

export default AdminStatus;
