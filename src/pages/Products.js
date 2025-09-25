import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductsSection from '../components/ProductsSection';

const Products = () => {
  const { t } = useTranslation();
  
  return <ProductsSection />;
};

export default Products;