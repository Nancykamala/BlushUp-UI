import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { useCart } from "../components/cart-context"; 

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}


const getProductImage = (id: number) => {
  try {
    return `/images/product-${id}.png`;
  } catch (error) {
    return `/images/default.png`;
  }
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart(); 

  const imageUrl = getProductImage(product.id);

  
  const handleAddToCart = () => {
    addToCart(product); 
    console.log(`${product.name} added to cart`); 
  };

  return (
    <Card sx={{ maxWidth: 300, m: 2, p: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={product.name} />
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.name}
        </Typography>
        <Typography color="text.secondary">${product.price.toFixed(2)}</Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToCart} 
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
