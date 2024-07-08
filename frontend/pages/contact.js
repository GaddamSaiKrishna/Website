import { useEffect, useState } from "react";
import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import Loader from "../components/loader/Loader";
import Title from "../components/Title";

import contactDetails from "../data/contact";
import apiLinks from "../data/apiLink";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sentmessage, setSentmessage] = useState("");
  const [sending, setSending] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      let res = await fetch(`${apiLinks.contact}`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          message: message,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSentmessage(" Message sent successfully");

        setTimeout(() => setSentmessage(""), 1000);
      } else {
        setSentmessage("Please fill all the details ");
        setTimeout(() => setSentmessage(""), 1000);
      }
    } catch (err) {
      console.log(err);
    }
    setSending(false);
  };

  // loader screen
  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
    AOS.init({ duration: 1500 });
  }, []);

  // [] means like componentDidMount
  const font = {
    fontfamily: "'DM Sans', sans-serif",
    letterSpacing: "2px",
  };
  return spinner ? (
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
        <title>CONTACT US | ISTE NITDGP</title>
        <meta
          name="description"
          content="ISTE Students' Chapter NIT Durgapur"
        />
        <meta
          name="keywords"
          content="ISTE,NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR,NIT Durgapur clubs,NIT Durgapur Society,ISTE Students' Chapter"
        />
        <meta name="author" content="Abhishek Krishna@istenitdgp" />
      </Head>
      <Header items={navigation} navPosition="right" home={false} />
      <section
        className="py-10 px-4 lg:px-16 overflow-hidden relative z-10 mt-[80px]"
        // data-aos="fade-up"
        id="contact"
      >
        <Title title="CONTACT US" font="36" margin="15" />
        <div className="container p-6 rounded-2xl ">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <div className="flex items-center text-center mb-4 ">
                  <svg
                    className="h-5  fill-[#0076fe]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                  </svg>

                  <p
                    className="flex items-center text-xl md:text-2xl text-center font-bold text-[#0076fe] mx-3"
                    style={font}
                  >
                    LOCATION
                  </p>
                </div>

                <p className="text-base  font-normal leading-relaxed mb-9">
                  National Institute of Technology Durgapur , West Bengal ,
                  India
                </p>
                <div className="flex items-center text-center mb-4 ">
                  <svg
                    className="h-5 fill-[#0076fe] mb-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z" />
                  </svg>

                  <p
                    className="flex items-center text-xl md:text-2xl  font-bold  text-[#0076fe] mb-4  mx-3"
                    style={font}
                  >
                    Contact Info
                  </p>
                </div>
                <p className="text-base  font-normal text-body-color leading-relaxed  ">
                Priyanshu Kumar :
                  <span className="font-normal text-[#0076fe] italic">
                    {contactDetails.mobile.chairperson}
                  </span>
                </p>
                <p className="text-base  font-normal leading-relaxed  mb-9 ">
                Ayush Anand :
                  <span className="font-normal text-[#0076fe] italic">
                    {contactDetails.mobile.viceChairperson}
                  </span>
                </p>
                <div className="flex items-center  text-center mb-4 ">
                  <svg
                    className="h-5  fill-[#0076fe] mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                  </svg>

                  <p
                    className="text-xl md:text-2xl  font-bold text-[#0076fe] mb-4  mx-3"
                    style={font}
                  >
                    Mail Info
                  </p>
                </div>
                <p className="text-base  font-normal text-[#0076fe] italic leading-relaxed ">
                  {contactDetails.email}
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 border-2 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                                    w-full
                                    rounded-md
                                    p-3
                                    text-gray-800
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:ring-2
                                    ring-blue-400
                                    "
                      name="full_name"
                      id="full_name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                      w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      inputMode="numeric"
                      placeholder="Your Phone"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="phone_number"
                      id="phone_number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="message"
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    ></textarea>
                  </div>
                  <div>
                    <div>
                      {sentmessage ? (
                        <button
                          className=" w-full text-white font-bold
                                    bg-yellow-500
                                    rounded-full
                                    p-3
                                    shadow-md"
                          role="alert"
                        >
                          {sentmessage}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className=" w-full text-white font-bold
                                    bg-[#0076fe]
                                    rounded-full
                                    p-3
                                    shadow-md
                                    "
                        >
                          {sending ? "Sending ..." : "Send Message"}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
