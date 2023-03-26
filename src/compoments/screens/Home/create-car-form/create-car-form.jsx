import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './create-car-form.module.css'

const CreateCarForm = ({ setCars }) => {

  const createCar = data => {
     setCars(prev => [
      {
        id: prev.length + 1,
        ...data,
      },
      ...prev,
    ])
    reset()
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
        {...register('car', { required: 'Name is required'})}
        placeholder='Name auto'
      />
      {errors?.car?.message && <p style={{
        color:'red',
      }}>Name is required</p>}
      <input
        {...register('price', { required: true })}
        placeholder='Price'
      />
      <input type="text"
        {...register('image', { required: true })}
        placeholder='Image'
      />
      <button className='btn'>Create</button>
    </form>
  );
}

export default CreateCarForm;
