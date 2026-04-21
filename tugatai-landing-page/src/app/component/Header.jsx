import React from 'react'

const Header = ({ titleText, subtitleText }) => {
  return (
    <div className='text-center'>
        <h3 className='text-3xl font-inter font-medium inline-block bg-gradient-to-r from-[#E9D4FF] to-[#FFFFFF] bg-clip-text text-transparent'>
          {titleText}
        </h3>
        <p className='text-[#DBDBDB] mt-4 font-inter text-xl mx-auto '>{subtitleText}</p>
    </div>
  )
}

export default Header