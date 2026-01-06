import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import dauquabo from "./dauquabo.png";
// import { IoCartOutline } from "react-icons/io5";
// import { Button } from "flowbite-react";
import spmin from "./spmin.png";
import la1 from "./la1.png";
import la2 from "./la1.png";
import bo2 from "./la1.png";

import bo1 from "./bo1.png";

import OrderModal from "../modal/order-modal";
import bgmin from "./bgmin.png";

export default function Body1() {
  return (
    <div
      className="inset-0 bg-cover bg-center w-full h-screen relative"
      style={{ backgroundImage: `url(${bgmin})` }}
    >
      <div>
        <img src={la1} alt="la1" className="absolute top-0 left-0 opacity-50" />

        <img
          src={bo1}
          alt="bo1"
          className="absolute bottom-0 right-0 opacity-50"
        />
      </div>

      <div className="container-custom w-full grid lg:grid-cols-2 md:grid-cols-2 items-center mt-10 p-6 justify-evenly min-h-screen">
        <div className="w-full">
          <div className="w-full flex flex-col items-center gap-4 justify-center animate-fade-in-left">
            <div className="w-full flex items-center justify-center">
              <img
                src={dauquabo}
                alt="dauquabo"
                className="max-w-full h-auto animate-float"
              />
            </div>
            <div className="w-auto flex items-center justify-center border-4 border-[#E1AE25] h-12 bg-[#01A848] rounded-bl-3xl rounded-tr-3xl p-3 hover-lift animate-fade-in-up">
              <p className="text-2xl md:text-3xl text-white font-medium">
                Dầu quả bơ ép lạnh
              </p>
            </div>
            <div className="w-auto flex items-center justify-between h-auto border-3 border-white bg-white rounded-full shadow-md p-2 hover-lift animate-fade-in-up">
              <IoIosHeartEmpty
                size={20}
                className="text-[#01A848] font-medium animate-pulse-slow"
              />
              <p className="text-[#01A848] text-sm md:text-lg font-medium">
                Món quà từ thiên nhiên, vì sức khoẻ gia đình bạn
              </p>
            </div>
            <div className="flex justify-center items-center w-full animate-fade-in-up">
              <div className="bg-red-600 text-white p-2 rounded-l-lg flex items-center justify-center hover-scale transition-smooth">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-semibold">
                    Tiết kiệm ngay
                  </p>
                  <p className="text-lg md:text-xl font-bold">65.000đ</p>
                </div>
              </div>
              <div className="bg-red-600 text-white rounded-r-lg p-2 flex items-center justify-center hover-scale transition-smooth relative">
                <div className="absolute left-0 h-full w-1 bg-white"></div>
                <div className="text-center">
                  <p className="text-xs md:text-sm font-semibold line-through">
                    Giá cũ: 315.000đ
                  </p>
                  <p className="text-lg md:text-xl font-bold animate-pulse-slow">
                    250.000đ
                  </p>
                </div>
              </div>
            </div>
            <div className="w-auto animate-fade-in-up">
              <div className="w-full border border-[#08A950] bg-[#08A950] rounded-tl-md rounded-tr-md flex items-center justify-center p-2 shadow-lg">
                <p className="text-white text-sm md:text-2xl lg:text-3xl font-medium">
                  Chương trình ưu đãi sẽ kết thúc sau
                </p>
              </div>
              <div className="w-full bg-white rounded-b-md shadow-lg">
                <div className="flex flex-row items-center justify-around p-4">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      24
                    </p>
                    <p className="text-sm">Ngày</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      14
                    </p>
                    <p className="text-sm">Giờ</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      59
                    </p>
                    <p className="text-sm">Phút</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      00
                    </p>
                    <p className="text-sm">Giây</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <OrderModal />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[400px] sm:flex animate-fade-in-right">
          <div className="flex justify-center items-center p-2 sm:mt-0">
            <img
              src={spmin}
              alt="spmin"
              className="max-w-full h-auto sm:h-full sm:w-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
