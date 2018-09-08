import React from 'react'

const Footer = () => {
    const date= new Date()
  return (
  
      <footer >
          <div className='footerDiv'>
              <p>ВКонтакте © {date.getFullYear()}</p> 
                  <a className='a1' href="#">о компании</a>
                  <a className='a2' href="#">правила</a>
                  <a className='a3' href="#">реклама</a>
                  <a className='a4' href="#">разработчикам</a>
          </div>
          <div className="footerLang">
                <p>Язык: </p>
                  <a className='a5' href="#">English</a>
                  <a className='a6' href="#">Русский</a>
                  <a className='a7' href="#">Украинский</a>
          </div>
      </footer>
   
  )
}

export default Footer
