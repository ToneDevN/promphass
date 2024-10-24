import ValidateAccountCard from "@/component/ValidateAccountCard";
import ValidateAccountList from "@/component/ValidateAccountList";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../service.css";

export default function CheckAccount() {
    return (
        <div>
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>
            {/* ตรวจสอบบัญชี */}
            <section id="section3" className="bg-[#150E60]" >
                {/* Section 1: บริการตรวจสอบบัญชี */}
                <div className="min-h-screen mx-auto flex flex-col justify-center content-center text-center text-[#150E60] bg-[#cfe6ff] px-4 md:px-16 lg:px-28 py-8 lg:py-0">
                    <h1 className="text-3xl md:text-4xl lg:text-[5rem] font-bold mb-8">
                    บริการตรวจสอบบัญชี
                    </h1>
                    <p className="text-lg md:text-2xl lg:text-3xl mb-8 lg:mb-10 text-left" style={{ lineHeight: '1.5' }}>
                    &emsp;&emsp; การตรวจสอบบัญชีเป็นกระบวนการสำคัญที่ใช้ในการตรวจสอบสมุดบัญชี รายการทางบัญชี เอกสารประกอบการลงบัญชี และหลักฐานอื่น ๆ ที่เกี่ยวข้องกับการบันทึกบัญชีของบุคคลหรือองค์กร เพื่อพิจารณาว่ารายการต่าง ๆ ถูกบันทึกไว้อย่างถูกต้องและเป็นไปตามมาตรฐานการบัญชี รวมถึงปฏิบัติตามกฎระเบียบและกฎหมายที่เกี่ยวข้อง บริการของ PHS ScaleUp Accounting มุ่งเน้นให้การตรวจสอบบัญชีและการทำบัญชีที่เป็นมาตรฐานและเชื่อถือได้ ซึ่งดำเนินการโดยผู้เชี่ยวชาญอย่างผู้สอบบัญชีหรือ CPA ซึ่งเป็นบุคคลภายนอกที่ไม่มีส่วนเกี่ยวข้องกับกิจการ ช่วยลดความลำเอียงและสามารถแสดงความเห็นอิสระได้ ในกรณีที่พบข้อบกพร่องหรือการทุจริต ผู้ตรวจสอบจะรายงานประเด็นดังกล่าวให้ผู้บริหารทราบ เพื่อให้ธุรกิจดำเนินไปอย่างโปร่งใสและถูกต้องตามกฎหมาย
                    </p>
                    <img src="/images/service/ValidateAccount.png" alt="validateAccount" className='h-48 md:h-64 lg:h-1/3 w-full md:w-2/3 place-self-center object-cover' />
                </div>

                {/* Section 2: ValidateAccountList */}
                <div className='container min-h-screen mx-auto flex content-center justify-center text-center pt-12 md:pt-20 mb-4'>
                    <ValidateAccountList />
                </div>

                {/* Section 3: ValidateAccountCard */}
                <div className='min-h-screen mx-auto bg-[#cfe6ff] flex content-center justify-center text-center py-12 md:py-20 lg:py-28 overflow-hidden'>
                    <ValidateAccountCard />
                </div>
            </section>
        </div>
    )
}