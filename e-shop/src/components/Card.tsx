// src/components/Card.tsx
import Button from './Button';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  imgeUrl: string;
  price: number;
};

const Card = ({ title, description, imageUrl, price }: cardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white'>
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className='w-full h-48 object-cover'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
        <p className='text-gray-900 mt-2 font-semibold'>${price}</p>
      </div>
      <div className='flex flex-1 container justify-around'>
        <Button text='Add to cart' style={{ margin: '5px' }} />
        <Button text='Remove' />
      </div>
    </div>
  );
};

export default Card;
