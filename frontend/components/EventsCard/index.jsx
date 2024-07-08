import React, { useEffect } from "react";
import s from "./EventCard.styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

function EventCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  let startDate = props.startDate;
  return (
    <div className={s.card} data-aos="zoom-in" data-aos-duration="2000">
      <img src={props.img} className={s.card__img} alt={props.title} />
      <div className={s.card__body}>
        <h2 className={s.card__title}>{props.title}</h2>
        <div className={s.card__info}>
          <div className={s.flexBoxSpaceBetween}>
            <svg className="h-4 mr-2 fill-[#0076FE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" />
            </svg>
            <p className={s.date}>{props.startDate}</p>
          </div>
          <div className={s.flexBoxSpaceBetween}>
            <svg
              className="h-4 mr-2 fill-[#0076FE]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
            </svg>
            <p className={s.location}>{props.location}</p>
          </div>
        </div>

        <button
          onClick={() => {
            props.showModal(props);
          }}
          className={s.card__btn}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default EventCard;
