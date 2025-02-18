import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const API_URL = "http://localhost:5276";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const getCart = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    const data = response.data as { products: Product[] };
    return data.products || [];  
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};


export const getCartTotal = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart/total`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching total price:", error);
    throw error;
  }
};


export const addProductToCart = async (product: Product) => {
  try {
    const response = await axios.post(`${API_URL}/cart/add`, product);
    return response.data;  
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};


export const removeProductFromCart = async (productId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/remove/${productId}`);
    return response.data;  
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};