// import Button from '@/components/Button';
// import Card from '@/components/Card';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductCard
        title='T-Shirt'
        description='java script T-shirt Size: s, m, L, XL'
        price={35}
      />
    </div>
  );
};

export default Home;
