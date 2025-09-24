import axios from 'axios';

const API_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blogs?populate=*'),
  getBySlug: (slug) => api.get(`/blogs?filters[slug][$eq]=${slug}&populate=*`),
  getFeatured: () => api.get('/blogs?filters[featured][$eq]=true&populate=*'),
};

// Case Studies API
export const caseStudiesAPI = {
  getAll: () => api.get('/case-studies?populate=*'),
  getBySlug: (slug) => api.get(`/case-studies?filters[slug][$eq]=${slug}&populate=*`),
  getFeatured: () => api.get('/case-studies?filters[featured][$eq]=true&populate=*'),
};

// Careers API
export const careersAPI = {
  getAll: () => api.get('/careers?populate=*'),
  getBySlug: (slug) => api.get(`/careers?filters[slug][$eq]=${slug}&populate=*`),
  getActive: () => api.get('/careers?filters[status][$eq]=active&populate=*'),
};

export default api;