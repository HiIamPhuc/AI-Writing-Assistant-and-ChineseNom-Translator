import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Reset_Form() {
    const { uidb64, token } = useParams(); // Extract UID and token from the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (password !== confirmPassword) {
            setError('Mật khẩu nhập lại không khớp!');
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/user/reset-password/${uidb64}/${token}/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Mật khẩu đã được cập nhật thành công!');
                setTimeout(() => navigate('/reset-password/successful/${uidb64}/${token}/'), 2000);
            } else {
                setError(data.error || 'Liên kết không hợp lệ hoặc đã hết hạn!');
            }
        } catch (error : any) {
            setError(error.message || 'Đã xảy ra lỗi trong quá trình đặt lại mật khẩu!');
        }
    };

    return (
        <div className="font-barlow-condensed">
            <h1 className='text-6xl font-bold text-white text-center'>ĐẶT LẠI MẬT KHẨU</h1>

            {message && <p className="text-green-500 text-center mt-4">{message}</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            <form className='mt-6' onSubmit={handleSubmit}>
                <div>
                    <label className='text-xl text-semibold text-white'>Mật khẩu mới</label>
                    <input
                        type='password'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập mật khẩu mới'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='mt-4'>
                    <label className='text-xl text-semibold text-white'>Xác nhận mật khẩu</label>
                    <input
                        type='password'
                        className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                        placeholder='Nhập lại mật khẩu mới'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='mt-8 flex flex-col'>
                    <button
                        type="submit"
                        className='hover:opacity-90 transition-opacity ease-in-out transition-all py-3 rounded-3xl bg-linear-1 text-lg font-medium text-center'
                    >
                        Đặt lại mật khẩu
                    </button>
                </div>
            </form>
        </div>
    );
}