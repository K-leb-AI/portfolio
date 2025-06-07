import React, { useEffect, useRef, useState } from "react";
import { TiHome } from "react-icons/ti";
import { FaCube } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineTimeline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 640);
  const navRef = useRef(null);
  const blobRef = useRef(null);
  const itemRefs = useRef([]);

  const links = [
    { name: "home", icon: <TiHome className="text-lg" />, href: "#home" },
    {
      name: "about",
      icon: <IoIosInformationCircle className="text-lg" />,
      href: "#about",
    },
    {
      name: "projects",
      icon: <FaCube className="text-lg" />,
      href: "#projects",
    },
    {
      name: "timeline",
      icon: <MdOutlineTimeline className="text-lg" />,
      href: "#timeline",
    },
    {
      name: "testimonials",
      icon: <FaCommentAlt className="text-lg" />,
      href: "#testimonials",
    },
    {
      name: "contact",
      icon: <FaPhone className="text-lg" />,
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const moveBlobToIndex = (index) => {
    const nav = navRef.current;
    const blob = blobRef.current;
    const item = itemRefs.current[index];
    if (!nav || !blob || !item) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const blobOffset = isSmall
      ? blob.offsetWidth / 1.7
      : blob.offsetWidth / 1.85;
    const offsetX =
      itemRect.left - navRect.left + itemRect.width / 2 - blobOffset;

    blob.style.transform = `translateX(${offsetX}px)`;
  };

  const handleClick = (index, e, href) => {
    e.preventDefault();
    setActiveIndex(index);
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    moveBlobToIndex(activeIndex);
  }, [activeIndex, isSmall]);

  useEffect(() => {
    const sectionEls = links.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionEls.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionEls.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center relative z-50">
      <nav
        ref={navRef}
        className={`bg-bg-2/50 backdrop-blur-xs h-14 flex justify-center items-center fixed rounded-full w-fit ${
          isSmall ? "pr-2 pl-2 bottom-10" : "pr-4 pl-5 top-4"
        }`}
      >
        <div
          ref={blobRef}
          className={`h-12 ${
            isSmall ? "w-12" : "w-24"
          } z-0 bg-white rounded-full absolute cursor-pointer left-1 blob transition-transform duration-300 ease-in-out shadow-md`}
        ></div>
        <ul
          className={`flex z-10 justify-center items-center ${
            isSmall ? "gap-1" : "gap-5"
          } relative`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${
                activeIndex === index ? "text-bg-1 font-bold" : "text-white"
              } text-sm cursor-pointer px-3 py-2 transition-colors duration-200`}
              onClick={(e) => handleClick(index, e, link.href)}
            >
              {isSmall ? link.icon : link.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
