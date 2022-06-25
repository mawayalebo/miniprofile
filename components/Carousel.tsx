import Image from 'next/image';
import { Carousel  as Banner } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import all images from images folder

function Carousel() {
    //fetch all images from images folder
    var images = [
        {
            src: "/images/b_img.jpg",
            alt: "banner1",
            title: "banner1"
        },
        {
            src: "/images/b_img1.jpg",
            alt: "banner1",
            title: "banner1"
        },
    ];
    return ( 
        <section className="">
            <Banner autoPlay infiniteLoop interval={9000} showThumbs={false} showIndicators={false} showArrows={false} showStatus={false} >
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className="relative w-screen h-screen">
                                <Image loading='eager' src={image.src} alt={image.alt} layout="fill" objectFit='cover'/>
                            </div>
                        )
                    })
                }
            </Banner>
        </section>
     );
}

export default Carousel;
