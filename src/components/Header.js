import React from 'react'

const Header = props => {
  let divider

  if (props.page === 'index') {
    divider = <svg className='header-wave-divider' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 150'><path fill='white' fill-opacity='1' d='M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path></svg>
  } else {
    divider = <div className='header-scallop-divider'></div>
  }

  return (
    <header className={`${props.page}-header`}>
      <div className='title-box'>
        <h1>{props.headerTitle}</h1>
      </div>

      {divider}
    </header>
  )
}

export default Header