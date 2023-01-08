import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users',
});

const service = {
  findUsers: async (users) => {
    try {
      const response = await api.get(`/${users}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getUserRepo: async (users) => {
    try {
      const response = await api.get(`/${users}/repos`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;
