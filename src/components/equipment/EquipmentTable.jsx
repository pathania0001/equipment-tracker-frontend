// src/components/equipment/EquipmentTable.jsx

import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import EquipmentRow from './EquipmentRow';
import { TABLE_COLUMNS } from '../../constants/equipmentConstants';

const EquipmentTable = ({ 
  equipment, 
  onEdit, 
  onDelete, 
  sortConfig, 
  onSort,
  loading 
}) => {
  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'asc' ? (
      <ChevronUp size={16} className="inline ml-1" />
    ) : (
      <ChevronDown size={16} className="inline ml-1" />
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading equipment...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {TABLE_COLUMNS.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && onSort(column.key)}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? 'cursor-pointer hover:bg-gray-100 select-none' : ''
                } ${column.key === 'actions' ? 'text-right' : ''}`}
              >
                {column.label}
                {column.sortable && getSortIcon(column.key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {equipment.length === 0 ? (
            <tr>
              <td colSpan={TABLE_COLUMNS.length} className="px-6 py-12 text-center">
                <div className="text-gray-500">
                  <p className="text-lg font-medium">No equipment found</p>
                  <p className="text-sm mt-1">Add your first equipment to get started</p>
                </div>
              </td>
            </tr>
          ) : (
            equipment.map((item) => (
              <EquipmentRow
                key={item._id}
                equipment={item}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;