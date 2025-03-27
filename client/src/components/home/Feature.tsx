import React from 'react';
import feature1Image from '../../img/feature1.png'; 
import feature2Image from '../../img/feature2.png'; 
import feature3Image from '../../img/feature3.png'; 

const Features: React.FC = () => {
  return (
    <div className="bg-hero-gradient min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Tính năng 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center">
            <img src={feature1Image} alt="Tạo nội dung bằng AI" className="w-40 h-40 md:w-56 md:h-56" />
          </div>
          <div className="md:w-2/3 p-6 text-white">
            <h2 className="text-4xl font-semibold mb-2 text-yellow-400">Tạo nội dung bằng AI</h2>
            <p className="text-lg">
              Echo Mind giúp bạn tạo nội dung chuyên nghiệp chỉ trong vài giây. 
              Từ bài blog, quảng cáo, email đến mô tả sản phẩm, AI sẽ phân tích yêu cầu, hiểu ngữ cảnh 
              và tạo ra văn bản hấp dẫn, sáng tạo, phù hợp với đối tượng mục tiêu.
            </p>
          </div>
        </div>

        {/* Tính năng 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/3 flex justify-center">
            <img src={feature2Image} alt="Diễn đạt & viết lại thông minh" className="w-40 h-40 md:w-56 md:h-56" />
          </div>
          <div className="md:w-2/3 p-6 text-white">
            <h2 className="text-4xl font-semibold mb-2 text-yellow-400">Diễn đạt & viết lại thông minh</h2>
            <p className="text-lg">
              Không chỉ thay đổi từ ngữ, Echo Mind diễn đạt lại nội dung theo cách tự nhiên, 
              rõ ràng và mạch lạc hơn. Bạn có thể làm mới bài viết, đơn giản hóa câu văn hoặc 
              điều chỉnh phong cách phù hợp với từng mục đích mà vẫn giữ nguyên ý nghĩa.
            </p>
          </div>
        </div>

        {/* Tính năng 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center">
            <img src={feature3Image} alt="Cải thiện phong cách viết" className="w-40 h-40 md:w-56 md:h-56" />
          </div>
          <div className="md:w-2/3 p-6 text-white">
            <h2 className="text-4xl font-semibold mb-2 text-yellow-400">Cải thiện phong cách viết</h2>
            <p className="text-lg">
              Echo Mind tối ưu văn phong, từ trang trọng đến sáng tạo, giúp nội dung trở nên cuốn hút và dễ đọc. 
              AI không chỉ kiểm tra ngữ pháp mà còn tinh chỉnh câu chữ để truyền tải thông điệp hiệu quả hơn.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
