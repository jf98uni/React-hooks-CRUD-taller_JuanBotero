import React from 'react';
import { useForm } from 'react-hook-form';


const  EditUserForm = (props) => {

    //console.log(props.currentUser)

    
    const {register, handleSubmit, formState: { errors },setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        
        props.updateUser(props.currentUser.id,data)
        
        data.id = props.currentUser.id

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

        <button type="submit">Edit</button>
    </form>
);
}

export default EditUserForm;