import "../app/articles/articles.css";

const AccountingServiceCard = () => {
    return (      
        <div className="min-h-screen">
            <div className="container h-full mx-auto grid grid-cols-2 content-center text-center text-4xl gap-x-16 lg:gap-x-64 gap-y-16 p-4">
                <div className="col-span-2 flex justify-center items-center place-self-center rounded-2xl text-lg lg:text-6xl text-[#150E60] font-bold content-center bg-white w-3/5 h-24 ">บริการ บัญชีและภาษี ครบวงจร</div>
                {serviceItems.map((item) => (
                    <ServiceCard 
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    iconSrc={item.iconSrc}
                    subDescription={item.subDescription}
                    />
                ))}
            </div>
        </div>
    );
}

type ServiceCardProps = {
    number: string;
    title: string;
    description: string[];
    iconSrc: string;
    subDescription?: string | null;
}

const serviceItems: ServiceCardProps[] = [
    {
      number: "1",
      title: "ทำบัญชี",
      description: ["รับเอกสาร", "ตรวจสอบ", "ติดตามเอกสาร"],
      iconSrc: "/images/service/serviceCard/icon1.png",
    },
    {
      number: "4",
      title: "ตรวจสอบบัญชี",
      description: ["สิ้นรอบบัญชี ", "เซ็นต์รับรองงบ"],
      iconSrc: "/images/service/serviceCard/icon4.png",
    },
    {
      number: "2",
      title: "ยื่นภาษี",
      description: ["ภาษี หัก ณ ที่จ่าย", "ภาษีมูลค่าเพิ่ม", "ภงด.51,ภาษีธุรกิจเฉพาะ", "ประกันสังคม"],
      iconSrc: "/images/service/serviceCard/icon2.png",
    },
    {
      number: "5",
      title: "นำส่งงบ",
      description: ["สบช.3,บอจ.5", "ภงด.50", "ยื่น e-Filing"],
      iconSrc: "/images/service/serviceCard/icon1.png",
    },
    {
      number: "3",
      title: "บันทึกบัญชี ปิดงบ",
      description: ["รายเดือน ,ไตรมาส ,รายปี", "จัดทำรายละเอียดประกอบ งบการเงิน"],
      iconSrc: "/images/service/serviceCard/icon3.png",
    },
    {
      number: "6",
      title: "ให้คำปรึกษา",
      description: ["ให้คำปรึกษาด้านบัญชี <br/>และภาษี"],
      iconSrc: "/images/service/serviceCard/icon6.png",
    },
  ];
  

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, iconSrc, subDescription }) => {
    return (
      <div className="relative bg-white rounded-3xl max-w-full content-center p-4 md:p-8">
        {/* วงกลมแสดงหมายเลข */}
        <div className="absolute-number h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
          <div className="absolute bg-[#483dc6] text-white rounded-full h-full w-full flex items-center justify-center text-2xl md:text-4xl font-bold">
            {number}
          </div>
        </div>
      
        {/* Grid สำหรับแสดงภาพและรายละเอียด */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-full overflow-hidden py-4 lg:gap-8">
          {/* คอลัมน์รูปภาพ */}
          <div className="flex justify-center items-start p-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[#150e60]">
            <img src={iconSrc} alt="" className="h-16 md:h-24 place-self-center" />
          </div>
      
          {/* คอลัมน์ข้อความ */}
          <div className="md:p-4 text-left">
            <p className="text-[#473dc6] text-base sm:text-lg md:text-xl font-bold">{title}</p>
            <ul className="list-disc mx-4 md:mx-8">
              {description.map((content, index) => (
                <li
                  key={index}
                  className="text-black text-base md:text-xl"
                  dangerouslySetInnerHTML={{ __html: content ?? '' }}>
                </li>
              ))}
            </ul>
            {subDescription && (
              <p className="text-black text-sm md:text-xl mt-4">{subDescription}</p>
            )}
          </div>
        </div>
      </div>
      
    )
}

export default AccountingServiceCard