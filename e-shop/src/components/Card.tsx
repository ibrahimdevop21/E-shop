// src/components/Card.tsx
import Button from './Button';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

const Card = ({ title, description, imageUrl, price }: CardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4  bg-white'>
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={400}
        className='w-full h-66 object-cover'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
        <p className='text-gray-900 mt-2 font-semibold'>${price}</p>
      </div>
      <div className='flex flex-1 container justify-around'>
        <Button text='Add to Cart' className='bg-blue-500' />
        <Button text='Remove' className='bg-red-500' />
      </div>
    </div>
  );
};

export default Card;
