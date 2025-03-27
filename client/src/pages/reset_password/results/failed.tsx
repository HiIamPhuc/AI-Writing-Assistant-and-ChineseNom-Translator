import failedIcon from '../../../img/fail.svg';
import { Link } from 'react-router-dom';

function FailedReset() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-full font-barlow-condensed text-white">
            <div className='flex items-center justify-center mt-20 pt-20'>
                <img 
                src={failedIcon} 
                alt="Fail icon" 
                />
            </div>

            <h1 className='text-6xl font-bold text-center mt-4'> ĐẶT LẠI MẬT KHẨU THẤT BẠI</h1>
            <p className='text-lg mt-4'>
                Có vẻ như bạn đã cung cấp sai mật khẩu đã đăng kí. Vui lòng kiểm tra lại tài khoản email.
            </p>

            <div className='mt-10 flex justify-center items-center'>
                <Link
                    to='/signin'
                    className=' font-medium hover:opacity-90 transition-opacity py-3 px-6 rounded-3xl bg-linear-1 text-lg font-medium text-center'
                >
                    Quay về trang đăng nhập
                </Link>
            </div>
        </div>
    );
}

export default FailedReset