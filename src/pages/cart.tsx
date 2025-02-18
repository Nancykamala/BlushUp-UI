import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getCart, getCartTotal, addProductToCart, removeProductFromCart, fetchProducts } from "@/app/lib/api"; // Your cart API functions
import Link from "next/link";

const CartPage = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

  const [cart, setCart] = useState<Product[]>([]); 
  const [totalPrice, setTotalPrice] = useState<number>(0); 
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(false); 

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const cartData = await getCart(); 
        console.log("Cart Data:", cartData);
        setCart(cartData as Product[]); 

        const totalData = await getCartTotal(); 
        setTotalPrice((totalData as { total: number }).total); 

        const productData = await fetchProducts(); 
        setProducts(productData as Product[]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add product to the cart
  const handleAddProduct = async (product: Product) => {
    try {
      const updatedCart = await addProductToCart(product); // Add product to the backend cart
      setCart(updatedCart as Product[]); // Directly set the cart data (cast to Product[])

      const totalData = await getCartTotal(); // Fetch updated total
      setTotalPrice((totalData as { total: number }).total); // Directly use total
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Remove product from the cart
  const handleRemoveProduct = async (productId: number) => {
    try {
      const updatedCart = await removeProductFromCart(productId); // Remove product from backend cart
      setCart(updatedCart as Product[]); // Directly set the cart data (cast to Product[])

      const totalData = await getCartTotal(); // Fetch updated total
      setTotalPrice((totalData as { total: number }).total); // Directly use total
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box>
          {/* Display Cart Items */}
          <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
            Your Cart:
          </Typography>

          {cart.length === 0 ? (
            <Typography>No items in the cart</Typography>
          ) : (
            cart.map((product) => (
              <Card key={product.id} sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="h6">${product.price.toFixed(2)}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveProduct(product.id)}
                    sx={{ marginTop: 1 }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))
          )}

          {/* Total and Checkout Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
            <Link href="/checkout" passHref>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
