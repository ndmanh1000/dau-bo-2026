"use client";

import Accordion1 from "../accordion/accordion1";
import Accordion2 from "../accordion/accordion2";
import lydo from "./lydo.png";
import Rectangle from "./Rectangle.jpg";
import OrderModal from "../modal/order-modal";

export default function ReasonForUse() {
  return (
    <div
      id="reason-for-use"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Rectangle})` }}
    >
      {/* Overlay gradient để text dễ đọc hơn */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40 pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-32 h-32 bg-[#296003]/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-0 w-40 h-40 bg-[#01A848]/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Header Section với styling đẹp hơn */}
        <div className="w-full flex flex-col gap-4 items-center justify-center text-center mb-12 md:mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 bg-[#548035]/20 rounded-full backdrop-blur-sm mb-2">
            <p className="text-[#548035] font-bold text-sm md:text-base uppercase tracking-wider">
              LÝ DO BẠN NÊN SỬ DỤNG
            </p>
          </div>
          <div className="relative">
            <h2 className="text-[#296003] font-semibold text-2xl md:text-3xl lg:text-4xl">
              DẦU QUẢ BƠ ÉP LẠNH KEYAVO
            </h2>
            {/* Decorative underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#01A848] to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-700 text-base md:text-lg mt-6 max-w-2xl">
            Khám phá những lợi ích tuyệt vời mà sản phẩm tự nhiên này mang lại
            cho sức khỏe của bạn
          </p>
        </div>

        {/* Main Content với layout cải thiện */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch mt-12">
          {/* Left Accordion - Enhanced styling */}
          <div className="w-full lg:w-1/3 animate-fade-in-left">
            <div className="h-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 hover-lift transition-all duration-300 border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#01A848] to-[#296003] rounded-full"></div>
                <h3 className="text-[#296003] font-bold text-lg">
                  Lợi Ích Sức Khỏe
                </h3>
              </div>
              <Accordion1 />
            </div>
          </div>

          {/* Center Image & Button - Enhanced styling */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-6 animate-scale-in order-first lg:order-none">
            {/* Image với decorative frame */}
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#01A848]/30 via-[#296003]/30 to-[#01A848]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-white via-[#01A848]/10 to-[#296003]/10 p-6 rounded-full shadow-2xl border-4 border-[#296003]/30 group-hover:border-[#01A848] transition-all duration-300">
                <img
                  src={lydo}
                  alt="lydo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#01A848] rounded-full animate-bounce-slow opacity-80"></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#296003] rounded-full animate-bounce-slow opacity-80"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Order Button với enhanced styling */}
            <div className="w-full flex justify-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <OrderModal />
              </div>
            </div>
          </div>

          {/* Right Accordion - Enhanced styling */}
          <div className="w-full lg:w-1/3 animate-fade-in-right">
            <div className="h-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 hover-lift transition-all duration-300 border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#01A848] to-[#296003] rounded-full"></div>
                <h3 className="text-[#296003] font-bold text-lg">
                  Tính Năng Nổi Bật
                </h3>
              </div>
              <Accordion2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
