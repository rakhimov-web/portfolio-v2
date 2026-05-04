import styles from "./testimonials.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Azamat Ergashev",
      position: "CEO at Korzinka Online",
      text: '"Working with Abdurahmon was a seamless experience. He doesn’t just write code; he truly understands user intent and accessibility. The website performance is smoother than we ever expected."',
    },
    {
      id: 2,
      name: "Alisher Nurmatov",
      position: "Founder of Express24",
      text: '"Speed and fluid animations were our top priorities. Abdurahmon delivered the project on time with zero console errors. His attention to frontend detail is exactly what modern brands need."',
    },
    {
      id: 3,
      name: "Bauyrzhan Kairat",
      position: "Product Manager at Kaspi.kz",
      text: '"A talented frontend specialist. The interface he built is clean, modern, and highly responsive. His responsibility and ability to implement the latest UI libraries are top-notch."',
    },
    {
      id: 4,
      name: "David Miller",
      position: "Tech Lead at BlueWave Solutions (USA)",
      text: '"Abdurahmon is a reliable developer with a strong grasp of React. He provided a clean, maintainable codebase and handled feedback professionally. A great asset for any web project."',
    },
    {
      id: 5,
      name: "Sardor Ahmedov",
      position: "CTO at Najot Ta'lim",
      text: '"Throughout our collaboration, he demonstrated great creative problem-solving skills. He turned complex frontend challenges into simple, elegant solutions. I highly recommend his work."',
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h1 className="title">What Clients Say</h1>
      <p className="text">
        A passionate front-end developer from Namangan, Uzbekistan, dedicated to
        crafting seamless <br className="br" /> digital interfaces and high-performance web
        experiences.
      </p>

      <div className={styles.cardsContainer}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.dots}`,
            bulletClass: styles.dot,
            bulletActiveClass: styles.dotActive,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          grabCursor={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <span className={styles.quoteMark}>
                  <RiDoubleQuotesL />
                </span>

                <p className="text">{item.text}</p>

                <div className={styles.profile}>
                  <h3 className="title">{item.name}</h3>
                  <p className="text">{item.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.dots}></div>
    </section>
  );
};

export default Testimonials;
