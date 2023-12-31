import React from 'react'
import HERO from './content/img/hero.png'
import C1 from './content/img/customers/customer-1.jpg'
import C2 from './content/img/customers/customer-2.jpg'
import C3 from './content/img/customers/customer-3.jpg'
import C4 from './content/img/customers/customer-4.jpg'
import C5 from './content/img/customers/customer-5.jpg'
import C6 from './content/img/customers/customer-6.jpg'
import logo from './content/img/omnifood-logo.png'
const App = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="image" className="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className='main-nav-link'>Home</li>
            <li className='main-nav-link'>Order</li>
            <li className='main-nav-link'>Shop</li>
            <li className='main-nav-link nav-cta'>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className='heading-primary'>A healthy meal delivered to your door, every single day</h1>
            <p className='hero-description'>
              The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a href="" className='btn btn--full'>Start eating well</a>
            <a href="" className='btn btn--outline'>Learn More &darr;</a>
            <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={C1} alt="" />
              <img src={C2} alt="" />
              <img src={C3} alt="" />
              <img src={C4} alt="" />
              <img src={C5} alt="" />
              <img src={C6} alt="" />
            </div>
            <p className='delivered-description'><span style={{color: "#e67e22"}}>250,000+</span> meals delivered last year!</p>
          </div>
          </div>
          <div className="hero-image-box">
            <img src={HERO} alt="hero-image" className='hero-img' />
          </div>
        </div>
      </section>
      <section className="section-how">
        <div className=' container grid grid--2-cols'>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
        </div>
        
      </section>
      <section className="section-how grid grid--3-cols">
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
      </section>
      </main>
    </>
  )
}

export default App