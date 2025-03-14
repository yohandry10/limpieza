import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useI18n } from '../i18n/i18nContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: t('testimonials.clients.0.name'),
      role: t('testimonials.clients.0.position'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: t('testimonials.clients.0.testimonial')
    },
    {
      name: t('testimonials.clients.1.name'),
      role: t('testimonials.clients.1.position'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      content: t('testimonials.clients.1.testimonial')
    },
    {
      name: t('testimonials.clients.2.name'),
      role: t('testimonials.clients.2.position'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content: t('testimonials.clients.2.testimonial')
    },
    {
      name: t('testimonials.clients.3.name'),
      role: t('testimonials.clients.3.position'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      content: t('testimonials.clients.3.testimonial')
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8A35B] to-[#C8A35B]/80">
              {t('testimonials.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300">{t('testimonials.subtitle')}</p>
        </motion.div>

        {/* Swiper con las tarjetas de testimonios */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="py-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 h-full border border-[#C8A35B] shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-[#C8A35B]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !text-white"></div>
          <div className="swiper-button-next !text-white"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
