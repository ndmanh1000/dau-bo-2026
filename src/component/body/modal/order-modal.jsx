import React, { useState, useEffect } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Button, Modal } from "flowbite-react";
import { CiShoppingCart } from "react-icons/ci";
import of2 from "./of2.png";
import bigsale1 from "./bigsale1.png";
import bglun from "./bglun.png";
import { VscSend } from "react-icons/vsc";
import axios from "axios";

export default function OrderModal() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    quantity: "",
    address: "",
  });
  const [formError, setFormError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.fullName.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.quantity.trim() === "" ||
      formData.address.trim() === ""
    ) {
      setFormError(true);
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setFormError(true);
      enqueueSnackbar("Số điện thoại không hợp lệ. Vui lòng nhập lại!", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }

    setFormError(false);

    setLoading(true);

    axios({
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbyVGwOS0x69ZwmutKAD-1v7eSLZHrUUyrKOJvWBTc9zjMDEUlhLgpVbA2D56zi7RhKm/exec",
      data: {
        Name: formData.fullName,
        Phone: formData.phoneNumber,
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

        setSubmitted(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          quantity: "",
          address: "",
        });
        setOpenModal(false);
      })
      .catch(function (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
        enqueueSnackbar("Có lỗi xảy ra khi gửi yêu cầu", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      });
  };

  useEffect(() => {
    if (openModal) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [openModal]);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="w-full sm:w-auto border border-[#E02635] bg-[#E02635] text-white hover:bg-[#c01e2d] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up overflow-hidden"
      >
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <CiShoppingCart size={18} className="sm:w-5 sm:h-5 animate-bounce-slow flex-shrink-0" />
          <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">Đặt hàng ngay</p>
        </div>
      </Button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="7xl"
        className="min-h-[80vh]"
      >
        <Modal.Header className="border-0"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="grid lg:grid-cols-2 w-full min-h-[70vh]">
            <div
              id="endow"
              className="bg-cover bg-center bg-no-repeat min-h-96 relative lg:min-h-[70vh] animate-fade-in-left"
              style={{ backgroundImage: `url(${bglun})` }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-full flex flex-col items-center justify-center gap-3 animate-scale-in">
                  <img
                    src={bigsale1}
                    alt="bigsale1"
                    className="object-contain max-w-xs animate-bounce-slow"
                    sizes="20"
                  />
                  <div className="w-full max-w-md flex flex-row items-center justify-around gap-2">
                    <div className="border-4 border-[#E1AE25] bg-[#08A950] w-full h-12 flex flex-row items-center justify-center rounded-bl-3xl rounded-tr-3xl shadow-lg hover-lift">
                      <p className="text-white text-sm font-medium">
                        Dầu quả bơ ép lạnh
                      </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-1">
                      <p className="text-[#01A848] font-normal text-sm">Giảm chỉ còn</p>
                      <p className="text-[#CC2330] font-bold text-2xl animate-pulse-slow">
                        250.000đ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-4 w-full max-w-md animate-fade-in-up">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Họ và tên"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] transition-all duration-300 hover:border-[#01A848]"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] transition-all duration-300 hover:border-[#01A848]"
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Số lượng"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] transition-all duration-300 hover:border-[#01A848]"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] transition-all duration-300 hover:border-[#01A848]"
                  />
                  {formError && (
                    <p className="text-red-500 animate-shake text-sm font-medium">
                      Vui lòng điền đầy đủ thông tin và kiểm tra lại số điện
                      thoại!
                    </p>
                  )}
                  <div className="flex gap-4 items-center justify-center">
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-[#225400] hover:bg-[#1a4000] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover-lift transition-all duration-300 w-full"
                    >
                      <div className="w-full flex items-center justify-center gap-3">
                        <VscSend className={loading ? "animate-pulse-slow" : ""} />
                        <p className="font-medium">
                          {loading ? "Đang gửi..." : "Gửi thông tin"}
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#01A848] flex items-center justify-center p-6 animate-fade-in-right">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={of2}
                  alt="of2"
                  className="rounded-xl w-full h-auto object-contain max-w-md animate-float"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </>
  );
}
