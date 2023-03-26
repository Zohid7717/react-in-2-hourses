import React, { useState, useEffect, useContext, useCallback } from 'react';
import { cars as carsData } from './car.data';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/create-car-form';
import axios from 'axios';
import { CarService } from '../../../serveces/car.service';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }

    fetchData()
  }, []);

  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Cars catalog</h1>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (<button onClick={() => setUser({
        name: "Max"
      })}>
        Login
      </button>)}
      <CreateCarForm  setCars={setCars}/>
      <div>
        {cars.length ? (cars.map(car =>
          <CarItem key={car.id} car={car} />
        )
        ) : (
          <p>There are no Cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
