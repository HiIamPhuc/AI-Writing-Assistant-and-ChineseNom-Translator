import { Link } from 'react-router-dom';

export default function Forget_Form() {
    return (
        <div className="font-barlow-condensed">
            <h1 className='text-6xl font-bold text-white text-center'>QUÊN MẬT KHẨU?</h1>
            <p className='text-white text-center text-xl font-medium mt-4'> Bạn đừng lo chúng tôi sẽ giúp bạn</p>
            <div className='mt-6'>
                <label className='text-xl text-semibold text-white'>Email</label>
                    <input
                        type='email'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập tài khoản email'
                    />
            </div>

            <div className='mt-8 flex flex-col'>
                <Link
                    to='/reset-verification'
                    className='hover:opacity-90 transition-opacity ease-in-out transition-all py-3 rounded-3xl bg-linear-1 text-lg font-medium text-center'>
                        Xác minh Email
                </Link>
            </div>
            
            <div className='mt-5 flex justify-center items-center'>
                <Link
                    to='/signin'
                    className='text-gray-200 font-medium hover:underline ease-in-out transition-all'
                >
                    Quay về trang đăng nhập
                </Link>
            </div>
        </div>
    )
}