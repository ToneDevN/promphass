import "./home.css"

export default function Service() {
    return (      
        <div className="bg-[#cfe6ff]">
            <div className="text-[#150e60] min-h-screen content-center pt-28 px-8 md:px-16 lg:px-28">
                <div className="flex flex-col mx-auto">
                    {/* แถวหลัก */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 content-center gap-8 mb-8">
                        {/* คอลัมน์ข้อความ */}
                        <div className="lg:col-span-2 content-center">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold mb-6 leading-loose">
                                    รับจดทะเบียน<br />รับทำบัญชี ยื่นภาษี ปิดงบการเงิน
                                </h1>
                                <div className="flex justify-center lg:justify-start">
                                    <hr className="mb-6 hr-home w-2/3 lg:w-1/2" />
                                </div>
                                <h2 className="text-3xl md:text-3xl lg:text-6xl font-semibold mb-4">บริษัท/ห้างหุ้นส่วน</h2>
                                <br />
                                <p className="text-lg md:text-xl lg:text-3xl 2xl:text-4xl" style={{ lineHeight: '1.5' }}>
                                    &emsp;<strong>PHS ScaleUp Accounting</strong> เราคือผู้เชี่ยวชาญด้านภาษีและที่ปรึกษาที่วางใจได้ ทั้งสำหรับเจ้าของธุรกิจขนาดเล็กและผู้เสียภาษีบุคคลทั่วไป<br />
                                    &emsp;เรามุ่งมั่นให้บริการที่ตอบสนองต่อความต้องการของลูกค้าอย่างเต็มที่ พร้อมบริการทุกขั้นตอนอย่างมีประสิทธิภาพ เพื่อให้ลูกค้าได้รับผลลัพธ์ที่ดีที่สุด 
                                    ด้วยความเชี่ยวชาญและประสบการณ์ที่เข้าใจในธุรกิจต่าง ๆ เช่น ธุรกิจค้าปลีก ธุรกิจค้าส่ง การให้บริการ และการให้คำปรึกษา 
                                </p>
                            </div>
                        </div>
        
                        {/* คอลัมน์รูปภาพ */}
                        <div className="flex justify-center lg:justify-end">
                            <img src="/images/HomeImage.png" alt="Building" className="bg-cover h-[25rem] md:h-[35rem] lg:h-[50rem] rounded-lg" />
                        </div>
                    </div>
        
                    {/* ส่วนล่าง */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-6 2xl:space-x-28 mt-12 space-y-8 lg:space-y-0 mb-4">
                        <p className="text-xl md:text-2xl lg:text-lg 2xl:text-4xl text-gray-400 font-bold text-center lg:text-left">
                            หากต้องการทราบรายละเอียดบริการทั้งหมด กรุณาคลิกที่นี่
                        </p>
                        <a href="/" className="flex text-lg md:text-2xl lg:text-xl lg:ml-0 text-[#150e60] bg-[#6e9cfe] rounded-full border-4 border-[#322379] justify-center items-center p-1 lg:px-4">
                            <p className="">&ensp;Start free today &ensp;</p>
                            <p className="rounded-full bg-[#475cff] p-4">&rarr;</p>
                        </a>
                        <div className="flex space-x-8 lg:space-x-16 justify-center">
                            <a href="/about"><img src="/images/home/Phone.png" alt="" className="h-12 md:h-16 lg:h-14 2xl:h-16" /></a>
                            <a href="/about"><img src="/images/home/Line.png" alt="" className="h-12 md:h-16 lg:h-14 2xl:h-16" /></a>
                            <a href="/about"><img src="/images/home/Facebook.png" alt="" className="h-12 md:h-16 lg:h-14 2xl:h-16" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}