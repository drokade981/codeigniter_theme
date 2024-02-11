import React from 'react'

function About() {
  const h2 = {
    color:'green', fontSize : '20px'
  }
  return (
    <div>
      <h3>About</h3>
        <span style={h2}>Inline style</span>
    </div>
  )
}
export default About