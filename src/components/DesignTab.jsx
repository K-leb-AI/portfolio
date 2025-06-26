import React, { useState } from "react";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animation from "../assets/cat.lottie";

import bean1 from "../assets/Bean/1.jpg";
import bean2 from "../assets/Bean/2.jpg";
import bean3 from "../assets/Bean/3.jpg";
import bean4 from "../assets/Bean/4.jpg";

import drokemy1 from "../assets/drokemy/1.jpg";
import drokemy2 from "../assets/drokemy/2.jpg";
import drokemy3 from "../assets/drokemy/3.jpg";
import drokemy4 from "../assets/drokemy/4.jpg";

import eav1 from "../assets/EAV/1.jpeg";
import eav2 from "../assets/EAV/2.png";
import eav3 from "../assets/EAV/3.jpg";
import eav4 from "../assets/EAV/4.png";
import eav5 from "../assets/EAV/5.png";

import steam1 from "../assets/steamhub/1.jpg";
import steam2 from "../assets/steamhub/2.jpg";
import steam3 from "../assets/steamhub/3.jpg";
import steam4 from "../assets/steamhub/4.jpg";

import stunning1 from "../assets/stunning/1.jpg";
import stunning2 from "../assets/stunning/2.jpg";
import stunning3 from "../assets/stunning/3.jpg";
import stunning4 from "../assets/stunning/4.jpg";
import stunning5 from "../assets/stunning/5.jpg";
import stunning6 from "../assets/stunning/6.jpg";
import stunning7 from "../assets/stunning/7.jpg";
import stunning8 from "../assets/stunning/8.jpg";
import stunning9 from "../assets/stunning/9.jpg";
import stunning10 from "../assets/stunning/10.jpg";
import stunning11 from "../assets/stunning/11.jpg";
import stunning12 from "../assets/stunning/12.jpg";
import stunning13 from "../assets/stunning/13.jpg";
import stunning14 from "../assets/stunning/14.jpg";

import tgn1 from "../assets/tgn/1.jpg";
import tgn2 from "../assets/tgn/2.png";
import tgn3 from "../assets/tgn/3.jpg";
import tgn4 from "../assets/tgn/4.png";

import other1 from "../assets/other/1.jpg";
import other2 from "../assets/other/2.jpg";
import other3 from "../assets/other/3.jpg";
import other4 from "../assets/other/4.jpg";
import other5 from "../assets/other/5.png";
import other6 from "../assets/other/6.jpg";
import other7 from "../assets/other/7.jpg";
import other8 from "../assets/other/8.jpg";
import other9 from "../assets/other/9.jpg";
import other10 from "../assets/other/10.jpg";
import other11 from "../assets/other/11.jpg";
import other12 from "../assets/other/12.jpg";

const DesignTab = (props) => {
  const [activeIndex, setActiveIndex] = useState();
  const designItems = [
    {
      title: "stunning concepts",
      stack: [<SiAdobephotoshop className="text-button-text size-4" />],
      pictures: [
        stunning1,
        stunning2,
        stunning3,
        stunning4,
        stunning5,
        stunning6,
        stunning7,
        stunning8,
        stunning9,
        stunning10,
        stunning11,
        stunning12,
        stunning13,
        stunning14,
      ],
    },
    {
      title: "drokemy",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [drokemy1, drokemy2, drokemy3, drokemy4],
    },
    {
      title: "the Godly nation",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [tgn1, tgn2, tgn3, tgn4],
    },
    {
      title: "bean bliss",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [bean1, bean2, bean3, bean4],
    },
    {
      title: "the steam hub",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [steam1, steam2, steam3, steam4],
    },
    {
      title: "ea villa",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [eav1, eav2, eav3, eav4, eav5],
    },
    {
      title: "other works",
      stack: [
        <SiAdobeillustrator className="text-button-text size-4" />,
        <SiAdobephotoshop className="text-button-text size-4" />,
      ],
      pictures: [
        other1,
        other2,
        other3,
        other4,
        other5,
        other6,
        other7,
        other8,
        other9,
        other10,
        other11,
        other12,
      ],
    },
  ];
  const [swiperList, setSwiperList] = useState([]);
  const handleClick = (index) => {
    setActiveIndex(index);
    setSwiperList(designItems[index].pictures);
  };
  return (
    <div className="aspect-ratio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <div className="col-span-full bg-bg-3 mb-2 place-items-center h-[60vh]">
        {swiperList.length == 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <DotLottieReact
              src={animation}
              loop
              autoplay
              className="aspect-auto h-50 opacity-25"
            />
            <p className="text-white-2/30">select a project</p>
          </div>
        ) : (
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            style={{
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-[60vh]"
            autoplay={{
              delay: 7500,
              disableOnInteraction: true,
            }}
          >
            {swiperList.map((swipeItem) => (
              <SwiperSlide>
                <div
                  style={{
                    backgroundImage: `url(${swipeItem})`,
                  }}
                  className="bg-contain bg-no-repeat bg-center w-full h-full border-border border"
                ></div>
                {/* <img src={swipeItem} alt="" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="flex flex-col justify-end w-full aspect-square bg-bg-1/30 backdrop-blur-xs border border-border p-5">
        <div className="size-14 rounded-full bg-white flex items-center justify-center mb-5">
          {<FaArrowRight className="text-bg-1" />}
        </div>
        <p className="text-2xl xl:text-5xl leading-6 xl:leading-10 font-bold mb-4">
          i'm kind of an artist too!
        </p>
        <p className="text-md font-extralight font-mono">
          Take a look at some of my works.
        </p>
      </div>

      {designItems.map((item, index) => (
        <ProjectCard
          key={index}
          index={index}
          activeIndex={activeIndex}
          title={item.title}
          icon={<FaInstagram className="text-button-text size-5" />}
          stack={item.stack}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default DesignTab;
