import * as React from 'react'
import { Link } from 'react-router-dom'; 

export default function Signin_Form() {
    return (
        <div className='font-barlow-condensed'>
            <h1 className='text-7xl font-bold text-white text-center'> ĐĂNG NHẬP </h1>
            <p className='text-red text-center text-xl font-medium mt-4 '> CẢNH BÁO: Email hoặc Mật Khẩu Của Bạn Không Đúng</p>
            <div className='mt-8 w-[500px]'>
                <div>
                    <label className='text-xl text-semibold text-white'>Email</label>
                    <input
                        type='email'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập tài khoản email'
                    />
                </div>

                <div className='mt-4'>
                    <label className='text-xl text-semibold text-white'>Mật khẩu</label>
                    <input 
                        type='password'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập mật khẩu'
                    />
                </div>

                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type="checkbox"
                        />
                        <label className='ml-2 font-medium text-base text-white' htmlFor="remember">Ghi nhớ mặt khẩu</label>
                    </div>
                    <Link
                        to='/forget-password'
                        className='font-medium text-base text-gray-100 text-linear-1 hover:underline'
                    >
                            Quên mật khẩu?
                    </Link>
                </div>

                <div className='mt-8 flex flex-col'>
                    <button className='hover:opacity-90 transition-opacity py-3 rounded-3xl bg-gradient-to-b from-linear-1 to-linear-2 text-white text-xl font-medium'>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    )
}