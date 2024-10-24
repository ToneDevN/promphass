import React from 'react';

const services = [
  { id: 1, href: '/service/companyregistration', text: 'จดทะเบียนบริษัท' },
  { id: 2, href: '/service/bookkeeping', text: 'ทำบัญชีและยื่นภาษี' },
  { id: 3, href: '/service/checkaccount', text: 'ตรวจสอบบัญชี' },
  { id: 4, href: '/service/makesalary', text: 'ทำเงินเดือน' },
  { id: 5, href: '/service/outsoutce', text: 'Outsource <br/>พนักงานบัญชี การเงิน' },
  { id: 6, href: '/service/consultant', text: 'ที่ปรึกษา' },
];

const ServiceList: React.FC = () => {
  return (
    <div className='container min-h-screen mx-auto flex flex-col items-center justify-center text-center px-4'>
      {/* ส่วนหัวข้อ */}
      <p className="text-white text-4xl md:text-5xl lg:text-[4rem] mb-8 md:mb-10 font-bold">
        งานบริการของเรา
      </p>

      {/* ส่วนของรายการ */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full">
        {services.map((service) => (
          <li key={service.id} className="flex justify-center items-center h-24 md:h-32 w-full">
            <a
              href={service.href}
              className="bg-[#150E60] text-white md:text-3xl lg:text-3xl rounded-md w-full h-full flex justify-center items-center hover:bg-blue-700 px-4"
              dangerouslySetInnerHTML={{ __html: service.text }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
