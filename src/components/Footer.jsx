import React from 'react'

function Footer ()  {
    const currYear=new Date().getFullYear();
  return (
    <footer>
        <p>
            copyright © {currYear};
        </p>
    </footer>
  )
}

export default Footer