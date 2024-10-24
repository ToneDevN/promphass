import RegistrationSteps from "@/component/RegistrationProcess";
import ServiceSpecifyList from "@/component/ServiceSpecifyList";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";

export default function Companyregistration() {
    return (  
        <div>
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
            <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
            <section id="section1" className='bg-[#cfe6ff]'>
                {/* Section 1 */}
                <div className="container min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 text-[#150E60] px-4 lg:px-4 py-12">
                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <img src="/images/ServiceImage.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="lg:col-span-3">
                        <p className="text-3xl md:text-5xl lg:text-6xl mb-6 lg:mb-10 font-bold text-center lg:text-left">
                            บริการจดทะเบียน
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-10 text-center lg:text-left" style={{ lineHeight: '1.5' }}>
                            &emsp; <strong>PHS Scale UP Accounting</strong> เราช่วยธุรกิจขนาดเล็กและบุคคลในการระบุความต้องการทางธุรกิจและการเงิน 
                            เรามุ่งมั่นในการให้บริการจดทะเบียนธุรกิจและการบัญชี โดยสร้างความเชื่อมั่นและความสัมพันธ์ที่ดี 
                            พร้อมอยู่เคียงข้างลูกค้าตลอดเส้นทาง
                        </p>
                        <ul className="text-lg md:text-2xl lg:text-3xl list-disc list-outside ml-8 md:ml-20 lg:ml-40 space-y-6 lg:space-y-10">
                            <li>จดจัดตั้งบริษัทกระทรวงพานิชย์</li>
                            <li>จดภาษีมูลค่าเพิ่มกรมสรรพากร</li>
                            <li>จดทะเบียนนายจ้างประกันสังคม</li>
                        </ul>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='bg-[#473DC6]'>
                    <div className='container min-h-screen mx-auto flex content-center justify-center text-center pt-20'>
                        <ServiceSpecifyList />
                    </div>
                </div>

                {/* Section 3 */}
                <div className='bg-[#cfe6ff] min-h-screen mx-auto flex content-center justify-center text-center p-12 md:p-24'>
                    <RegistrationSteps />
                </div>
            </section>
        </div>
    )}