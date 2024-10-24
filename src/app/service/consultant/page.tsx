import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";

export default function Consultant() {
    return (
        <div>
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
            {/* ที่ปรึกษา */}
            <section id="section6" className="bg-[#150E60]">
                {/* Section Content */}
                <div className="min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 p-8 md:p-16 lg:p-28 bg-[#cfe6ff]">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-[#150E60]">
                    <p className="text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
                        บริการที่ปรึกษาด้านบัญชีและภาษีอากร
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl" style={{ lineHeight: '1.5' }}>
                        &emsp; บริการที่ปรึกษาด้านบัญชีและภาษีอากรของ PHS ScaleUp Accounting มอบการสนับสนุนครบวงจรในด้านบัญชีและภาษี รวมถึงการให้คำปรึกษาเกี่ยวกับการทำบัญชี การวางแผนภาษี และการปฏิบัติตามกฎหมาย เรามีทีมงานนักบัญชีและผู้เชี่ยวชาญเฉพาะด้านที่พร้อมดูแลและแก้ไขปัญหาให้บัญชีและภาษีของคุณเป็นเรื่องง่าย เป็นระบบ และถูกต้อง เพื่อให้สอดคล้องกับทิศทางการเติบโตของธุรกิจและตอบสนองความต้องการของคุณอย่างครบถ้วน
                    </p>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <img src="/images/TaxImage.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>

                    {/* Buttons Section */}
                    <div className='lg:col-span-5 flex flex-col lg:flex-row justify-between items-center text-black text-xl md:text-3xl lg:text-5xl space-y-4 lg:space-y-0'>
                    <div className='bg-[#3282f6] rounded-lg border-4 border-[#89949f] p-6 md:p-8 text-center w-full lg:w-auto'>
                        ให้คำปรึกษาปัญหาด้านบัญชี
                    </div>
                    <div className='bg-[#3282f6] rounded-lg border-4 border-[#89949f] p-6 md:p-8 text-center w-full lg:w-auto'>
                        ให้คำปรึกษาปัญหาด้านภาษี
                    </div>
                    <div className='bg-[#3282f6] rounded-lg border-4 border-[#89949f] p-6 md:p-8 text-center w-full lg:w-auto'>
                        ให้คำปรึกษาทางการเงิน
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}