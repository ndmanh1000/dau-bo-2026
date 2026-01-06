import React, { useState, useEffect } from "react";
import axios from "axios";

import { SnackbarProvider, useSnackbar } from "notistack";

import endow1 from "./endow1.png";
import keyavado2 from "./keyavado2.png";
import bigsale from "./bigsale.png";
import bgendow from "./bgendow.png";
import bo3 from "./bo3.png";
import {
  MdPerson,
  MdPhone,
  MdLocationOn,
  MdShoppingCart,
} from "react-icons/md";
import { Button } from "flowbite-react";

export default function Endow() {
  const { enqueueSnackbar } = useSnackbar();

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    quantity: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "phone") {
      // Validate phone number format (exactly 10 digits)
      const phoneNumberRegex = /^[0-9]{10}$/;
      const isValidPhone = phoneNumberRegex.test(e.target.value);

      setErrors({
        ...errors,
        [e.target.name]: !isValidPhone,
      });
    } else {
      // General validation for other fields
      if (e.target.value.trim() === "") {
        setErrors({
          ...errors,
          [e.target.name]: true,
        });
      } else {
        setErrors({
          ...errors,
          [e.target.name]: false,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      phone:
        formData.phone.trim() === "" || !/^[0-9]{10}$/.test(formData.phone),
      address: formData.address.trim() === "",
      quantity: formData.quantity.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      // If any field is empty or phone number format is invalid, show errors
      return;
    }

    setLoading(true); // Start loading state

    axios({
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbyVGwOS0x69ZwmutKAD-1v7eSLZHrUUyrKOJvWBTc9zjMDEUlhLgpVbA2D56zi7RhKm/exec",
      data: {
        Name: formData.name,
        Phone: formData.phone,
        Address: formData.address,
        Quatity: formData.quantity,
      },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setLoading(false);
        enqueueSnackbar("Gửi yêu cầu thành công", {
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div
      id="endow"
      className="bg-cover bg-center bg-no-repeat min-h-96 relative w-full py-8 md:py-12 lg:py-16"
      style={{ backgroundImage: `url(${bgendow})` }}
    >
      <div className="w-full absolute top-0 opacity-55 animate-rotate-slow">
        <img src={bo3} alt="bo3" />
      </div>

      <div className="container-custom w-full grid lg:grid-cols-2 gap-6 relative z-10">
        <div className="w-full animate-fade-in-left">
          <div className="w-full flex flex-col mt-16 gap-4 p-5 items-center justify-center">
            <div className="w-full flex items-center justify-center animate-scale-in">
              <div className="w-full">
                <img src={keyavado2} alt="keyavado2" className="hover-scale" />
              </div>

              <div className="w-full items-center flex flex-col justify-center gap-1">
                <p className="text-black font-normal">Dầu quả bơ ép lạnh</p>
                <p className="text-[#E02635] font-medium">
                  100% không tinh luyện
                </p>
              </div>
            </div>
            <div className="w-auto h-auto border-2 border-white bg-white shadow-md rounded-full hover-lift animate-fade-in-up">
              <div className="flex flex-row items-center justify-center gap-3 p-3 w-full ">
                <div className="w-full h-auto bg-[#255703] rounded-full flex items-center justify-center p-2">
                  <p className="text-sm text-white">
                    <span className="line-through">315.000VNĐ</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {" "}
                    Giảm giá chỉ còn 250.000VNĐ/chai
                  </p>
                </div>
              </div>
            </div>
            <div className="w-auto animate-fade-in-up">
              <div className="w-full border border-[#08A950] bg-[#08A950] rounded-tl-md rounded-tr-md flex items-center justify-center p-4 shadow-lg">
                <p className="text-white font-medium">
                  Chương trình ưu đãi sẽ kết thúc sau
                </p>
              </div>
              <div className="w-full bg-white p-4 rounded-b-md shadow-lg">
                <div className="flex flex-row items-center justify-around">
                  <div className="flex flex-col items-center justify-center animate-bounce-slow">
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      {timeLeft.days}
                    </p>
                    <p className="text-sm">Ngày</p>
                  </div>
                  <div className="flex flex-col items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.1s' }}>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      {timeLeft.hours}
                    </p>
                    <p className="text-sm">Giờ</p>
                  </div>
                  <div className="flex flex-col items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      {timeLeft.minutes}
                    </p>
                    <p className="text-sm">Phút</p>
                  </div>
                  <div className="flex flex-col items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">
                      {timeLeft.seconds}
                    </p>
                    <p className="text-sm">Giây</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center animate-float">
              <img
                src={endow1}
                alt="endow1"
                className="w-64 h-64 object-contain hover-scale"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-6 animate-fade-in-right">
          <div className="w-full flex items-center justify-center">
            <img src={bigsale} alt="bigsale" className="object-contain" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-auto mx-auto p-7 bg-[#01A848] rounded-md shadow-xl hover-lift transition-smooth"
          >
            <div className="w-full items-center justify-center text-center text-white">
              <p>CHƯƠNG TRÌNH ƯU ĐÃI CÓ HẠN</p>
              <p>Vui lòng để lại thông tin</p>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdPerson size={24} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Họ và tên"
                  className={`w-full p-3 pl-10 border-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:border-[#225400] focus:ring-2 focus:ring-[#225400] transition-all duration-300 hover:border-[#225400]`}
                />
              </div>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">Vui lòng nhập họ và tên</p>
            )}
            <div className="flex items-center space-x-2">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdPhone size={24} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại"
                  className={`w-full p-3 pl-10 border-2 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:border-[#225400] focus:ring-2 focus:ring-[#225400] transition-all duration-300 hover:border-[#225400]`}
                />
              </div>
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">
                Vui lòng nhập số điện thoại hợp lệ
              </p>
            )}
            <div className="flex items-center space-x-2">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdLocationOn size={24} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ"
                  className={`w-full p-3 pl-10 border-2 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:border-[#225400] focus:ring-2 focus:ring-[#225400] transition-all duration-300 hover:border-[#225400]`}
                />
              </div>
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm">Vui lòng nhập địa chỉ</p>
            )}
            <div className="flex items-center space-x-2">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdShoppingCart size={24} className="text-gray-500" />
                </span>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Số lượng bạn muốn mua"
                  className={`w-full p-3 pl-10 border-2 ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:border-[#225400] focus:ring-2 focus:ring-[#225400] transition-all duration-300 hover:border-[#225400]`}
                />
              </div>
            </div>
            {errors.quantity && (
              <p className="text-red-500 text-sm">Vui lòng nhập số lượng</p>
            )}
            <div className="w-full flex items-center justify-center">
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-[#225400] hover:bg-[#1a4000] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover-lift transition-all duration-300 w-full"
              >
                {loading ? "Đang gửi..." : "Đăng ký"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
