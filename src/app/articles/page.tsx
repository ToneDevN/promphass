import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./articles.css";


export default function Service() {
    return (      
        <div className="bg-[#cfe6ff]">
            <a href="#"  className="fixed bottom-8 z-50 right-8 w-16 h-16 bg-[#150E60] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition circle">
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>

            {/* การยื่นแบบ ภงด.51 */}
            <section id="section1" className='bg-[#cfe6ff]'>
              <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center text-center'>      
                {/* Left Column */}
                <div className='flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-28 min-h-screen text-[#150e60]'>
                  <div className='bg-[#150E60] custom-background w-full lg:w-2/3 mx-auto'>
                    <div className="custom-box flex items-center w-full">
                      <span className="text-xl md:text-4xl lg:text-5xl font-bold text-blue-700 flex-1 pr-6 border-black border-r-2 mr-4">
                        การยื่นแบบ ภงด.51
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full">
                        <svg
                          className="h-full text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-base  md:text-2xl lg:text-4xl mb-8 md:mb-10 lg:mb-10 text-left leading-relaxed">
                    ภงด.51 คือ แบบแสดงรายการภาษีเงินได้นิติบุคคลสำหรับครึ่งรอบระยะเวลาบัญชี (6 เดือน)
                  </p>
                  <img src="/images/service/articlesPicture1.png" alt="Building" className="w-full h-[10rem] md:h-[15rem] lg:h-[20rem] bg-cover rounded-lg mb-6" />
                  <p className="text-sm md:text-2xl lg:text-3xl text-center rounded-t-[2rem] px-4 xl:mx-8 leading-relaxed bg-[#3282f6]">
                    กำหนดยื่นแบบ ภายในวันที่ 31 สิงหาคมของทุกปี
                  </p>
                  <p className="text-sm md:text-2xl lg:text-3xl text-center rounded-[2rem] px-4 leading-relaxed bg-[#3282f6]">
                    แต่ปีนี้ตรงกับวันหยุดราชการ เลื่อนเป็นวันที่ 2 กันยายน 2567
                  </p>
                  <div className='flex mt-10'>
                    <img src="/images/service/articlesPicture2.png" alt="Building" className="h-[6rem] md:h-[8rem] lg:h-[10rem] bg-cover rounded-lg" />
                    <p className="text-lg md:text-2xl lg:text-4xl mb-4 text-center leading-loose">
                      อย่าลืม!!!!! <br /> ยื่นภาษีกลางปี แบบ ภงด.51 กันนะ
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-28 min-h-screen text-[#150e60]'>
                  <p className='text-2xl md:text-3xl lg:text-4xl underline mb-8 md:mb-10 lg:mb-10 text-center leading-loose place-self-start'>
                    บริษัทหรือห้างหุ้นส่วนนิติบุคคล<br />มีหน้าที่ยื่นแบบ ภงด.51
                  </p>
                  <div className='flex flex-col h-full items-start' style={{ backgroundImage: "url('/images/service/BackgrountArticle.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <img src="/images/articles/arrow1.png" alt="Building" className="h-16 md:h-24 lg:h-32 ml-12 md:ml-24" />
                    <div className="flex items-center">
                      <h3 className="text-sm md:text-lg lg:text-2xl bg-[#150e60] text-white text-center p-2 md:p-4 h-16 md:h-20 lg:h-24 w-64 md:w-80 rounded-[2rem] border-4 border-dashed border-yellow-400">
                        ไม่ยื่นแบบ ภงด.51
                      </h3>
                      <img src="/images/articles/arrow2.png" alt="Building" className="h-8 md:h-10 lg:h-12 mr-8 md:mr-10" />
                      <ul className="text-left list-disc list-outside text-sm md:text-lg lg:text-xl">
                        <li>เสียเงินเพิ่ม 20%ของกึ่งหนึ่งของ CIT<br /> ตามภงด.50 (ถ้ามี)</li>
                        <li>ค่าปรับอาญาตาม มาตรา35</li>
                      </ul>
                    </div>

                    <img src="/images/articles/arrow1.png" alt="Building" className=" h-16 md:h-24 lg:h-32 ml-12 md:ml-24" />

                    <div className="flex items-center">
                      <h3 className="text-sm md:text-lg lg:text-2xl bg-[#150e60] text-white text-center p-2 md:p-4 h-16 md:h-20 lg:h-24 w-64 md:w-80 rounded-[2rem] border-4 border-dashed border-yellow-400">
                        ยื่นแบบ ภงด.51 ล่าช้า
                      </h3>
                      <img src="/images/articles/arrow2.png" alt="Building" className="h-8 md:h-10 lg:h-12 mr-8 md:mr-10" />
                      <ul className="text-left list-disc list-outside text-sm md:text-lg lg:text-xl">
                        <li>เสียเงินเพิ่ม 20%ของกึ่งหนึ่งของ CIT<br /> ตามภงด.51 (ถ้ามี)</li>
                        <li>ค่าปรับอาญาตาม มาตรา35</li>
                      </ul>
                    </div>

                    <img src="/images/articles/arrow1.png" alt="Building" className=" h-16 md:h-24 lg:h-32 ml-12 md:ml-24" />

                    <div className="flex items-center">
                      <h3 className="text-sm md:text-lg lg:text-2xl leading-tight bg-[#150e60] text-white text-center p-2 md:p-4 w-64 md:w-80 rounded-[2rem] border-4 border-dashed border-yellow-400">
                        ยื่นแบบ ภงด.51 โดยแสดงประมาณการขาดไปเกิน 25% โดยไม่มีเหตุอันสมควร
                      </h3>
                      <img src="/images/articles/arrow2.png" alt="Building" className="h-8 md:h-10 lg:h-12 mr-8 md:mr-10" />
                      <ul className="text-left list-disc list-outside text-sm md:text-lg lg:text-xl">
                        <li>เสียเงินเพิ่ม 20%ของ CIT ที่ชำระขาดไป</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            
            {/* การจัดเก็บเอกสารทางบัญชีและภาษี */}
            <section id="section2" className='bg-[#cfe6ff]'>
              <div className='min-h-screen p-8 md:p-16 lg:p-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-[#150E60] gap-8'>
                  {/* Left Column */}
                  <div className='text-left flex flex-col'>
                    <div className='flex items-start'>
                      <p className='text-2xl md:text-5xl lg:text-7xl font-bold'>การจัดเก็บเอกสาร<br />ทางบัญชีและภาษี</p>
                      <img src="/images/articles/articlePicture1.png" alt="Building" className="h-24 md:h-32 lg:h-[8rem] self-end ml-4 md:ml-8 lg:ml-16" />
                    </div>
                    <p className='text-lg md:text-2xl lg:text-3xl'>พระราชบัญญัติทางบัญชี พ.ศ.2543 กำหนดไว้</p>
                  </div>

                  {/* Right Column */}
                  <div className='text-left text-lg md:text-2xl lg:text-3xl'>
                    <p>ผู้ประกอบการมีหน้าที่ตามกฎหมายในการเก็บเอกสารทางบัญชี<br />และภาษีตามที่กฎหมายกำหนด</p>
                    <div className="flex mt-4 md:mt-6 lg:mt-8 items-start w-full ml-6">
                      <ul className='text-left list-disc'>
                        <li>เอกสารอะไรบ้างที่ต้องเก็บ</li>
                        <li>ต้องเก็บนานเท่าไหร่</li>
                      </ul>
                      <img src="/images/articles/articlePicture2.png" alt="Building" className="h-24 md:h-32 lg:h-[8rem] ml-10 md:ml-16 lg:ml-20" />
                    </div>
                  </div>
                </div>

                {/* Table Section */}
                <div className='w-full mt-8'>
                  <table className='w-full border-collapse border border-[#150E60]'>
                    <thead className='bg-[#150E60]'>
                      <tr className='text-lg md:text-3xl lg:text-5xl'>
                        <th className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>เอกสารที่ต้องเก็บ</th>
                        <th className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>ระยะเวลาจัดเก็บ</th>
                      </tr>
                    </thead>
                    <tbody className='text-[#150E60] text-sm md:text-2xl lg:text-3xl'>
                      <tr className='border-collapse border-2 md:border-4 border-[#483dc6]'>
                        <td className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>
                          <p className='text-lg md:text-2xl lg:text-3xl underline mb-4'>บัญชีโดยบัญชี</p>
                          <ol className='list-decimal text-base md:text-2xl lg:text-3xl ml-4 md:ml-8 lg:ml-16 space-y-2'>
                            <li>บัญชีรายวัน ได้แก่ บัญชีเงินสด บัญชีธนาคาร บัญชีรายวันซื้อ บัญชีรายวันขาย บัญชีรายวันทั่วไป</li>
                            <li>บัญชีแยกประเภท ได้แก่ บัญชีแยกประเภทสินทรัพย์ หนี้สินและทุน,รายได้และค่าใช้จ่าย,ลูกหนี้ และเจ้าหนี้</li>
                            <li>บัญชีสินค้า</li>
                            <li>บัญชีรายวัน บัญชีแยกประเภทอื่น และบัญชีแยกประเภทย่อยตามความจำเป็นของธุรกิจ</li>
                          </ol>
                        </td>
                        <td className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>ไม่น้อยกว่า 5 ปีนับแต่วันปิดบัญชี แต่ต้องไม่เกิน 7 ปี</td>
                      </tr>

                      <tr>
                        <td className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>
                          <p className='text-lg md:text-2xl lg:text-3xl underline mb-4'>เอกสารที่ต้องใช้ประกอบการลงบัญชี (เอกสารหลักฐานที่ใช้ในการลงบัญชี)</p>
                          <ol className='list-decimal text-base md:text-2xl lg:text-3xl ml-4 md:ml-8 lg:ml-16 space-y-2'>
                            <li>เอกสารที่จัดทำขึ้นโดยบุคคลภายนอก ได้แก่ ใบเสร็จรับเงิน ใบแจ้งหนี้ ใบกำกับภาษีซื้อ ใบส่งของ เป็นต้น</li>
                            <li>เอกสารที่จัดทำขึ้นโดยผู้มีหน้าที่จัดทำบัญชี เพื่อออกให้บุคคลภายนอก ได้แก่ ใบสำคัญรับ ใบสำคัญจ่าย ใบเสร็จรับเงิน ใบแจ้งหนี้ ใบกำกับภาษีขาย เป็นต้น</li>
                            <li>เอกสารที่จัดทำขึ้นโดยผู้มีหน้าที่จัดทำบัญชี เพื่อใช้ในกิจการของตน ได้แก่ ใบเบิกเงินทดรองจ่าย ใบเบิกเงินสดย่อย ใบเบิกค่าเดินทาง เป็นต้น</li>
                          </ol>
                        </td>
                        <td className='border-collapse border-2 md:border-4 border-[#483dc6] p-4 md:p-8 lg:p-16'>ไม่น้อยกว่า 5 ปีนับแต่วันปิดบัญชี แต่ต้องไม่เกิน 7 ปี</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>


            {/* มาตรการลดหย่อนภาษี 2567  */}
            <section id="section3">
              <div className="min-h-screen bg-[#2326aa] p-8 md:p-16 lg:p-28">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                  <img src="/images/articles/articlePicture3.png" alt="Building" className="hidden lg:flex h-[10rem] md:h-[15rem]  xl:h-[12rem] self-end lg:ml-16 mb-6 lg:mb-0" />
                  <div className='text-center lg:px-8'>
                    <p className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4'>
                      มาตรการลดหย่อนภาษี 2567<br />กระตุ้นการท่องเที่ยวเมืองรอง 55 จังหวัด
                    </p>
                    <p className='text-lg md:text-2xl lg:text-3xl bg-[#150e60] rounded-full p-2 md:p-4 lg:p-6 m-4'>
                      ตั้งแต่วันที่ 1 พฤษภาคม - 30 พฤศจิกายน 2567
                    </p>
                    <p className='text-base md:text-2xl lg:text-3xl p-4 md:p-6'>
                      <u>สำหรับบุคคลธรรมดา</u> ค่าบริการท่องเที่ยว ค่าที่พักในเมืองรอง <br />
                      สามารถหักค่าใช้จ่ายในการคำนวณภาษีเงินได้บุคคลธรรมดา ได้ไม่เกิน 15,000 บาท
                      <br /><u>นิติบุคคล</u>จัดสัมมนาเมืองรองหักรายจ่ายได้ 2 เท่า
                    </p>
                  </div>
                  <img src="/images/articles/articlePicture4.png" alt="Building" className="hidden lg:flex h-[10rem] md:h-[15rem] xl:h-[12rem] self-end lg:ml-16 mb-6 lg:mb-0" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-lg md:text-2xl lg:text-3xl mt-8">
                  {/* บุคคลธรรมดา */}
                  <div className="relative px-6 md:px-8 lg:px-12 py-8 bg-[#473dc6] rounded-xl text-center">
                    <img src="/images/articles/articlePicture5.png" alt="Building" className="hidden xl:flex absolute bottom-0 -right-4 h-[10rem] md:h-[12rem] lg:h-[15rem] self-end" />
                    <p className='text-2xl md:text-3xl lg:text-4xl mb-4'>บุคคลธรรมดา</p>
                    <p className='text-left'>สิทธิประโยชน์ทางภาษี การท่องเที่ยวเมืองรอง สามารถหักค่าใช้จ่ายตามที่จ่ายจริง แต่ไม่เกิน 15,000 บาท</p>
                    <ul className='list-disc text-left ml-8 md:ml-12 lg:ml-16 mt-4'>
                      <li>ผู้ประกอบธุรกิจนำเที่ยว</li>
                      <li>ค่าที่พักในโรงแรม</li>
                      <li>ค่าที่พักในโฮมสเตย์ไทย</li>
                      <li>ค่าที่พักในสถานที่พักที่ไม่ใช่โรงแรม</li>
                    </ul>
                    <p className='text-center underline mt-6 mb-4'>เอกสารประกอบลดหย่อน</p>
                    <p className='text-left'>ใบกำกับภาษีแบบเต็มรูปแบบอิเล็กทรอนิกส์ (e-Tax invoice)</p>
                  </div>

                  {/* นิติบุคคล */}
                  <div className="relative px-6 md:px-8 lg:px-12 py-8 bg-[#473dc6] rounded-xl text-left">
                    <div className='hidden absolute xl:flex bottom-0 right-0 space-x-2'>
                      <img src="/images/articles/articlePicture6.png" alt="Building" className="h-[6rem] md:h-[8rem] lg:h-[9rem]" />
                      <img src="/images/articles/articlePicture7.png" alt="Building" className="h-[6rem] md:h-[8rem] lg:h-[9rem]" />
                      <img src="/images/articles/articlePicture8.png" alt="Building" className="h-[6rem] md:h-[8rem] lg:h-[9rem]" />
                    </div>
                    <p className='text-2xl md:text-3xl lg:text-4xl text-center mb-4'>นิติบุคคล</p>
                    <p>สิทธิประโยชน์ทางภาษี</p>
                    <ul className='list-disc ml-8 md:ml-12 lg:ml-16'>
                      <li>หักรายจ่ายได้ 2 เท่า สำหรับอบรมสัมนาที่จัดในจังหวัดท่องเที่ยวเมืองรอง</li>
                      <li>หักรายจ่ายได้ 1.5 เท่า นอกเหนือจากเมืองรองหรือสามารถแยกได้ว่าเกิดขึ้นในที่ใด</li>
                    </ul>
                    <p className='text-center underline mt-6 mb-4'>ค่าใช้จ่ายเข้าร่วมมาตราการ</p>
                    <ul className='flex flex-col lg:flex-row list-disc'>
                      <li className='lg:w-[50%]'>
                        ค่าใช้จ่ายในการอบรม
                        <ul className='ml-4 md:ml-8'>
                          <li>- ค่าห้องสัมมนา</li>
                          <li>- ค่าห้องพัก</li>
                          <li>- ค่าขนส่ง</li>
                          <li>- รายจ่ายอื่นๆ</li>
                        </ul>
                      </li>
                      <li className='mt-4 lg:mt-0'>
                        ค่าบริการของผู้ประกอบการธุรกิจนำเที่ยวเพื่อการอบรม
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>




        </div>

    );
}