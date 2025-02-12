"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/app/lib/api";
import ProductCard from "./ProductCard";
import { Box, Container } from "@mui/material";

const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data as any[]));
  }, []);

  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={3}
        justifyContent="center"
      >
        {products.map((product: any) => (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductGrid;
