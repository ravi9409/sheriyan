import React from 'react'

function Card({ users, handleRemove }) {
    return (
        <>
            {users.map((item, index) => (
                <div key={index} className='w-32 h-full bg-sky-300 rounded-lg flex flex-col items-center p-2'>
                    <div className='image w-[5vw] h-[5vw] rounded-full bg-blue-800 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={item.imageUrl} alt="Profile" />
                    </div>
                    <h1 className='text-xl font-semibold'>{item.name}</h1>
                    <p className='mt-4 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, debitis.</p>
                    <button onClick={() => handleRemove(index)} className='px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-4'>Remove It</button>
                </div>
            ))}
        </>
    )
}

export default Card