import React from 'react';
import '../app/service/service.css';

const services = [
  'บันทึกบัญชีและภาษีประจำเดือน',
  'บันทึกบัญชี และจัดทำสรุปรายงานประจำเดือน',
  'สรุปรายงานภาษีซื้อ-ภาษีขาย',
  'ยื่นภาษีมูลค่าเพิ่ม (ภพ 30)',
  'ยื่นภาษีหัก ณ ที่จ่าย (ภงด 1,3,53)',
  'ยื่นภาษีครึ่งปี (ภงด 51)',
  'ยื่นภาษีสิ้นปี (ภงด 50)',
  'จัดทำงบการเงิน ณ สิ้นรอบ และยื่นงบการเงินต่อกระทรวงพาณิชย์',
  'บริการให้คำปรึกษาด้านบัญชีและภาษีสำหรับกิจการตลอดระยะเวลา',
];

const AccountingService: React.FC = () => {
  return (
      // แยก <p> ออกจาก <ul>
    <div className="w-full px-4 md:px-8 lg:px-16">
        {/* หัวข้อ */}
        <p className="text-[#150E60] text-2xl md:text-3xl lg:text-[4rem] mb-8 md:mb-10 text-center">
            เลือกรับบริการเฉพาะด้าน
        </p>
        
        {/* รายการบริการ */}
        <ul className="w-full md:space-y-4">
            {services.map((service, index) => (
            <li
                key={index}
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 text-[#150E60] text-xl md:text-2xl lg:text-4xl"
            >
                {/* วงกลม */}
                <div className="hidden md:flex border-4 border-[#b8b8b8] rounded-full h-12 w-12 md:h-14 md:w-14"></div>
        
                {/* กล่องข้อความ */}
                <div className="border-4 border-[#b8b8b8] rounded-full flex justify-center items-center shadow-lg w-full p-4">
                {service}
                </div>
            </li>
            ))}
        </ul>
    </div>
        

  );
};

export default AccountingService;
