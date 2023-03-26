import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import CarItem from '../Home/car-item/CarItem';
import { CarService } from '../../../serveces/car.service';
import { AuthContext } from '../../providers/AuthProvider';
import { WithAuth } from '../../../HOC/withAuth';

const CarDetail = () => {
  const { id } = useParams()
  const [car, setCar] = useState({})
  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const data = await CarService.getById(id)

      setCar(data)
    }
    
    fetchData()
  }, [id]);

  if (!car?.car) return <p>Loading...</p>

  return (
    <div>
      <Link to='/' className='btn'>Back</Link>
      <CarItem car={car} />
    </div>
  );
}

export default WithAuth(CarDetail);
