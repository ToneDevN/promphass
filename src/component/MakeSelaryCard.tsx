import React from 'react';
import '../app/service/service.css';

const steps = [
  { id: 1, title: 'พนักงานลงเวลาเข้าออกงาน', imgSrc: '/images/service/makeSelaryCard/icon1.png', step: 'STEP 1' },
  { id: 2, title: 'ดึงข้อมูลการลงเวลาออกมาเป็น excel', imgSrc: '/images/service/makeSelaryCard/icon2.png', step: 'STEP 2' },
  { id: 3, title: 'ลูกค้าสรุปข้อมูลที่ได้ส่งให้เรา', imgSrc: '/images/service/makeSelaryCard/icon3.png', step: 'STEP 3' },
  { id: 4, title: 'เพิ่ม/แก้ไข ข้อมูลลงเวลาใส่ใน Program', imgSrc: '/images/service/makeSelaryCard/icon4.png', step: 'STEP 4' },
  { id: 5, title: 'จัดทำ Payroll', imgSrc: '/images/service/makeSelaryCard/icon5.png', step: 'STEP 5' },
  { id: 10, title: 'จัดทำ นำส่งรายงานให้ลูกค้าตามรูปแบบที่ตกลงกัน', imgSrc: '/images/service/makeSelaryCard/icon6.png', step: 'STEP 10' },
  { id: 9, title: 'จัดทำส่งประกันสังคม ภาษีให้หน่วยงานที่เกี่ยวข้อง', imgSrc: '/images/service/makeSelaryCard/icon7.png', step:  'STEP 9'},
  { id: 8, title: 'จ่ายเงินเดือนตามวันเวลาที่กำหนดพร้อมสลิปเงินเดือน', imgSrc: '/images/service/makeSelaryCard/icon8.png', step: 'STEP 8' },
  { id: 7, title: 'จัดทำ Text File เพื่อขึ้นระบบนำจ่าย', imgSrc: '/images/service/makeSelaryCard/icon9.png', step: 'STEP 7' },
  { id: 6, title: 'ส่งสรุป Payroll ให้ลูกค้าตรวจสอบและอนุมัติ', imgSrc: '/images/service/makeSelaryCard/icon10.png', step:  'STEP 6'},
];

const stepsSortedById = [...steps].sort((a, b) => a.id - b.id);

const MakeSalaryCard = () => {
  return (
    <div className="w-full text-center px-4 md:px-8 lg:px-16">
      {/* หัวข้อ */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-[#150e60] font-bold mb-8 md:mb-12 lg:mb-16">
        กระบวนการจัดทำเงินเดือน
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
            
            {/* เงื่อนไขสำหรับหน้าจอเล็ก sm */}
            <div className={`block sm:hidden`}>
                {stepsSortedById.map((step, index) => (
                    <div key={step.id} className="text-white p-4 md:p-6 lg:p-8 flex flex-col items-center">
                    <div className={`flex flex-col items-center h-48 w-48 px-4 bg-[#473DC6] mb-4 rounded-lg shadow-lg`}>
                        <img src={step.imgSrc} alt={step.title} className="h-16 mt-4 mb-6" />
                        <p className="text-base mb-2">{step.title}</p>
                    </div>
                    <div className="bg-[#150e60] text-base text-white py-2 px-4 mt-auto rounded-lg font-bold">
                        {step.step}
                    </div>
                    </div>
                ))}
            </div>

            {/* เงื่อนไขสำหรับหน้าจอกลาง md */}
            {steps.map((step, index) => (
                    <div key={step.id} className="text-white p-4 md:p-6 lg:p-8 hidden md:flex lg:hidden  flex-col items-center">
                        <div className={`flex flex-col items-center h-48 w-48 px-4 bg-[#473DC6] mb-4 rounded-lg shadow-lg`}>
                            <img src={step.imgSrc} alt={step.title} className="h-16 mt-4 mb-6" />
                            <p className="text-base mb-2">{step.title}</p>
                        </div>
                        <div className="bg-[#150e60] text-base text-white py-2 px-4 mt-auto rounded-lg font-bold">
                            {step.step}
                        </div>
                    </div>
            ))}

            {/* เงื่อนไขสำหรับหน้าจอใหญ่ lg */}
            {steps.map((step, index) => (
                <div key={step.id} className="text-white p-4  lg:p-8 hidden lg:flex flex-col items-center">
                    <div className={`flex flex-col items-center h-[18rem] w-[12rem] px-4 mb-4 half-circle`}>
                        <img src={step.imgSrc} alt={step.title} className="h-16 mt-4 mb-12" />
                        <p className="text-2xl mb-2">{step.title}</p>
                    </div>
                    <div className={`bg-[#150e60] text-base md:text-lg lg:text-xl text-white py-4 px-12 mt-auto rounded-lg font-bold ${step.id > 5 ? 'pointer-left' : 'pointer'}`}>
                        {step.step}
                    </div>
                </div>
            ))}
      </div>
    </div>
    
  );
};

export default MakeSalaryCard;
