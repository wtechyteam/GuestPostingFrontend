import React, { useState, useEffect } from "react";
import UserProfile3 from "./../common/UserProfile3"; // Adjust the import path as needed
import axios from "axios";

const fetchAllProducts = async () => {
  try {
    const result = await axios.get('http://localhost:3001/api/api/products');
    const languages = result.data.map(product => product.language);
    return languages;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default function UserProfilesContainer() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const loadLanguages = async () => {
      const fetchedLanguages = await fetchAllProducts();
      setLanguages(fetchedLanguages);
    };

    loadLanguages();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {languages.map((language, index) => (
        <UserProfile3
          key={index}
        
          language={language}
          
        />
      ))}
    </div>
  );
}
