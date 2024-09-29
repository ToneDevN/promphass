import './about.css'

export default function About() {
    return (
        <div className="flex flex-col text-center min-h-screen w-full bg-[#cfe6ff]">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full w-full p-8 md:p-16 lg:p-28 gap-8">
                {/* Image Section */}
                <div className="flex justify-center">
                <img src="/images/aboutPicture.png" alt="" className="w-full md:w-2/3 lg:w-2/3" />
                </div>

                {/* Contact Information */}
                <div className="flex flex-col h-full w-full justify-between text-[#150E60] text-lg md:text-3xl lg:text-4xl space-y-8">
                <p className="place-self-center text-3xl md:text-5xl lg:text-6xl font-bold">ติดต่อเรา</p>

                {/* Phone */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
                    <img src="/images/about/Phone.png" alt="" className="h-24 md:h-36 lg:h-56" />
                    <div className="py-6 md:py-8 w-full md:w-1/2 rounded-3xl text-center bg-slate-100">097-0759389</div>
                </div>

                {/* Line */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
                    <img src="/images/about/Line.png" alt="" className="h-24 md:h-36 lg:h-56" />
                    <div className="py-6 md:py-8 w-full md:w-1/2 rounded-3xl text-center bg-slate-100">ID : @hwo4025m</div>
                </div>

                {/* Facebook */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
                    <img src="/images/about/facebook.png" alt="" className="h-24 md:h-36 lg:h-56" />
                    <div className="py-6 md:py-8 w-full md:w-1/2 rounded-3xl text-center bg-slate-100">PHS ScaleUp Accounting</div>
                </div>
                </div>
            </div>

            {/* Address Section */}
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-500 mt-8 lg:mt-12">
                ที่อยู่ 11/2 อาคารพี 23 ชั้นที่ 11 ซอยสุขุมวิท 23 (ประสานมิตร) แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110
            </p>
        </div>

    );
}