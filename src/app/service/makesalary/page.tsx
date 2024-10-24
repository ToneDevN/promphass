import MakeSalaryList from "@/component/MakeSalaryList";
import MakeSalaryCard from "@/component/MakeSelaryCard";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";

export default function MakeSalary() {
    return (
        <div>
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
             {/* ทำเงินเดือน */}
             <section id="section4" className="bg-[#150E60]">
                {/* Section 1: บริการทำเงินเดือน */}
                <div className="min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 p-8 md:p-16 lg:p-28 bg-[#cfe6ff]">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-[#150E60]">
                    <p className="text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
                        บริการทำเงินเดือน
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl" style={{ lineHeight: '1.5' }}>
                        &emsp; บริการของ PHS ScaleUp Accounting ครอบคลุมการจัดการงานทรัพยากรบุคคลอย่างครบวงจร รวมถึงการทำเงินเดือน และการจ่ายเงินเดือน เรานำเสนอโซลูชั่นที่เป็นมิตรกับผู้ใช้ซึ่งสามารถเข้าถึงระบบได้ทุกที่ทุกเวลาโดยไม่ต้องลงทุนสูง พร้อมทีมงานมืออาชีพที่คอยดูแลและสนับสนุนตลอดเวลา ด้วยความเชี่ยวชาญในการตรวจสอบบัญชีและการทำบัญชีที่เชื่อถือได้ เรามุ่งมั่นในการให้บริการที่โปร่งใสและตรงตามมาตรฐาน เพื่อให้ธุรกิจของคุณดำเนินไปอย่างมีประสิทธิภาพและเป็นไปตามกฎหมาย
                    </p>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <img src="/images/service/MakeSalary.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>
                </div>

                {/* Section 2: MakeSalaryList */}
                <div className='container bg-[#473DC6] min-h-screen mx-auto flex content-center justify-center text-center pt-20'>
                    <MakeSalaryList />
                </div>

                {/* Section 3: MakeSalaryCard */}
                <div className='min-h-screen mx-auto flex content-center justify-center text-center bg-[#cfe6ff] py-12 md:py-28 px-8 md:px-16 lg:px-28'>
                    <MakeSalaryCard />
                </div>
            </section>
        </div>
    )
}