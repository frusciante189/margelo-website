import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => {
  return (
    <Carousel className="bg-black py-10 text-white lg:py-20">
      <CarouselItem index={0}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high quality software and
          the passion for building something people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high quality software and
          the passion for building something people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high quality software and
          the passion for building something people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high quality software and
          the passion for building something people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high quality software and
          the passion for building something people want.
        </Review>
      </CarouselItem>
    </Carousel>
  )
}

export default Testimonials
