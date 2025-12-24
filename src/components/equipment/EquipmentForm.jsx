// src/components/equipment/EquipmentForm.jsx

import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { validateEquipmentForm } from '../../utils/validation';
import { formatDateForInput } from '../../utils/formatters';
import { EQUIPMENT_TYPES, EQUIPMENT_STATUSES } from '../../constants/equipmentConstants';

const EquipmentForm = ({ equipment, onSubmit, onCancel, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: EQUIPMENT_TYPES[0],
    status: EQUIPMENT_STATUSES[0],
    lastCleaned: new Date().toISOString().split('T')[0],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (equipment) {
      setFormData({
        name: equipment.name || '',
        type: equipment.type || EQUIPMENT_TYPES[0],
        status: equipment.status || EQUIPMENT_STATUSES[0],
        lastCleaned: formatDateForInput(equipment.lastCleaned) || new Date().toISOString().split('T')[0],
      });
    }
  }, [equipment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = () => {
    const validation = validateEquipmentForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div>
      <Input
        label="Equipment Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter equipment name"
        error={errors.name}
        required
        disabled={isSubmitting}
      />

      <Select
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        options={EQUIPMENT_TYPES}
        error={errors.type}
        required
        disabled={isSubmitting}
      />

      <Select
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        options={EQUIPMENT_STATUSES}
        error={errors.status}
        required
        disabled={isSubmitting}
      />

      <Input
        label="Last Cleaned Date"
        name="lastCleaned"
        type="date"
        value={formData.lastCleaned}
        onChange={handleChange}
        error={errors.lastCleaned}
        required
        disabled={isSubmitting}
      />

      <div className="flex gap-3 mt-6">
        <Button
          onClick={handleSubmit}
          variant="primary"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : equipment ? 'Update Equipment' : 'Add Equipment'}
        </Button>
        <Button
          onClick={onCancel}
          variant="secondary"
          fullWidth
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EquipmentForm;