import React, { useState } from 'react'
import { Data } from './Data'
import './Dropdown.css'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import { InboxRounded } from '@mui/icons-material'

const Dropdown = () => {
  const [clicked, setClicked] = useState(false)
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <div className='dropdown-page'>
      <div className='question'>
        {Data.map((item, index) => {
          return (
            <>
              <div className='wrap'>
                <h2 className='wrap' onClick={() => toggle(index)} key={index}>
                  {item.Field}
                </h2>
                <span>
                  {clicked === index ? (
                    <ClearIcon className='clearicon' />
                  ) : (
                    <AddIcon className='addicon' />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className='dropdown'>
                  <div
                    style={{
                      borderTop: '2px solid #808080  ',
                    }}
                  ></div>
                  <p>{item.Question}</p>
                </div>
              ) : null}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown
