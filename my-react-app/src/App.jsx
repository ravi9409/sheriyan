import { useRef, useState } from 'react'
import Cards from './Components/Cards'
import Forms from './Components/Forms'

function App() {
    const [users, setUsers] = useState([])

    const handleFormSubmitData = (data) => {
        setUsers(...users, data);
    }

    return (
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-content-between'>
            <div className='container mx-auto'>
                <Cards users={users} />
                <Forms handleFormSubmitData={handleFormSubmitData} />
            </div>
        </div>
    )

}

export default App
