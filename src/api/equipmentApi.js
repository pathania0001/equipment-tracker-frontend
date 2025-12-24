import api from './axios';

class EquipmentAPI {
  async getAllEquipment() {
    const { data } = await api.get('/equipment');
    return data.data; 
  }

  async createEquipment(equipmentData) {
    const { data } = await api.post('/equipment', equipmentData);
    return data.data;
  }

  async updateEquipment(id, equipmentData) {
    const { data } = await api.put(`/equipment/${id}`, equipmentData);
    return data.data;
  }

  async deleteEquipment(id) {
    const { data } = await api.delete(`/equipment/${id}`);
    return data.data;
  }
}

export default new EquipmentAPI();
