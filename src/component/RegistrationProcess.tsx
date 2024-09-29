import React from 'react';

const steps = [
  { id: 1, type: 'img', src: '/images/service/icon1.png', alt: 'จองชื่อบริษัท', title: 'จองชื่อบริษัท', content:'ลูกค้าส่งชื่อ ภาษาไทย-อังกฤษ<br/>พร้อมสำเนาบัตรปชช.กรรมการให้บริษัทจองชื่อ'},
  { id: 2, type: 'arrow', src: '/images/service/arrow1.png', alt: 'icon1', arrowClass: 'h-14'},
  { id: 3, type: 'img', src: '/images/service/icon2.png', alt: 'รับข้อมูลและเอกสาร', title: 'รับข้อมูลและเอกสาร', content:'ที่ใช้ในการจัดทำแบบฟอร์ม<br/>จดทะเบียนบริษัทจากลูกค้า' },
  { id: 4, type: 'arrow', src: '/images/service/arrow1.png', alt: '', arrowClass: 'h-14' },
  { id: 5, type: 'img', src: '/images/service/icon3.png', alt: 'กรอกแบบฟอร์มจดทะเบียน', title: 'กรอกแบบฟอร์มจดทะเบียน', content:'หลังจากได้รับเอกสารจากลูกค้าครบถ้วน<br/>จัดทำแบบฟอร์ม หลังจากนั้นจะทำการนัดหมายลูกค้าเซ็นเอกสาร' },
  { id: 6, type: 'arrow3', src: '/images/service/arrow2.png', alt: 'icon1' , bgClass: 'row-span-2', arrowClass: 'h-96'}, // ใช้ row-span-2
  { id: 7, type: 'img', src: '/images/service/icon7.png', alt: 'นำส่งเอกสารจัดตั้งบริษัทให้ลูกค้า', title: 'นำส่งเอกสารจัดตั้งบริษัทให้ลูกค้า', content:'บริษัทส่งเอกสารให้ลูกค้า<br/>หลังจากได้รับเอกสารจดจัดตั้ง<br/>(หนังสือรับรอง)จาก DBD' },
  { id: 8, type: 'arrow', src: '/images/service/arrow1.png', alt: 'icon1', arrowClass: 'h-14 rotate-180' },
  { id: 9, type: 'img', src: '/images/service/icon5.png', alt: 'ดำเนินการจดทะเบียน', title: 'ดำเนินการจดทะเบียน', content:'กับกรมพัฒนาธุรกิจการค้า' },
  { id: 10, type: 'arrow', src: '/images/service/arrow1.png', alt: 'icon1', arrowClass: 'h-14 rotate-180' },
  { id: 11, type: 'img', src: '/images/service/icon4.png', alt: 'บริษัทส่งเอกสารให้ลูกค้า', title: 'บริษัทส่งเอกสารให้ลูกค้า', content:'ผู้ถือหุ้นและกรรมการเซ็นและประทับตรา เมื่อเซ็นเอกสารและส่งกลับคืน' },
];

const RegistrationSteps = () => {
  return (
    <div className="h-full w-full content-top text-center px-4 md:px-8">
      {/* หัวข้อ */}
      <p className="text-black text-1xl md:text-3xl lg:text-[4rem] m-8 md:m-12 lg:m-16 font-bold">
        ขั้นตอนการจดทะเบียน
      </p>

      {/* Grid สำหรับแต่ละ Step */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12 h-auto w-full">
        {steps.map((step) =>
          step.type === 'img' ? (
            <div key={step.id} className="flex flex-col justify-center items-center text-center h-full w-full">
              <img src={step.src} alt={step.alt} className="h-24 md:h-32 lg:h-36" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6">{step.title}</h2>
              <p className="text-base md:text-lg lg:text-xl text-black" dangerouslySetInnerHTML={{ __html: step.content ?? '' }}></p>
            </div>
          ) : step.type === 'arrow3' ? (
            <div key={step.id} className={`flex justify-center items-center text-center h-full w-full ${step.bgClass}`}>
              {/* Arrow for small screens */}
              <img src='/images/articles/arrow1.png' alt={step.alt} className="block lg:hidden h-12" />
              
              {/* Arrow for larger screens */}
              <img src={step.src} alt={step.alt} className={`hidden lg:block ${step.arrowClass}`} />
            </div>
          ) : (
            <div key={step.id} className={`flex justify-center items-center text-center h-full w-full ${step.bgClass}`}>
              {/* Arrow for small screens */}
              <img src='/images/articles/arrow1.png' alt={step.alt} className="block lg:hidden h-12" />
              
              {/* Arrow for larger screens */}
              <img src={step.src} alt={step.alt} className={`hidden lg:block ${step.arrowClass}`} />
            </div>
          )
        )}
    </div>

    </div>

  );
};

export default RegistrationSteps;
