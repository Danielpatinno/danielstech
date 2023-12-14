import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://tecstore.pe/media/TEC_Banner-Web_Categoria_CELULARES.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://dpscenter.com.br/wp-content/uploads/2021/01/BANNER.jpg"
          alt="Thumbnail"
        />
      </div>
      <div>
        <img
          src="https://www.designi.com.br/images/preview/10295188.jpg"
          alt="Thumbnail"
        />
      </div>

      {/* Add more divs for additional slides */}
    </Slider>
  )
}

export default Carousel
