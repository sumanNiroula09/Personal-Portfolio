import React from 'react'
import './testimonial.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/pagination';


const data=[
  {
    avatar: AVTR1,
    name: "Ashif Khan",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
  {
    avatar: AVTR2,
    name: "Abhishek Roy",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
  {
    avatar: AVTR3,
    name: "Manish Adhikari",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
  {
    avatar: AVTR4,
    name: "Binam Shrestha",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
  {
    avatar: AVTR1,
    name: "Babesh Basnet",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
  {
    avatar: AVTR4,
    name: "Raj kumar chaudhary",
    review:"orem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, animi, voluptas quisquam molestiae corrupti voluptates expedita ab amet ipsa doloribus"

  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index}className="testimonial">
          <div className="client__avatar">
            <img src={avatar }  />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
      
        </SwiperSlide>
            )
          })
        }

        

        
      </Swiper>

    </section>
  )
}

export default Testimonial