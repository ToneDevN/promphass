import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ServiceList from "@/component/ServiceList";
import "./service.css";
import ServiceSpecifyList from '@/component/ServiceSpecifyList';
import RegistrationSteps from '@/component/RegistrationProcess';
import AccountingService from '@/component/AccountService';
import AccountingServiceCard from '@/component/AccountServiceCard';
import ValidateAccountList from '@/component/ValidateAccountList';
import ValidateAccountCard from '@/component/ValidateAccountCard';
import MakeSalaryList from '@/component/MakeSalaryList';
import MakeSalaryCard from '@/component/MakeSelaryCard';
import OutsourceServiceList from '@/component/outsourceService';

export default function Service() {
    return (      
        <div className="bg-[#473DC6]">
            <ServiceList />

            <a href="#"  className="fixed bottom-8 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>

            {/* บริการจดทะเบียน */}
            <section id="section1" className='bg-[#cfe6ff]'>
                {/* Section 1 */}
                <div className="container min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 text-[#150E60] px-4 lg:px-0 py-12">
                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <img src="/images/ServiceImage.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="lg:col-span-3">
                        <p className="text-3xl md:text-5xl lg:text-6xl mb-6 lg:mb-10 font-bold text-center lg:text-left">
                            บริการจดทะเบียน
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-10 leading-relaxed text-center lg:text-left">
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

            
            {/* ทำบัญชีและยื่นภาษี */}
            <section id="section2">
                {/* Section 1 */}
                <div className="container min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 text-[#150E60] px-4 lg:px-0 py-12">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-white">
                    <p className="text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
                        บริการทำบัญชีและยื่นภาษี
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl mb-6 lg:mb-10 leading-relaxed">
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


            {/* ตรวจสอบบัญชี */}
            <section id="section3">
                {/* Section 1: บริการตรวจสอบบัญชี */}
                <div className="min-h-screen mx-auto flex flex-col justify-center content-center text-center text-[#150E60] bg-[#cfe6ff] px-4 md:px-16 lg:px-28 py-8 lg:py-0">
                    <h1 className="text-3xl md:text-4xl lg:text-[5rem] font-bold mb-4">
                    บริการตรวจสอบบัญชี
                    </h1>
                    <p className="text-lg md:text-2xl lg:text-3xl mb-8 lg:mb-10 text-left leading-loose">
                    &emsp;&emsp; การตรวจสอบบัญชีเป็นกระบวนการสำคัญที่ใช้ในการตรวจสอบสมุดบัญชี รายการทางบัญชี เอกสารประกอบการลงบัญชี และหลักฐานอื่น ๆ ที่เกี่ยวข้องกับการบันทึกบัญชีของบุคคลหรือองค์กร เพื่อพิจารณาว่ารายการต่าง ๆ ถูกบันทึกไว้อย่างถูกต้องและเป็นไปตามมาตรฐานการบัญชี รวมถึงปฏิบัติตามกฎระเบียบและกฎหมายที่เกี่ยวข้อง บริการของ PHS ScaleUp Accounting มุ่งเน้นให้การตรวจสอบบัญชีและการทำบัญชีที่เป็นมาตรฐานและเชื่อถือได้ ซึ่งดำเนินการโดยผู้เชี่ยวชาญอย่างผู้สอบบัญชีหรือ CPA ซึ่งเป็นบุคคลภายนอกที่ไม่มีส่วนเกี่ยวข้องกับกิจการ ช่วยลดความลำเอียงและสามารถแสดงความเห็นอิสระได้ ในกรณีที่พบข้อบกพร่องหรือการทุจริต ผู้ตรวจสอบจะรายงานประเด็นดังกล่าวให้ผู้บริหารทราบ เพื่อให้ธุรกิจดำเนินไปอย่างโปร่งใสและถูกต้องตามกฎหมาย
                    </p>
                    <img src="/images/service/ValidateAccount.png" alt="validateAccount" className='h-48 md:h-64 lg:h-1/3 w-full md:w-2/3 place-self-center object-cover' />
                </div>

                {/* Section 2: ValidateAccountList */}
                <div className='container min-h-screen mx-auto flex content-center justify-center text-center pt-12 md:pt-20'>
                    <ValidateAccountList />
                </div>

                {/* Section 3: ValidateAccountCard */}
                <div className='min-h-screen mx-auto bg-[#cfe6ff] flex content-center justify-center text-center py-12 md:py-20 lg:py-28 overflow-hidden'>
                    <ValidateAccountCard />
                </div>
            </section>


            {/* ทำเงินเดือน */}
            <section id="section4">
                {/* Section 1: บริการทำเงินเดือน */}
                <div className="min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 p-8 md:p-16 lg:p-28 bg-[#cfe6ff]">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-[#150E60]">
                    <p className="text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
                        บริการทำเงินเดือน
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl leading-loose">
                        &emsp; บริการของ PHS ScaleUp Accounting ครอบคลุมการจัดการงานทรัพยากรบุคคลอย่างครบวงจร รวมถึงการทำเงินเดือน และการจ่ายเงินเดือน เรานำเสนอโซลูชั่นที่เป็นมิตรกับผู้ใช้ซึ่งสามารถเข้าถึงระบบได้ทุกที่ทุกเวลาโดยไม่ต้องลงทุนสูง พร้อมทีมงานมืออาชีพที่คอยดูแลและสนับสนุนตลอดเวลา ด้วยความเชี่ยวชาญในการตรวจสอบบัญชีและการทำบัญชีที่เชื่อถือได้ เรามุ่งมั่นในการให้บริการที่โปร่งใสและตรงตามมาตรฐาน เพื่อให้ธุรกิจของคุณดำเนินไปอย่างมีประสิทธิภาพและเป็นไปตามกฎหมาย
                    </p>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <img src="/images/service/MakeSalary.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                    </div>
                </div>

                {/* Section 2: MakeSalaryList */}
                <div className='container bg-[#473DC6] min-h-screen mx-auto flex content-center justify-center text-center py-12 md:py-20'>
                    <MakeSalaryList />
                </div>

                {/* Section 3: MakeSalaryCard */}
                <div className='min-h-screen mx-auto flex content-center justify-center text-center bg-[#cfe6ff] py-12 md:py-28 px-8 md:px-16 lg:px-28'>
                    <MakeSalaryCard />
                </div>
            </section>


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
                    <p className="text-2xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
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


            {/* ที่ปรึกษา */}
            <section id="section6">
                {/* Section Content */}
                <div className="min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-5 content-center text-left text-lg md:text-2xl lg:text-4xl gap-8 md:gap-12 lg:gap-16 p-8 md:p-16 lg:p-28 bg-[#cfe6ff]">
                    {/* Text Content */}
                    <div className="lg:col-span-3 text-[#150E60]">
                    <p className="text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 font-bold">
                        บริการที่ปรึกษาด้านบัญชีและภาษีอากร
                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl leading-loose">
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

    );
}