import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home.module.css'
import Price from './Price';

const CarItem = ({ car }) => {
  const [count, setCount] = useState(0);
  return (
    <div key={car.id} className={styles.item}>
      <div className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }} />
      <p>{car.id}</p>
      <div className={styles.info}>
        <h2>{car.car}</h2>
        <button className='btn' onClick={() => setCount(prev => prev + 1)}>Add to Basket</button>
        <Price price={car.price} />
        <Link className='btn' to={`car/${car.id}`}>Read more</Link>
      </div>
    </div>
  );
}

export default CarItem;
