import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
  return (
    <div style={{backgroundColor:'#264653', textAlign:'center',lineHeight:'40px',height:'40px'}}>
      <p style={{color:'white'}}>All Right Reserved. {year}</p>
    </div>
  )
}
