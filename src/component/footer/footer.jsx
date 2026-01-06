import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdWeb } from "react-icons/md";
import {
  RiCustomerService2Fill,
  RiSecurePaymentFill,
  RiTruckFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#296003] text-white py-8 animate-fade-in">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-4">
              CÔNG TY CỔ PHẦN BLUESKYIT{" "}
            </h3>
            <p className="text-sm">
              Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng cao. Đội
              ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn.
            </p>
            <p className="text-sm">
              Chuyên cung cấp sản phẩm nông nghiệp sạch từ tự nhiên
            </p>
            <p className="flex items-center text-sm">
              <MdLocationOn className="mr-2" /> Địa chỉ: Hà Nội
            </p>
            <p className="flex items-center text-sm">
              <MdPhone className="mr-2" /> Hotline:
            </p>
            <p className="flex items-center text-sm">
              <MdEmail className="mr-2" /> Email:
            </p>
            <p className="flex items-center text-sm">
              <MdWeb className="mr-2" /> Website:
            </p>
          </div>

          {/* Column 2 */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4">Chăm sóc khách hàng</h3>
            <ul>
              <li className="flex items-center mb-2 text-sm">
                <RiTruckFill className="mr-2" /> Chính sách vận chuyển - Toàn
                quốc
              </li>
              <li className="flex items-center mb-2 text-sm">
                <RiSecurePaymentFill className="mr-2" /> Chính sách thanh toán
              </li>
              <li className="flex items-center text-sm">
                <RiCustomerService2Fill className="mr-2" /> Chính sách bảo mật
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="animate-fade-in-right">
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <ul>
              <li className="flex items-center mb-2 hover-lift transition-smooth">
                <FaFacebook className="mr-2" />
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="flex items-center mb-2 hover-lift transition-smooth">
                <FaTwitter className="mr-2" />
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="flex items-center hover-lift transition-smooth">
                <FaInstagram className="mr-2" />
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-b-white w-full mt-3"></div>
        <div className="text-center mt-8">
          <p>&copy; @2023 All rights</p>
        </div>
      </div>
    </footer>
  );
}
