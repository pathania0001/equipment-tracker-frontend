// src/constants/equipmentConstants.js

export const EQUIPMENT_TYPES = [
  'Machine',
  'Vessel',
  'Tank',
  'Mixer'
];

export const EQUIPMENT_STATUSES = [
  'Active',
  'Inactive',
  'Under Maintenance'
];

export const STATUS_COLORS = {
  'Active': {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200'
  },
  'Inactive': {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-200'
  },
  'Under Maintenance': {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-200'
  }
};

export const TABLE_COLUMNS = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'lastCleaned', label: 'Last Cleaned', sortable: true },
  { key: 'actions', label: 'Actions', sortable: false }
];

export const API_BASE_URL = 'https://equipment-tracker-backend-2.onrender.com/api';