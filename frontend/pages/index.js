import React, { useEffect, useState } from "react";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import navigation from "../data";
import Carousels from "../components/Carousel/Carousels";
import Title from "../components/Title";
import Loader from "../components/loader/Loader";

import apiLinks from "../data/apiLink";

export default function Home() {
  const [data, setData] = useState([]);
  const [sponsers, setSponsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setLoading(true);

    Promise.all([
      fetch(`${apiLinks.gallery}`).then((gallery) => gallery.json()),
      fetch(`${apiLinks.sponsers}`).then((spons) => spons.json()),
    ]).then(([gallery, spons]) => {
      setData(gallery);
      setSponsers(spons);
      setLoading(false);
    });
  }, []);

  if (!data) return <p>Backend have some problem check your api</p>;

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <Head>
        {/* <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <!-- The above 3 meta tags *must* come first in the head --> */}

        {/* <!-- SITE TITLE --> */}
        <title>ISTE NIT DURGAPUR</title>
        <meta
          name="description"
          content="ISTE NIT Durgapur took birth on the auspicious occasion of Saraswati Puja Day way back in February, 1995 in our erstwhile called REC Durgapur and is the Oldest Student Chapter of Eastern India. "
        />
        <meta
          name="keywords"
          content="ISTE,NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR,NIT Durgapur clubs,NIT Durgapur Society,ISTE Students' Chapter"
        />
        <meta name="author" content="Abhishek Krishna@istenitdgp" />
      </Head>
      <Header items={navigation} navPosition="right" home={true} />
      <section className={s.hero}>
        <div className={s.heroImageContainer}  data-aos="fade-up"></div>
      </section>
      <div className={s.container}>
        <section className={s.about} data-aos="fade-up">
          <Title title="ABOUT US" font="36" margin="30" />
          <p>
            The Indian Society for Technical Education(ISTE) is the leading
            National Professional non-profit making Society for the Technical
            Education System in our country with the motto of Career Development
            of Teachers and Personality Development of Students and overall
            development of our Technical Education System operating in
            association with All India Council for Technical Education (AICTE)
            and other International Projects.
            <br /> <br />
            ISTE NIT Durgapur took birth on the auspicious occasion of Saraswati
            Puja Day way back in February, 1995 in our erstwhile called REC
            Durgapur and is the Oldest Student Chapter of Eastern India.
            Additionally, ISTE NIT Durgapur nominates projects and papers for
            the Indian Journal of Technical Education (IJTE) published by the
            ISTE HQ, New Delhi on quarterly basis with the aim to provide an
            appropriate platform presenting well considered, meaningful,
            constructively thought provoking, non-political and non-conventional
            but critically analysing and synthesizing present and future aspects
            of the technical education system supported with meaningful
            suggestions for solutions, refinement and innovation.
          </p>
        </section>
        <section className={s.gallery} data-aos="fade-down" >
          <Title title="PHOTO GALLERY" font="36" margin="45" />
          <div className={s.Carousel}>
            <Carousels images={data.slice(0,5)} />
          </div>
        </section>

        <section className={s.faculty}>
          <Title title="FACULTY ADVISORS" font="34" margin="30" />
          <div className={s.wrapper}>
            <div className={`${s.profileCard}`} data-aos="fade-right" data-aos-delay="100">
              <div className={s.profileCard__img}>
                <img src="/fa2.png" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Dr. Anita Pal <br />{" "}
                  <span className={s.profileCard__name__designation}>
                    {" "}
                    CHIEF-FACULTY ADVISOR{" "}
                  </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Get abuzz and shroud yourself with knowledge to extinguish
                  moribundity,as knowledge is a wing with which one can fly to
                  the heaven. */}
                </div>
              </div>
            </div>
            <div className={`${s.profileCard}`} data-aos="fade-left" data-aos-delay="100">
              <div className={s.profileCard__img}>
                <img src="anirudha.jpg" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Prof. Aniruddha Bhattacharya <br />
                  <span className={s.profileCard__name__designation}>
                    {" "}
                    FACULTY ADVISOR{" "}
                  </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Nothing in this world can take the place of persistence.
                  Talent will not: nothing is more common than unsuccessful men
                  with talent. Genius will not; unrewarded genius is almost a
                  proverb. Education will not: the world is full of educated
                  derelicts. Persistence and determination alone are omnipotent. */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sponsers}>
          <Title title="OUR SPONSERS" font="36" margin="60" />
          <div className={s.slider}>
            {sponsers.map((data) => {
              return (
                <div key={data.id}>
                  <img src={data.Image} alt="image" />
                </div>
              );
            })}

            {sponsers.map((data) => {
              return (
                <div key={data.id}>
                  <img src={data.Image} height="150" width="150" alt="image" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   const res = await fetch("http://127.0.0.1:8000/api/sponsers/");
//   const sponsers = await res.json();

//   // By returning { props: { events } }, the component
//   // will receive `events` as a prop at build time
//   return {
//     props: {
//       sponsers,
//     },
//   };
// }
