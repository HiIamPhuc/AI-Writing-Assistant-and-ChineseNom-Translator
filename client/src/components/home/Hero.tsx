import heroImage from '../../img/hero.svg';
import { useAuth } from '../../context/AuthContext'; 

const Hero: React.FC = () => {
  const { isAuthenticated } = useAuth(); 

  return (
    <section className="relative flex flex-col items-center p-8">
      {/* Phần hình ảnh */}
      <div className="relative w-full max-w-6xl">
        <img src={heroImage} alt="Hero" className="mt-8 mx-auto z-0" />
        
        {/* Nút Get Started - Đặt ngay dưới hình */}
        <div className="absolute w-full flex justify-center -bottom-20">
          <button
            className="text-white font-medium px-12 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all"
            style={{
              background: 'linear-gradient(290deg, #00DFA8, #028DC9)',
            }}
            onClick={() => {
              if (isAuthenticated) {
                window.location.href = '/main'; // Chuyển hướng đến trang main nếu đã đăng nhập
              } else {
                window.location.href = '/signup'; // Chuyển hướng đến trang signup nếu chưa đăng nhập
              }
            }}
          >
            Get started
          </button>
        </div>
      </div>

      {/* Phần nội dung text */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-white font-barlow-condensed pl-32 lg:pl-86 xl:pl-[430px] pt-16 lg:pt-32 xl:pt-50">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-3 text-gradient-start text-left">Echo Mind</h1>
          <h2 className="text-3xl font-medium mb-5 text-black text-left">Writing Assistant</h2>
          <p className="text-xl mx-auto text-black text-left leading-relaxed">
            Echo Mind không chỉ là một AI thông minh – mà còn là người bạn đồng hành giúp bạn tư duy nhanh hơn, làm việc hiệu quả hơn và sáng tạo đột phá hơn. Từ trợ lý ảo đa năng đến công cụ hỗ trợ viết lách, chúng tôi mang đến giải pháp AI mạnh mẽ, trực quan và dễ sử dụng, giúp bạn tối ưu mọi khía cạnh trong cuộc sống và công việc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
