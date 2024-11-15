// src/components/ProductCard.tsx

import Card from '@/components/Card';
import Button from '@/components/Button';

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl?: string; // Made optional
  price: number;
  onAddToCart: () => void;
};

const ProductCard = ({
  title,
  description,
  imageUrl,
  price,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className='flex flex-1 container'>
      <Card />
    </div>
  );
};

export default ProductCard;
