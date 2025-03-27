import React from 'react';
import mem1 from '../../img/mem1.png';
import mem2 from '../../img/mem2.png';
import mem3 from '../../img/mem3.png';
import mem4 from '../../img/mem4.png';
import mem5 from '../../img/mem5.png';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-hero-gradient min-h-screen flex flex-col items-center justify-center p-8">
            <div className="flex flex-col items-center w-full max-w-6xl">
                <div className="flex flex-wrap items-center justify-center mb-12 gap-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img src={mem1} alt="Team 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img src={mem2} alt="Team 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img src={mem3} alt="Team 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img src={mem4} alt="Team 4" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img src={mem5} alt="Team 5" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-white text-lg text-center">
                    <h1 className="text-5xl font-bold text-yellow-500 mb-4">
                        Chúng tôi là những người tạo nên Echo Mind
                    </h1>
                    <p className="mb-4">
                        Với Echo Mind, chúng tôi tin rằng trí tuệ nhân tạo không chỉ là công cụ, mà còn là người bạn đồng hành giúp con người phát triển vượt bậc. 
                        Được xây dựng trên nền tảng công nghệ tiên tiến, Echo Mind mang đến giải pháp AI mạnh mẽ, hỗ trợ bạn trong sáng tạo nội dung, tư duy chiến lược và tối ưu hiệu suất làm việc.
                    </p>
                    <p>
                        Chúng tôi hướng đến một tương lai nơi AI và con người cộng hưởng, giúp mỗi cá nhân khai phá tiềm năng tối đa. Dù bạn là nhà sáng tạo, doanh nhân hay người yêu công nghệ, 
                        Echo Mind luôn sẵn sàng đồng hành cùng bạn trên hành trình đổi mới.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;