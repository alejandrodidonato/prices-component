import { useState } from 'react'
import Switcher from './components/Switcher'
import Cards from './components/Cards'


function App() {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <h1 className='text-primary mb-5 text-xl'>Our Pricing</h1>
      <Switcher isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
      <Cards membershipType={isChecked} />
    </>
  )
}

export default App