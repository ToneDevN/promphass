import React from 'react';
import '../app/service/service.css';

const validate = [
    {
        id: 1,
        title: 'การวางแผน',
        content: [
            "การพิจารณารับงานสอบบัญชี",
            "รวบรวมข้อมูลเกี่ยวกับบริษัทที่จะทำตรวจสอบ",
            "วิเคราะห์เปรียบเทียบในเบื้องต้น",
            "กำหนดระดับการมีสาระสำคัญ",
            "การประเมินความเสี่ยงในการสอบบัญชีที่ยอมรับได้และความเสี่ยงสืบเนื่อง",
            "ทำความเข้าใจระบบควบคุมภายในและประเมินความเสี่ยงจากการควบคุม",
            "พัฒนาแผนการสอบบัญชีโดยรวมและการจัดทำแนวการสอบบัญชี"
        ]
    },
    {
        id: 2,
        title: 'การปฏิบัติงานตรวจสอบ',
        content: [
            "วงจรรายได้",
            "วงจรรายจ่าย",
            "วงจรการผลิต",
            "วงจรการลงทุน",
            "วงจรการจัดหาเงิน",
            "การตรวจสอบที่สำคัญเพิ่มเติม",
        ]
    },
    {
        id: 3,
        title: 'การเสร็จสิ้น',
        content: [
            "ประเมินผลจากหลักฐานการตรวจสอบบัญชี",
            "การเสนอรายการปรับปรุงและรายการจัดประเภทบัญชี",
            "ออกรายงานการสอบบัญชี",
        ]
    }
]

const ValidateAccountCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 text-2xl md:text-3xl lg:text-4xl gap-x-12 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 lg:gap-y-16 px-4 md:px-8 lg:px-16">
            {/* หัวข้อ */}
            <div className="col-span-1 lg:col-span-3 flex justify-center items-center place-self-center text-3xl md:text-4xl lg:text-6xl text-[#150E60] font-bold content-center w-full md:w-2/3 h-full text-center">
                ขอบเขตงานของการตรวจสอบบัญชี
            </div>

            {validate.map((item, index) => (
                <div key={index} className='relative h-[30rem] lg:h-[60rem] w-full bg-[#483dc6] py-10 md:py-12 lg:py-14 px-4 md:px-6 lg:px-8 rounded-lg shadow-lg'>
                {/* วงกลมที่มีสามเหลี่ยม */}
                <div className="absolute top-[-2rem] md:top-[-3rem] left-1/2 transform -translate-x-1/2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 flex items-center justify-center">
                    <div className="bg-[#150e60] text-white rounded-full h-full w-full flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold">
                    <img src="/images/service/triangle.png" alt="triangle" className='h-8 md:h-10 lg:h-12' />
                    </div>
                </div>

                {/* ชื่อหัวข้อ */}
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 md:mb-6 lg:mb-8'>
                    {item.title}
                </h1>

                {/* แสดงรายการเนื้อหา */}
                <ul className='text-white text-left text-lg md:text-xl lg:text-2xl list-disc ml-4 md:ml-6 space-y-2 md:space-y-3 lg:space-y-4'>
                    {item.content.map((contentItem, i) => (
                    <li key={i}>{contentItem}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>

    );
}

export default ValidateAccountCard;
