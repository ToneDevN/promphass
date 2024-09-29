import React from 'react';
import '../app/service/service.css';

const service = [
  'ติดต่อประสานงานด้านบัญชี การเงินกับคู่ค้า ตามข้อกำหนดของบริษัท',
  'จัดทำรายงานสรุปเจ้าหนี้ ลูกหนี้',
  'ออกเอกสาร ใบเสนอราคา',
  'ออกเอกสาร ใบแจ้งหนี้',
  'ออกเอกสาร ใบกำกับภาษี',
  'ออกเอกสาร ใบเสร็จรับเงิน',
  'ตั้งเบิกค่าใช้จ่าย',
  'จัดทำเอกสารใบหัก ณ ที่จ่าย ',
];

const OutsourceServiceList: React.FC = () => {
  return (
      // แยก <p> ออกจาก <ul>
    <div className="w-full px-4 md:px-8 lg:px-16">
        {/* หัวข้อ */}
        <p className="text-white text-2xl md:text-4xl lg:text-[4rem] mb-8 md:mb-10 text-center">
            เลือกรับบริการเฉพาะด้าน
        </p>
        
        {/* รายการบริการ */}
        <ul className="w-full md:space-y-4">
            {service.map((service, index) => (
            <li
                key={index}
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 text-white text-lg md:text-2xl lg:text-3xl"
            >
                {/* วงกลม */}
                <div className="hidden md:flex border-4 border-[#174264] rounded-full h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"></div>
        
                {/* กล่องข้อความ */}
                <div className="border-4 border-[#174264] rounded-full flex justify-center items-center shadow-lg w-full p-4">
                {service}
                </div>
            </li>
            ))}
        </ul>
    </div>
    

  );
};

export default OutsourceServiceList;
