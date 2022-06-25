import Image from 'next/image';
import { Carousel  as Banner } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import all images from images folder

function Carousel() {
    //fetch all images from images folder
    var images = [
        {
            src: "/images/lebo1.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo2.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo3.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo4.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo5.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo6.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo7.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo8.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo9.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo10.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        {
            src: "/images/lebo11.jpg",
            alt: "lebogang mawaya image",
            title: "lebogang mawaya"
        },
        
    ];
    return ( 
        <section className="">
            <Banner autoPlay infiniteLoop interval={9000} showThumbs={false} showIndicators={false} showArrows={false} showStatus={false} >
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className="relative w-screen md:w-[50vw] h-screen">
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
