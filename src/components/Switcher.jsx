import { useState } from 'react'

const Switcher = ({isChecked, handleCheckboxChange }) => {
  

  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center mt-5'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='label flex items-center text-sm font-medium text-secondary mr-1'>
          Annualy
        </span>
        <span
          className={'slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 bg-gradient-to-r from-background1 to-background2 hover:opacity-50'}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-secondary ml-1'>
          Monthly
        </span>
      </label>
    </>
  )
  }



export default Switcher
