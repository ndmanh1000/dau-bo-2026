"use client";

import { Accordion } from "flowbite-react";

export default function Accordion2() {
  return (
    <Accordion className="space-y-2">
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Hỗ Trợ Giảm Cân
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Axit oleic trong dầu bơ có thể giúp tăng cường quá trình chuyển hóa
            và là một phần của chế độ ăn uống lành mạnh.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Chăm Sức Khỏe Toàn Diện
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Từ việc cải thiện sức khỏe tim mạch, giảm cholesterol, đến việc hỗ
            trợ giảm cân và ngăn ngừa lão hóa, dầu bơ mang lại nhiều lợi ích sức
            khỏe quan trọng.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Phù Hợp Mọi Lứa Tuổi
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Dầu bơ phù hợp cho mọi người từ trẻ em, người lớn, đến người già,
            cung cấp một nguồn dinh dưỡng lành mạnh cho cả gia đình.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Sản Phẩm Chất Lượng Cao
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Sản phẩm thường được sản xuất theo quy trình tiêu chuẩn cao, đảm bảo
            chất lượng và độ tinh khiết của dầu, mang lại trải nghiệm tốt nhất
            cho người tiêu dùng.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Bảo Vệ Môi Trường
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Sản xuất dầu bơ ép lạnh không yêu cầu sử dụng hóa chất độc hại, phản
            ánh cam kết với việc bảo vệ môi trường và phát triển bền vững.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
