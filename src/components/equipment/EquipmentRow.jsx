// src/components/equipment/EquipmentRow.jsx

import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { formatDate } from '../../utils/formatters';

const EquipmentRow = ({ equipment, onEdit, onDelete }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{equipment.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-700">{equipment.type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={equipment.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-700">{formatDate(equipment.lastCleaned)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEdit(equipment)}
          className="text-blue-600 hover:text-blue-900 mr-4 inline-flex items-center transition-colors"
          title="Edit"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => onDelete(equipment._id)}
          className="text-red-600 hover:text-red-900 inline-flex items-center transition-colors"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
};

export default EquipmentRow;