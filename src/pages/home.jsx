import React from 'react'
import '../App.css'
import './home.css'
import Button from '../components/loginbtn.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, info, imgSrc }) => {
      return (
         <div className='card'>
                  <img src={imgSrc} alt={title} />
                <div className='caption'>
                  <h3>{title}</h3>
                  <p>{info}</p>
                </div>
              </div>
      ) 

}


const TrendingCard = ({ title, info, imgSrc, price, onAdd, onRemove }) => {
      const [hasAdded, setHasAdded] = useState(false);

      const handleClick = () => {
        if(hasAdded) {
          onRemove();
        } else {
          onAdd();
        }
        setHasAdded(prev => !prev);
      }

       return (
         <div className='trending-card'>
              <img src={imgSrc} alt={title} />
              <h3>{title}</h3>
              <p>{info}</p>
              <div className='price-btn'>
                <span className='price'>{price}</span>
                <button onClick={handleClick} className={hasAdded ? 'rcart-btn' : 'acart-btn'}>{hasAdded ? <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24" ><path d="m11.73 5.32-1.41 1.41 1.77 1.77-1.77 1.77 1.41 1.41 1.77-1.77 1.77 1.77 1.41-1.41-1.77-1.77 1.77-1.77-1.41-1.41-1.77 1.77z"></path><path d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg> : <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24" ><path d="M12.5 5v2.5H10v2h2.5V12h2V9.5H17v-2h-2.5V5z"></path><path d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg>}</button>
              </div>
            </div>
       )
}

const trendingData = [
  { id: 1, title: 'Apple iPad Pro', info: 'Ultimate mobile 3D creative power.', imgSrc: 'real-product.jpg', price: '$999.00' },
  { id: 2, title: 'Apple iPad Air', info: 'Balanced pro performance, with vibrant colors.', imgSrc: 'real-product.jpg', price: '$599.00' },
  { id: 3, title: 'Samsung Tab S11 Ultra', info: 'Massive premium Android multi-tasking beast.', imgSrc: 'real-product.jpg', price: '$1,199.99' },
  { id: 4, title: 'Lenovo Yoga 9i Aura Edition', info: 'Premium, convertible, high-performance hybrid laptop.', imgSrc: 'real-product.jpg', price: '$1,630.00' },
  { id: 5, title: 'MacBook Air M4', info: 'Silent, sleek, ultra-portable productivity icon.', imgSrc: 'real-product.jpg', price: '$1,099.99' },
  { id: 6, title: 'Dell XPS 14', info: 'Precision, high-end mechanical-feel Windows laptop.', imgSrc: 'real-product.jpg', price: '$1,599.99' }
];

const categoryData = [
  { id: 1, title: 'Students', info: 'Lightweight and Powerful', imgSrc: 'student.jpg' },
  { id: 2, title: 'Creatives', info: 'Tablets & Workstations', imgSrc: 'creative.jpg' },
  { id: 3, title: 'Gaming', info: 'High-Performance Hub', imgSrc: 'gaming.jpg' },
  { id: 4, title: 'Developers', info: 'Powerful Tools & Laptops', imgSrc: 'developer.jpg' },
  { id: 5, title: 'Professionals', info: 'Business-Ready Tech', imgSrc: 'professional.jpg' },
  { id: 6, title: 'Everyday', info: 'Versatiles Essentials', imgSrc: 'everyday.jpg' }
];

const Home = () => {
  return (
    <section className='section'>
        <div className='home-start'>
          <div className='intro'>
            <h1>Premium Tech & <span>Warming Gift</span></h1>
            <p>Discover the perfect high-end electronics curated specifically for the people who matter most.</p>
              <div className='btns'>
                <Link to="/products" className='btnh'>Shop Gifts</Link>
                <Link to="/products" className='btnh2'>Explore Deals</Link>
              </div>
          </div>
          <div className='img-card'>
            <img src="real-product.jpg" alt="product image" />
          </div>
        </div>
        <div className='home-middle'>
           <div className='mid-headings'>
              <div>
                <h2>Shop by Intent</h2>
                <p>Curated collections for every lifestyle.</p>
              </div>
              <Link to="/products" className='view-all'>View All</Link>
           </div>
           <div className='category-cards'>
             {categoryData.map(category => 
                  <CategoryCard 
                         key={category.id} 
                         title={category.title} 
                         info={category.info} 
                         imgSrc={category.imgSrc} />
              )}
           </div>
        </div>
        <div className='home-end'>
          <h2>Trending Tech Gifts</h2>
          <div className='trending-cards'>
            {trendingData.map(item => 
                   <TrendingCard 
                         key={item.id} 
                         title={item.title} 
                         info={item.info} 
                         imgSrc={item.imgSrc} 
                         price={item.price}
                         onAdd={item.onAdd}
                         onRemove={item.onRemove}
                         item={item} />
              )}
            
          </div>
        </div>
        <div className='home-outcomes'>
          <div className='outcome'>
            <span className='outcome-icon'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="m20.42 6.11-7.97-4c-.28-.14-.62-.14-.9 0l-7.97 4c-.31.15-.51.45-.55.79-.01.11-.96 10.77 8.55 15.01a.98.98 0 0 0 .82 0c9.51-4.25 8.57-14.9 8.55-15.01a.98.98 0 0 0-.55-.79ZM12 19.9C5.26 16.63 4.94 9.64 5 7.64l7-3.51 7 3.51c.04 1.99-.33 9.02-7 12.27Z"></path><path d="M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path>
</svg></span>
            <h4>Secure Shopping</h4>
            <p>256-bit SSL encrypted payments.</p>
          </div>
          <div className='outcome'>
            <span className='outcome-icon'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M13.08 8.63 12 6.44l-1.08 2.19-2.42.35 1.75 1.71-.41 2.41L12 11.96l2.16 1.14-.41-2.41 1.75-1.71z"></path><path d="M12 2c-4.41 0-8 3.59-8 8 0 2.52 1.17 4.77 3 6.24v4.77c0 .35.18.67.47.85s.66.2.97.04l3.55-1.78 3.55 1.78a.997.997 0 0 0 1.45-.89v-4.76c1.83-1.47 3-3.72 3-6.24 0-4.41-3.59-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6"></path>
</svg></span>
            <h4>Premium Warranty</h4>
            <p>2-year protection on all tech</p>
          </div>
          <div className='outcome'>
            <span className='outcome-icon'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M19.1 7.8c-.38-.5-.97-.8-1.6-.8H15V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2 0 1.65 1.35 3 3 3s3-1.35 3-3h4c0 1.65 1.35 3 3 3s3-1.35 3-3c1.1 0 2-.9 2-2v-3.67c0-.43-.14-.86-.4-1.2zM17.5 9l1.5 2h-4V9zM7 19a1.003 1.003 0 0 1-.87-1.5c.37-.63 1.36-.63 1.73 0 .09.15.13.32.13.49 0 .55-.45 1-1 1Zm2.23-3s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29a3 3 0 0 0-.67-.32c-.07-.02-.14-.05-.21-.07Q7.375 15 7 15c-.375 0-.49.04-.72.09-.07.02-.14.05-.21.07-.16.05-.31.11-.45.19-.07.04-.15.08-.22.13-.13.09-.26.18-.38.29-.06.05-.12.1-.18.16-.02.03-.05.04-.08.07h-.77V6h9v10H9.22ZM17 19a1.003 1.003 0 0 1-.87-1.5c.37-.63 1.36-.63 1.73 0 .09.15.13.32.13.49 0 .55-.45 1-1 1Zm3-3h-.77s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29a3 3 0 0 0-.67-.32c-.07-.02-.14-.05-.21-.07Q17.375 15 17 15c-.375 0-.47.04-.7.09-.06.01-.12.03-.18.05-.18.06-.36.13-.52.22l-.12.06c-.17.1-.33.21-.48.35v-2.76h5v3Z"></path>
</svg></span>
            <h4>Express Shopping</h4>
            <p>Free next-day delivery on gifts</p>
          </div>
        </div>
    </section>  
  )
}

export default Home