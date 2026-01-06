"use client";

import keyavado from "./keyavado.png";
import { MdLocalPhone } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import OrderModal from "../body/modal/order-modal";
import Dropdown from "./dropdawn";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";

export default function Bejob() {
  const smoothScroll = (id, e) => {
    // Ngăn default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Đóng mobile menu nếu đang mở
    const navbar = document.querySelector('[data-collapse-toggle]');
    if (navbar) {
      const isExpanded = navbar.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        navbar.click();
      }
    }

    // Tìm element
    const element = document.getElementById(id);
    if (element) {
      // Lấy chiều cao của header (fixed header)
      const headerHeight = 100; // Điều chỉnh theo chiều cao thực tế của header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      // Smooth scroll với easing function
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800; // 0.8 giây cho mượt hơn
      let start = null;

      function easeInOutCubic(t) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo({
          top: startPosition + distance * ease,
          behavior: 'auto'
        });

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // Khi scroll xong, trigger animation cho section
          element.classList.add("scroll-into-view");
          setTimeout(() => {
            element.classList.remove("scroll-into-view");
          }, 1000);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <Navbar fluid rounded className="w-full max-w-full overflow-x-hidden overflow-y-visible">
      <NavbarBrand href="#" className="max-w-[120px] sm:max-w-[150px] md:max-w-none overflow-hidden">
        <div className="overflow-hidden">
          <img 
            src={keyavado} 
            alt="keyavado" 
            className="max-w-full h-auto object-contain"
          />
        </div>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="overflow-x-hidden overflow-y-visible">
        <NavbarLink
          href="#"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={(e) => smoothScroll("reason-for-use", e)}
        >
          Lý do sử dụng
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={(e) => smoothScroll("object-of-use", e)}
        >
          Dành cho ai?
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={(e) => smoothScroll("endow", e)}
        >
          Ưu đãi
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={(e) => smoothScroll("feed-back", e)}
        >
          Nhận xét
        </NavbarLink>
      </NavbarCollapse>
      <NavbarCollapse className="overflow-x-hidden overflow-y-visible">
        <div className="w-full flex flex-col sm:flex-row gap-2 overflow-x-hidden overflow-y-visible">
          <Dropdown />
          <OrderModal />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
