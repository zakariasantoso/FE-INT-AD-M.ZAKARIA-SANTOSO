import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

// Fungsi untuk mengambil data kategori
const fetchCategories = async () => {
    const token = Cookies.get('token'); // Ambil token dari cookie
    if (!token) {
        Cookies.remove('token');
    }
    try {
        const { data } = await axios.get('http://localhost:8000/api/categories', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data; // Kembalikan data yang diperoleh
    } catch (error) {
        // delete cookie if error
        Cookies.remove('token');
    }
};

const CategoryComponent = () => {
  // Gunakan useQuery dengan format objek (React Query v5)
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'], 
    queryFn: fetchCategories, 
  });

  if (isLoading) return <div>Loading...</div>; // Tampilan saat loading
  if (error) return <div>Error loading categories</div>; // Tampilan jika ada error

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {data.map((category) => (
          <li key={category.id} className="bg-gray-200 p-2 rounded">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryComponent;
