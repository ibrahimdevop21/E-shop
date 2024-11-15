// src/components/ProductCard.tsx
// src/components/ProductCard.tsx
import Card from '@/components/Card';

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
    <div className='flex justify-center'>
      <Card
        title={title}
        description={description}
        imageUrl={imageUrl || '/images/Javascript-JS-T-shirt-Black-3.jpg'} // Corrected path for the image
        price={price}
      />
    </div>
  );
};

export default ProductCard;
