import { useRef, useState } from 'react'
import Cards from './Components/Cards'
import Forms from './Components/Forms'
import { set } from 'react-hook-form'

function App() {
    const [users, setUsers] = useState([])

    const handleFormSubmitData = (data) => {
        setUsers([...users, data]);
    }

    const handleRemove = (key) => {
        setUsers(() => users.filter((user, index) => index !== key));
    }

    return (
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-content-between'>
            <div className='container mx-auto'>
                <Cards users={users} handleRemove={handleRemove} />
                <Forms handleFormSubmitData={handleFormSubmitData} />
            </div>
        </div>
    )

}

export default App
