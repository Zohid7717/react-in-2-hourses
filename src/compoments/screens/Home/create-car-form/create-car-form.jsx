import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './create-car-form.module.css'


const clearData = {
  price: '',
  car: '',
  image: '',
}

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = data => {
     setCars(prev => [
      {
        id: prev.length + 1,
        ...data,
      },
      ...prev,
    ])
    setData(clearData)
  }

  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    mode: 'onChange'
  })

  // const createCar = data => {
  //   setCars(prev => [{ id: prev.length + 1, ...data }, ...prev])
  //   reset()
  // }

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)} >
      <input
        type="text"
        placeholder='Name auto'
        onChange={e =>
          setData(prev => ({
            ...prev,
            car: e.target.value,
          }))
        }
        value={data.car}
      />

      <input type="text"
        placeholder='Price'
        onChange={e =>
          setData(prev => ({
            ...prev,
            price: e.target.value,
          }))
        }
        value={data.price}
      />
      <input type="text"
        placeholder='Image'
        onChange={e =>
          setData(prev => ({
            ...prev,
            image: e.target.value,
          }))
        }
        value={data.image}
      />
      <button className='btn'>Create</button>
    </form>
  );
}

export default CreateCarForm;
