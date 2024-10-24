import React from 'react';
import '../app/service/service.css';

const validate = [
  'ตรวจสอบถูกต้องครบถ้วน เป็นไปตามมาตรฐานการรายงานทางการเงิน',
  'ตรวจสอบความถูกต้อง และครบถ้วนของการบันทึกบัญชี',
  'แนะนำวิธีการที่จะทำให้บริษัทของผู้ว่าจ้างประหยัดงบประมาณ แต่อยู่บนพื้นฐานความถูกต้อง',
  'ตรวจสอบในเรื่องภาษี ว่าบริษัทของผู้ว่าจ้างมีการชำระภาษีครบถ้วนและเหมาะสม',
  'รายงานข้อมูลที่ตรวจพบ ให้แก่ผู้บริหารทราบ ตามวัตถุประสงค์',
  'ให้คำแนะนำด้านการจัดการด้านภาษี',
  'ช่วยประเมิน และการวางแผนกลยุทธ์ การป้องกันการฉ้อโกง และการพัฒนางบประมาณให้คุ้มค่ามากที่สุด',
];

const ValidateAccountList: React.FC = () => {
  return (
      // แยก <p> ออกจาก <ul>
    <div className="w-full px-4 md:px-8 lg:px-16">
        {/* หัวข้อ */}
        <p className="text-white text-2xl md:text-4xl lg:text-[4rem] mb-8 md:mb-10 text-center">
            เลือกรับบริการเฉพาะด้าน
        </p>
        
        {/* รายการบริการ */}
        <ul className="w-full md:space-y-4">
            {validate.map((service, index) => (
            <li
                key={index}
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 text-white text-base md:text-2xl lg:text-2xl 2xl:text-4xl"
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

export default ValidateAccountList;
