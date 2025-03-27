import validationImage from '../../../img/validation.svg'
import { Link } from 'react-router-dom';

export default function ResetVerify() {
    return (
        <div className='font-barlow-condensed text-center'>
            <h1 className='text-6xl font-bold text-white mb-8 mt-20'>KIỂM TRA EMAIL CỦA BẠN</h1>
            <p className='text-white'>
                Chúng tôi đã gửi cho bạn thông tin thiết lập lại mật khẩu đến tài khoản email của bạn. 
                Vui lòng kiểm tra email của bạn để biết thêm thông tin chi tiết.
            </p>
            <img 
                src={validationImage} 
                alt='Validation Image' 
                className='mx-auto mt-4' />
        </div>
    )
}