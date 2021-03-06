import React from 'react';
import { useForm } from 'react-hook-form';


const AddUserForm = (props) => {

    
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }



    return ( 

        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input 
            type="text" 
            name="name"
            {...register("name",{required: {value: true, message: 'Valor requerido'}})}
            />
        {errors.name && <div>{errors.name.message}</div>}
       
        <label>Username</label>
        <input 
            type="text" 
            name="username" 
            {...register("username",{required: {value: true, message: 'Valor requerido'}})}
            />
        {errors.username && <div>{errors.username.message}</div>}

        <button type="submit">Add new user</button>
    </form>
);
}

export default AddUserForm;