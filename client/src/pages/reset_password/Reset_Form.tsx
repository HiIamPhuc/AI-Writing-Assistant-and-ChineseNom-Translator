import * as React from 'react'
import { Link } from 'react-router-dom'; 

export default function Reset_Form() {
    return (
        <div className='font-barlow-condensed'>
            <h1 className='text-6xl font-bold text-white text-center'> ĐẶT LẠI MẬT KHẨU </h1>

            <div className='mt-8 w-[500px]'>
                <div>
                    <label className='text-xl text-semibold text-white'>Mật khẩu mới</label>
                    <input
                        type='password'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập mật khẩu mới'
                    />
                </div>

                <div className='mt-4'>
                    <label className='text-xl text-semibold text-white'>Xác minh mật khẩu</label>
                    <input 
                        type='password'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập lại mật khẩu mới'
                    />
                </div>

                <div className='mt-4 flex justify-between items-center text-gray-200 text-xs'>
                    <ul className="text-sm list-disc ml-5">
                        <li>Mật khẩu tối thiểu 8 ký tự.</li>
                        <li>Chữ in hoa (A-Z).</li>
                        <li>Chữ thường (a-z).</li>
                        <li>Số (0-9).</li>
                        <li>Ít nhất một ký tự đặc biệt (*, /, @, #, $).</li>
                    </ul>
                </div>


                <div className='mt-4 flex flex-col'>
                    <Link
                        to='/reset-password/failed'
                        className='py-3 rounded-3xl bg-gradient-to-b from-linear-1 to-linear-2 text-white text-xl font-medium text-center hover:opacity-90 transition-opacity'>
                        Đặt lại mật khẩu
                    </Link>
                </div>
            </div>
        </div>
    )
}