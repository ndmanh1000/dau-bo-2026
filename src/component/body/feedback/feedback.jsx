import React from "react";
import anh1 from "./anh1.png";
import anh2 from "./anh2.png";
import anh3 from "./anh3.png";
import { IoChevronBack } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import bgfeed from "./bgfeed.png";
import spring from "./spring.png";

const Group = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="69"
    height="45"
    viewBox="0 0 69 45"
    fill="none"
  >
    <path
      d="M55.0459 4.03451C51.5217 2.96449 47.7118 3.35455 44.4544 5.11889C41.197 6.88323 38.7589 9.87732 37.6764 13.4425C36.594 17.0077 36.9559 20.8519 38.6825 24.1294C40.4091 27.407 43.359 29.8495 46.8832 30.9195C47.4077 31.0724 47.9408 31.1938 48.4798 31.2832C46.3178 35.113 43.6805 37.152 43.6726 37.1581C43.3809 37.3869 43.1792 37.7128 43.1036 38.0771C43.028 38.4414 43.0836 38.8202 43.2604 39.1451C43.4371 39.4701 43.7234 39.7199 44.0676 39.8496C44.4118 39.9792 44.7914 39.9802 45.1379 39.8524C45.1379 39.8524 59.1438 34.8432 63.7198 22.9555C63.9234 22.4842 64.1013 22.0021 64.2527 21.5115C64.2683 21.462 64.2815 21.4118 64.2921 21.361C65.3277 17.8109 64.9377 14.0007 63.2067 10.7571C61.4758 7.51338 58.5434 5.09785 55.0459 4.03451Z"
      fill="#BDCEB1"
    />
    <path
      d="M24.1729 4.2076C20.6487 3.13758 16.8388 3.52765 13.5814 5.29199C10.3239 7.05633 7.88584 10.0504 6.80339 13.6156C5.72095 17.1808 6.08283 21.025 7.80943 24.3025C9.53603 27.5801 12.4859 30.0226 16.0102 31.0926C16.5346 31.2455 17.0677 31.3669 17.6068 31.4563C15.4448 35.2861 12.8074 37.3251 12.7995 37.3312C12.5079 37.56 12.3061 37.8859 12.2306 38.2502C12.155 38.6145 12.2106 38.9933 12.3873 39.3182C12.5641 39.6432 12.8503 39.893 13.1946 40.0227C13.5388 40.1523 13.9184 40.1533 14.2649 40.0255C14.2649 40.0255 28.2707 35.0163 32.8467 23.1286C33.0503 22.6573 33.2282 22.1752 33.3797 21.6846C33.3953 21.6351 33.4084 21.5849 33.4191 21.5341C34.4546 17.984 34.0646 14.1738 32.3337 10.9301C30.6027 7.68648 27.6704 5.27094 24.1729 4.2076Z"
      fill="#BDCEB1"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      opacity="0.4"
      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
      fill="#296003"
    />
    <path
      d="M26.5198 32.5599C26.1398 32.5599 25.7598 32.4199 25.4598 32.1199L18.3998 25.0599C17.8198 24.4799 17.8198 23.5199 18.3998 22.9399L25.4598 15.8799C26.0398 15.2999 26.9998 15.2999 27.5798 15.8799C28.1598 16.4599 28.1598 17.4199 27.5798 17.9999L21.5798 23.9999L27.5798 29.9999C28.1598 30.5799 28.1598 31.5399 27.5798 32.1199C27.2998 32.4199 26.9198 32.5599 26.5198 32.5599Z"
      fill="#296003"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      opacity="0.4"
      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
      fill="#296003"
    />
    <path
      d="M21.4794 32.5599C21.0994 32.5599 20.7194 32.4199 20.4194 32.1199C19.8394 31.5399 19.8394 30.5799 20.4194 29.9999L26.4194 23.9999L20.4194 17.9999C19.8394 17.4199 19.8394 16.4599 20.4194 15.8799C20.9994 15.2999 21.9594 15.2999 22.5394 15.8799L29.5994 22.9399C30.1794 23.5199 30.1794 24.4799 29.5994 25.0599L22.5394 32.1199C22.2394 32.4199 21.8594 32.5599 21.4794 32.5599Z"
      fill="#296003"
    />
  </svg>
);

export default function FeedBack() {
  const feedbacks = [
    {
      image: anh1,
      name: "Bạn Phạm Kim Oanh",
      content:
        "Với lối sống bận rộn, tôi luôn tìm kiếm những sản phẩm tự nhiên và đa năng. Dầu bơ ép lạnh này không chỉ tốt cho việc chế biến thức ăn mà còn là một phần quan trọng trong quy trình chăm sóc cá nhân của tôi. Tôi rất hài lòng với quyết định mua sản phẩm này và chắc chắn sẽ tiếp tục sử dụng nó.",
    },
    {
      image: anh2,
      name: "Anh Phạm Đức Duy",
      content:
        "Từ khi bắt đầu sử dụng dầu bơ ép lạnh trong chế độ ăn hàng ngày, tôi nhận thấy sức khỏe tim mạch của mình cải thiện rõ rệt. Sản phẩm này thực sự đã thay đổi cuộc sống tôi, giúp tôi cảm thấy khỏe mạnh và tràn đầy sức sống hơn.",
    },
    {
      image: anh3,
      name: "Chị Nguyễn Thuỳ Anh",
      content:
        "Khi tìm kiếm một giải pháp tự nhiên để hỗ trợ quá trình giảm cân, tôi đã phát hiện ra dầu bơ ép lạnh. Nó không chỉ giúp tôi kiểm soát cảm giác thèm ăn mà còn cung cấp năng lượng bền vững cho cơ thể suốt cả ngày. Tôi đã giảm được kích thước vòng eo mà không cảm thấy mệt mỏi hay thiếu sức sống",
    },
  ];

  return (
    <div
      style={{
        background: `url(${spring}) lightgray 50% / cover no-repeat`,
      }}
      className="w-full shadow-md"
      id="feed-back"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, #FFF -5%, rgba(255, 255, 255, 0.00) 100%)",
        }}
        className="w-full py-8 md:py-12 lg:py-16"
      >
        <div className="container-custom">
          <div
            style={{
              boxShadow: "-1px 4px 30px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(31px)",
            }}
            className="bg-white/40 rounded-3xl p-8 animate-fade-in"
          >
            <h2 className="text-base text-[#709456] pt-5 font-bold text-center mb-1 animate-fade-in-down">
              PHẢN HỒI TỪ KHÁCH HÀNG
            </h2>
            <hr className="w-20 bg-[#296003] mx-auto h-1 mb-1 animate-fade-in-down" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mt-4 font-semibold text-[#296003] animate-fade-in-down">
              VỀ SẢN PHẨM DẦU QUẢ BƠ ÉP LẠNH KEYAVO
            </h2>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 mt-16 w-full">
              {feedbacks.map((feedback, idx) => (
                <div
                  key={idx}
                  style={{
                    boxShadow:
                      "0px 4px 4px 0px rgba(153, 152, 152, 0.25) inset, -1px 4px 0px 0px rgba(41, 96, 3, 0.60), 22px -3px 49.4px 0px rgba(41, 96, 3, 0.10)",
                    animationDelay: `${idx * 0.2}s`,
                  }}
                  className={`w-full flex flex-col md:w-1/3 rounded-2xl overflow-hidden hover-lift transition-smooth ${
                    idx === 0 ? 'animate-fade-in-left' : idx === 1 ? 'animate-fade-in-up' : 'animate-fade-in-right'
                  }`}
                >
                  <div className="w-full">
                    <img src={feedback.image} alt="Bạn A" className="w-full" />
                  </div>

                  <div className="bg-white flex-grow pt-5 px-7 pb-20 relative">
                    <h3 className="text-xl text-[#296003] font-normal mb-2 text-center">
                      {feedback.name}
                    </h3>
                    <p className="text-base font-light text-[#7A7A7A] text-center">
                      {feedback.content}
                    </p>
                    <div className="float-right absolute right-4 bottom-4">
                      <Group />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full items-center justify-center flex gap-1 mt-8 pb-9">
              <div>
                <ArrowLeft />
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
