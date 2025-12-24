// src/components/equipment/StatusBadge.jsx

import React from 'react';
import { STATUS_COLORS } from '../../constants/equipmentConstants';

const StatusBadge = ({ status }) => {
  const colors = STATUS_COLORS[status] || STATUS_COLORS['Inactive'];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;