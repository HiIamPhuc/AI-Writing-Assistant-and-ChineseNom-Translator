import SideBar from './step2_sidebar'
import EmailVerifyImage from '../../../img/email_verify.svg'

function Verify() {
    return (
        <div className="flex w-full justify-center items-start h-full font-barlow-condensed mt-8 gap-8 text-white">
            <div className="w-[400px] sticky top-8">
                <SideBar />
            </div>
            
            <div className="flex-1 max-w-[600px] mt-[60px]">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-7xl font-bold text-center'>XÁC MINH TÀI KHOẢN</h1>
                    <p className='text-center mt-4 text-lg'>
                        Bạn sắp hoàn thành rồi! Chúng tôi đã gửi mã xác minh đến your-email@example.com
                    </p>

                    <div>
                        <img src={EmailVerifyImage} alt="Xác minh email" className='h-100 w-100'/>
                    </div>

                    <p className='text-center text-gray-200'>
                        Chỉ cần nhấp vào liên kết trong email để hoàn thành đăng ký. 
                        Kiểm tra thư mục thư rác nếu không thấy email.
                    </p>
                </div>
            </div>
        </div>
    );
}
  
export default Verify;