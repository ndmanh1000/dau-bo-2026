import ofusse from "./ofusse.png";
import ofusse1 from "./ofusse1.png";
import Rectanglepass from "./Rectanglepass.jpg";
import leaves1 from "./leaves1.png";
// import leaves22 from "./leaves22.png";
import { SiTicktick } from "react-icons/si";
// import { Button } from "flowbite-react";
// import { CiShoppingCart } from "react-icons/ci";
import OrderModal from "../modal/order-modal";

export default function ObjectOfUse() {
  return (
    <div
      id="object-of-use"
      className="bg-cover bg-center bg-no-repeat min-h-96 w-full py-8 md:py-12 lg:py-16 relative pt-10"
      style={{ backgroundImage: `url(${Rectanglepass})` }}
    >
      <div className="w-full absolute animate-rotate-slow">
        <img
          src={leaves1}
          alt="leaves1"
          className="object-contain opacity-60 "
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="w-full flex flex-col gap-4 items-center justify-center animate-fade-in-down">
          <p className="text-[#548035] font-semibold text-lg">
            ĐỐI TƯỢNG SỬ DỤNG
          </p>
          <p className="text-[#296003] font-semibold text-2xl md:text-3xl lg:text-4xl">
            DẦU QUẢ BƠ ÉP LẠNH KEYAVO
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-2 gap-6 mt-8">
          <div className="w-full animate-fade-in-left">
            <div className="w-full flex items-center justify-center">
              <div className="border-2 border-[#548035] bg-white h-auto w-full flex items-center justify-center p-5 rounded-lg shadow-lg hover-lift transition-smooth">
                <div className="w-full flex flex-col items-center justify-center gap-3">
                  <p>
                    Dầu bơ ép lạnh Akeyvo là lựa chọn lý tưởng cho những người:
                  </p>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Quan tâm đến sức khỏe tim mạch, giảm cholesterol, và muốn
                      tăng cường sức khỏe tổng thể thông qua chế độ ăn uống lành
                      mạnh.
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Cần chăm sóc đặc biệt về sức khỏe, bao gồm ngăn ngừa lão
                      hóa, cải thiện sức khỏe mắt và giảm viêm khớp.
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Muốn giảm cân: Dầu bơ chứa axit oleic, giúp cải thiện quá
                      trình chuyển hóa, phù hợp cho những ai đang giảm cân hoặc
                      muốn duy trì cân nặng khỏe mạnh.
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Quan tâm đến làm đẹp và chăm sóc cá nhân: Dầu bơ dưỡng ẩm
                      cho da và tóc, giảm mụn trứng cá và làm giảm nếp nhăn.
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Yêu thích nấu ăn: Dầu bơ là một nguồn dinh dưỡng tuyệt vời
                      để thêm hương vị vào các món ăn từ salad đến các món
                      chính.
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <SiTicktick size={30} className="text-[#FCA400]" />
                    <p>
                      Cần cho trẻ em và trẻ sơ sinh: Dầu bơ giúp phát triển não
                      bộ và cung cấp axit béo cần thiết cho sự phát triển khỏe
                      mạnh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 animate-fade-in-right">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center animate-float">
                <img
                  src={ofusse}
                  alt="ofusse"
                  className="object-cover hover-scale"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-4 mt-4">
                <div className="animate-fade-in-up">
                  <OrderModal />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <img src={ofusse1} alt="ofusse1" className="hover-scale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
