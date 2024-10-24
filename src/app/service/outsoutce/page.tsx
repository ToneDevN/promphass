import MakeSalaryList from "@/component/MakeSalaryList";
import MakeSalaryCard from "@/component/MakeSelaryCard";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";
import OutsourceServiceList from "@/component/outsourceService";

export default function Outsource() {
    return (
        <div className="min-w-full">
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
                         {/* Outsource พนักงานบัญชี การเงิน */}
            <section id="section5">
                {/* Section 1: บริการ OUTSOURCEพนักงานบัญชี การเงิน */}
                <div className="min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 p-8 md:p-16 lg:p-28 bg-[#cfe6ff]">
                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <img src="/images/service/Picture14.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="lg:col-span-3 text-[#150E60]">
                    <p className="text-2xl md:text-5xl lg:text-4xl mb-6 lg:mb-10 font-bold">
                        บริการ OUTSOURCEพนักงานบัญชี การเงิน
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl leading-loose">
                        &emsp; บริการ Outsource พนักงานบัญชีและการเงินของ PHS ScaleUp Accounting มอบโซลูชั่นที่ครบวงจรในการจัดการงานบัญชีและการเงิน โดยเรามีทีมผู้เชี่ยวชาญที่สามารถให้บริการทั้งการทำบัญชี การจัดทำงบการเงิน และการจัดการด้านการเงินอย่างมืออาชีพ โดยไม่ต้องมีค่าใช้จ่ายในการจ้างงานภายในสูง ทีมงานของเรามุ่งเน้นการให้บริการที่โปร่งใส เชื่อถือได้ และเป็นไปตามมาตรฐานบัญชีและกฎหมายที่เกี่ยวข้อง เราพร้อมสนับสนุนธุรกิจของคุณด้วยความเชี่ยวชาญเพื่อให้การดำเนินงานของคุณเป็นไปอย่างราบรื่นและมีประสิทธิภาพ
                    </p>
                    </div>
                </div>

                {/* Section 2: OutsourceServiceList */}
                <div className='container bg-[#473DC6] min-h-screen mx-auto flex content-center justify-center text-center py-12 md:py-20'>
                    <OutsourceServiceList />
                </div>
            </section>
        </div>
    )
}