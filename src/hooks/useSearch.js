// src/hooks/useSearch.js

import { useState, useMemo } from 'react';

export const useSearch = (items, searchableFields = []) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const filteredAndSortedItems = useMemo(() => {
    let result = [...items];

    // Filter
    if (searchTerm) {
      result = result.filter(item =>
        searchableFields.some(field => {
          const value = item[field];
          if (value === null || value === undefined) return false;
          return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Sort
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // Handle null/undefined
        if (aValue === null || aValue === undefined) return 1;
        if (bValue === null || bValue === undefined) return -1;

        // Compare
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [items, searchTerm, sortConfig, searchableFields]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    sortConfig,
    handleSort,
    filteredAndSortedItems,
    clearSearch,
  };
};