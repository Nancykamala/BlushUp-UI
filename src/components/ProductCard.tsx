import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import LakmeLipcolor from "../public/images/LakmeLipcolor.png"

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, p: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={"LakmeLipcolor"} alt={product.name} />
      <CardContent>
        <Typography variant="h6" noWrap>{product.name}</Typography>
        <Typography color="text.secondary">${product.price.toFixed(2)}</Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
