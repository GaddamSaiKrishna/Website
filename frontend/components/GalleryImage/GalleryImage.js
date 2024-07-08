import React, { useEffect } from "react";
import s from "./GalleryImage.styles.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function GalleryImage({ images }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <>

            {images.map((data) => {
                return (         
                    <div className={s.image_container} data-aos="flip-up" data-aos-duration="2000">
                    <img className={s.gallery_image} src={data.Image} alt="Image" />
                    <div className={s.image_caption}>
                      <span className={s.image_name}>{data.eventName}</span>
                      <span className={s.image_date}>{data.imgDate.slice(0,12)}</span>
                    </div>
                  </div>
                )

            })}

        </>
    );
}
export default GalleryImage;





















