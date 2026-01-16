import React from 'react'

function Card({ users }) {
    return (
        <>
            {users.map((item, index) => (
                <div className='w-32 h-full bg-sky-300 rounded-lg flex flex-col items-center p-2'>
                    <div className='image w-[5vw] h-[5vw] rounded-full bg-blue-800 overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Profile" />
                    </div>
                    <h1 className='text-xl font-semibold'>Harsh</h1>
                    <p className='mt-4text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, debitis.</p>
                    <button className='px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-4'>Follow</button>
                </div>
            ))}
        </>
    )
}

export default Card