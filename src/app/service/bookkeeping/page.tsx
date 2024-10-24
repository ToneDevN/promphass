import AccountingService from "@/component/AccountService";
import AccountingServiceCard from "@/component/AccountServiceCard";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";

export default function Bookkeeping() {
    return (
        <div>
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
            {/* ทำบัญชีและยื่นภาษี */}
            <section id="section2" className="bg-[#150E60]">
                {/* Section 1 */}
                <div className="container min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 text-[#150E60] px-4 lg:px-4 py-12">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-white">
                    <p className="text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-10 font-bold">
                        บริการทำบัญชีและยื่นภาษี
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl mb-6 lg:mb-10" style={{ lineHeight: '1.5' }}>
                        &emsp; <strong>PHS Scale UP Accounting</strong> เป็นผู้เชี่ยวชาญด้านการบริการทำบัญชีและภาษีที่ครบวงจร ด้วยทีมงานมืออาชีพที่มีความรู้และประสบการณ์ในการจัดการงานด้านบัญชีและภาษีอย่างใกล้ชิดและเป็นกันเอง เพื่อตอบสนองความต้องการของธุรกิจขนาดเล็กและบุคคลทั่วไปอย่างครบถ้วน เรามุ่งมั่นให้บริการที่ตรวจสอบได้และถูกต้องตามมาตรฐาน เพื่อให้ลูกค้าได้รับผลลัพธ์ที่ดีที่สุด
                    </p>
                    <ul className="text-lg md:text-2xl lg:text-3xl list-disc list-outside ml-8 md:ml-20 lg:ml-40 space-y-4 lg:space-y-10">
                        <li>บริการจัดทำบัญชี</li>
                        <li>บริการยื่นภาษี</li>
                        <li>งบการเงินสำหรับผู้บริหาร</li>
                        <p className='text-[#b8b8b8]'>&emsp;รายเดือน / รายไตรมาส / รายปี</p>
                    </ul>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <img src="/images/AccountingImage.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className='bg-[#cfe6ff]'>
                    <div className='container min-h-screen mx-auto flex content-center justify-center text-center pt-20'>
                    <AccountingService />
                    </div>
                </div>

                {/* Section 3 */}
                <div className='bg-[#7574fe]'>
                    <div className='container min-h-screen mx-auto flex content-center justify-center text-center pt-20'>
                    <AccountingServiceCard />
                    </div>
                </div>
            </section>
        </div>
    )
}