// src/hooks/useEquipment.js

import { useState, useEffect, useCallback } from 'react';
import equipmentApi from '../api/equipmentApi';

export const useEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEquipment = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await equipmentApi.getAllEquipment();
      setEquipment(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch equipment');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEquipment();
  }, [fetchEquipment]);

  const addEquipment = async (equipmentData) => {
    try {
      setError(null);
      const newEquipment = await equipmentApi.createEquipment(equipmentData);
      setEquipment(prev => [newEquipment, ...prev]);
      return { success: true, data: newEquipment };
    } catch (err) {
      setError(err.message || 'Failed to add equipment');
      return { success: false, error: err.message };
    }
  };

  const updateEquipment = async (id, equipmentData) => {
    try {
      setError(null);
      const updatedEquipment = await equipmentApi.updateEquipment(id, equipmentData);
      setEquipment(prev =>
        prev.map(item => item._id === id ? updatedEquipment : item)
      );
      return { success: true, data: updatedEquipment };
    } catch (err) {
      setError(err.message || 'Failed to update equipment');
      return { success: false, error: err.message };
    }
  };

  const deleteEquipment = async (id) => {
    try {
      setError(null);
      await equipmentApi.deleteEquipment(id);
      setEquipment(prev => prev.filter(item => item._id !== id));
      return { success: true };
    } catch (err) {
      setError(err.message || 'Failed to delete equipment');
      return { success: false, error: err.message };
    }
  };

  return {
    equipment,
    loading,
    error,
    fetchEquipment,
    addEquipment,
    updateEquipment,
    deleteEquipment,
  };
};