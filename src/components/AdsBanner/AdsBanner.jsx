import "swiper/css";
import "swiper/css/pagination";

import "./AdsBanner.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AdsBanner = ({ bannersImages }) => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 7500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			modules={[Autoplay, Pagination]}
			className="ads-swiper"
		>
			{bannersImages.map((banner, index) => (
				<SwiperSlide key={index}>
					<div className="banner-container">
						<img src={banner} alt="ads banner" loading="lazy" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default AdsBanner;
