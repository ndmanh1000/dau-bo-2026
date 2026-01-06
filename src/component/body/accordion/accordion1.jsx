"use client";

import { Accordion } from "flowbite-react";

export default function Accordion1() {
  return (
    <Accordion className="space-y-2">
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Tính Nguyên Chất Và Tự Nhiên
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Sản phẩm được ép từ thịt quả bơ chín mà không thêm bất kỳ hóa chất
            bổ sung nào, đảm bảo tính nguyên chất và tự nhiên, phù hợp với người
            tiêu dùng yêu thích sản phẩm sạch.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Giàu Dinh Dưỡng
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Dầu bơ chứa axit oleic lành mạnh, vitamin E, và các chất chống oxy
            hóa, hỗ trợ sức khỏe tim mạch, cải thiện làn da và tóc, và tăng
            cường sức khỏe tổng thể.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Cải Thiện Chức Năng Não
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Dầu bơ cung cấp chất dinh dưỡng cần thiết cho não bộ, hỗ trợ cải
            thiện trí nhớ và chức năng nhận thức.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Tăng Cường Hệ Miễn Dịch
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Các chất chống oxy hóa và vitamin trong dầu bơ giúp tăng cường hệ
            miễn dịch, bảo vệ cơ thể khỏi bệnh tật.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#01A848] transition-colors duration-300">
        <Accordion.Title className="bg-gradient-to-r from-white to-[#01A848]/5 hover:from-[#01A848]/10 hover:to-[#01A848]/20 transition-all duration-300 text-[#296003] font-semibold text-sm md:text-base py-4 px-4">
          Ngăn Ngừa Và Điều Trị Ung Thư
        </Accordion.Title>
        <Accordion.Content className="bg-white/50">
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Trong dầu bơ có chứa các hợp chất như axit oleic, carotenoids
            và vitamin E nó có thể kiểm tra sự tăng trưởng của các tế bào tiền
            ung thư và ung thư. Ngoài ra cũng sẽ làm giảm tác dụng phụ trong quá
            trình hoá trị liệu.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
