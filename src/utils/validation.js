// src/utils/validation.js

export const validateEquipmentForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Equipment name is required';
  } else if (formData.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Name must not exceed 50 characters';
  }

  // Type validation
  if (!formData.type) {
    errors.type = 'Equipment type is required';
  }

  // Status validation
  if (!formData.status) {
    errors.status = 'Status is required';
  }

  // Date validation
  if (!formData.lastCleaned) {
    errors.lastCleaned = 'Last cleaned date is required';
  } else {
    const selectedDate = new Date(formData.lastCleaned);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate > today) {
      errors.lastCleaned = 'Last cleaned date cannot be in the future';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};