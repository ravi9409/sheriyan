import React from 'react'
import { useForm } from 'react-hook-form'
import Card from './Card'

function Cards({ users }) {

    return (
        <div className='w-full p-4 flex justify-center gap-4 flex-wrap'>
            <Card users={users} />
        </div>
    )
}

export default Cards
