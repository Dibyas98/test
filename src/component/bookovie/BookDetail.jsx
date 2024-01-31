import React, { useContext, useEffect, useRef } from 'react';
import './bookdetail.css';
import { Data } from '../store/Store';

export default function BookDetail() {
    const { movie, setuser, setDia,user,loc } = useContext(Data);
    const nameRef = useRef();
    const mobRef = useRef();
    const emaiRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userNew = {
            name: nameRef.current.value,
            email: emaiRef.current.value,
            mobile: mobRef.current.value
        };
        setDia(false);
        setuser((pre)=>[...pre,userNew])

        
        loc(userNew)
    };

    return (
        <div className='bookdetail'>
            <div className='dialog'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: 'center' }}>{movie.name}</h1>
                    <input className='inp' type="text" placeholder='Enter name' ref={nameRef} />
                    <input className='inp' type="email" placeholder='Enter Email' ref={emaiRef} />
                    <input className='inp' type="number" placeholder='Enter mobile' ref={mobRef} />
                    <input type="submit" className='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
}
