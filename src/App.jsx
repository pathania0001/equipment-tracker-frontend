// src/App.jsx

import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import Header from './components/layout/Header';
import Container from './components/layout/Container';
import Button from './components/common/Button';
import SearchBar from './components/common/SearchBar';
import Modal from './components/common/Modal';
import EquipmentTable from './components/equipment/EquipmentTable';
import EquipmentForm from './components/equipment/EquipmentForm';
import { useEquipment } from './hooks/useEquipment';
import { useSearch } from './hooks/useSearch';


function App() {
  const {
    equipment,
    loading,
    error,
    addEquipment,
    updateEquipment,
    deleteEquipment,
  } = useEquipment();

  const {
    searchTerm,
    setSearchTerm,
    sortConfig,
    handleSort,
    filteredAndSortedItems,
    clearSearch,
  } = useSearch(equipment, ['name', 'type', 'status']);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => {
    setEditingEquipment(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEquipment(null);
  };

  const handleEdit = (equipment) => {
    setEditingEquipment(equipment);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this equipment?')) {
      const result = await deleteEquipment(id);
      if (result.success) {
        // Success feedback could be added here
      } else {
        alert(`Error: ${result.error}`);
      }
    }
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    let result;

    if (editingEquipment) {
      result = await updateEquipment(editingEquipment._id, formData);
    } else {
      result = await addEquipment(formData);
    }

    setIsSubmitting(false);

    if (result.success) {
      handleCloseModal();
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Equipment Tracker"
        subtitle="Manage and monitor your equipment inventory"
        action={
          <Button
            onClick={handleOpenModal}
            variant="primary"
            icon={<Plus size={20} />}
          >
            Add Equipment
          </Button>
        }
      />

      <Container>
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-red-800 font-medium">Error</h3>
              <p className="text-red-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        <div className="mb-6">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={clearSearch}
            placeholder="Search by name, type, or status..."
          />
        </div>

        <EquipmentTable
          equipment={filteredAndSortedItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
          sortConfig={sortConfig}
          onSort={handleSort}
          loading={loading}
        />

        {!loading && equipment.length > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedItems.length} of {equipment.length} equipment
          </div>
        )}
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingEquipment ? 'Edit Equipment' : 'Add New Equipment'}
      >
        <EquipmentForm
          equipment={editingEquipment}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </div>
  );
}

export default App;