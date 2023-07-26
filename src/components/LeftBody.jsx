import React from 'react'
import Input from './Input'

const LeftBody = () => {
  return (
    <div className='left-body btns'>
        <input type='text' placeholder='search'/>
        <button>New Gate Pass</button>
        <div className='container'>
            <div className='box'>
                <div>Stock</div>
                <div>100,000</div>
            </div>
            <div className='box'>
                <div>Stock</div>
                <div>100,000</div>
            </div>
            <div className='box'>
                <div>Stock</div>
                <div>100,000</div>
            </div>
            <div className='box'>
                <div>Stock</div>
                <div>100,000</div>
            </div>
        </div>
        <Input/>
        <Input/>
        
    </div>
  )
}

export default LeftBody