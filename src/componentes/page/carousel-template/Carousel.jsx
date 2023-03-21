
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

 const Carousel = ({arrayCarousel, titulo}) => {
  
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
    return (
        <section className="carousel">
            <div className="container">
                <h2>{titulo}</h2>
            </div>
            <div className="carouselContainer">
                <div className="curvaCarouselTop"></div>
                <div className="container">
                    <Slider {...settings}>
                        {
                            arrayCarousel.map((box, index) =>(
                                <div key={index}>
                                    <div className="boxCarousel" style={{backgroundImage: `url("${box.img}")`, backgroundPosition: box.position}}>
                    
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="curvaCarouselBottom"></div>
            </div>
        </section>
    );
}
export default Carousel