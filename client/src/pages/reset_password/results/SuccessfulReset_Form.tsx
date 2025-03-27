import happyPeopleImage from '../../../img/happy_people.svg'
import { Link } from 'react-router-dom';

export default function SuccessfulReset_Form() {
    return (
        <div className='font-barlow-condensed text-center'>
            <h1 className='text-6xl font-bold text-white mb-4'>ĐẶT LẠI MẬT KHẨU THÀNH CÔNG</h1>
            <p className='text-white text-lg'>Mật khẩu của bạn đã được cập nhật thành công!</p>
            <img 
                src={happyPeopleImage} 
                alt='Happy people' 
                className='mx-auto mt-4' />

            <div className='mt-10 flex justify-center items-center'>
                <Link
                    to='/signin'
                    className=' font-medium py-3 px-6 rounded-3xl bg-linear-1 text-lg font-medium text-center hover:opacity-90 transition-opacity'
                >
                    Quay về trang đăng nhập
                </Link>
            </div>
        </div>
    )
}