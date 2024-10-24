import React from 'react';
import '../app/service/service.css';

const services = [
  'จดทะเบียนบริษัท',
  'จดทะเบียนเปลี่ยนแปลง ทุกประเภท เช่น เปลี่ยนที่อยู่ เพิ่ม/ลดกรรมการ ฯลฯ',
  'จดทะเบียนเพิ่ม/ลดสาขา',
  'จดทะเบียนภาษีมูลค่าเพิ่ม',
  'จดทะเบียนขึ้นทะเบียนนายจ้าง',
  'จดทะเบียนขอรหัสยื่นแบบออนไลน์กรมสรรพากร',
  'จดทะเบียนขอรหัสยื่นแบบออนไลน์สำนักงานประกันสังคม',
  'จดทะเบียนขอเลขประกันสังคม ลูกจ้างต่างชาติ',
  'จดทะเบียนขอเลขเสียภาษี 13 หลัก ลูกจ้างต่างชาติ',
  'จดทะเบียนถอนภาษีมูลค่าเพิ่ม',
];

const ServiceSpecifyList: React.FC = () => {
  return (
      // แยก <p> ออกจาก <ul>
      <div className="w-full px-4 md:px-8 lg:px-16 mb-4">
            {/* หัวข้อ */}
            <p className="text-white text-3xl md:text-5xl lg:text-[4rem] mb-8 md:mb-10 text-center">
                เลือกรับบริการเฉพาะด้าน
            </p>
        
            {/* รายการบริการ */}
            <ul className="w-full md:space-y-4">
                {services.map((service, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 text-white text-lg md:text-lg lg:text-2xl"
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

export default ServiceSpecifyList;
