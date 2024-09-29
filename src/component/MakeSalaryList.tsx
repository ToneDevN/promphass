import React from 'react';
import '../app/service/service.css';

const service = [
  'คำนวณเงินเดือน ภาษี ประกันสังคม เงินสะสมและอื่นๆ ให้พนักงาน',
  'จัดทำและนำส่งสลิปเงินเดือนแบบ carbon หรือ email ให้พนักงาน',
  'นำส่งข้อมูลเงินเดือนให้ลูกค้าตรวจสอบความถูกต้องและนำส่ง text file ขึ้นระบบธนาคารเพื่อทำจ่าย',
  'จ่ายเงินเดือนพนักงานตามวันและเวลาที่กำหนด',
  'จัดทำเอกสารและนำส่งภงด1, ประกันสังคม ให้หน่วยงานราชการที่เกี่ยวข้อง',
  'แจ้งชื่อเข้า-ออก ประกันสังคม',
  'จัดทำและนำส่ง ภงด 1 ก, กองทุนเงินทดแทน, ใบภาษีถูกหักณที่จ่าย(50ทวิ)สำหรับพนักงาน',
];

const MakeSalaryList: React.FC = () => {
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
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 text-white text-base md:text-2xl lg:text-3xl"
            >
                {/* วงกลม */}
                <div className="hidden md:flex border-4 border-[#174264] rounded-full h-12 w-12 md:h-14 md:w-14"></div>

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

export default MakeSalaryList;
