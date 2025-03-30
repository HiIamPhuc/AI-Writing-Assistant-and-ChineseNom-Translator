import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forget_Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/request-reset-password/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Email xác minh đã được gửi! Kiểm tra hộp thư của bạn.');
                setTimeout(() => navigate('/reset-verification'), 3000);
            } else {
                setError(data.error || 'Có lỗi xảy ra, vui lòng thử lại!');
            }
        } catch (error) {
            setError('Lỗi kết nối đến máy chủ!');
        }
    };

    return (
        <div className="font-barlow-condensed">
            <h1 className='text-6xl font-bold text-white text-center'>QUÊN MẬT KHẨU?</h1>
            <p className='text-white text-center text-xl font-medium mt-4'>Bạn đừng lo, chúng tôi sẽ giúp bạn.</p>

            {message && <p className="text-green-500 text-center mt-4">{message}</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            <form className='mt-6' onSubmit={handleSubmit}>
                <label className='text-xl text-semibold text-white'>Email</label>
                <input
                    type='email'
                    className='w-full border-2 border-gray-100 rounded-3xl p-4 mt-1 bg-transparent text-white focus:outline-none'
                    placeholder='Nhập tài khoản email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className='mt-8 flex flex-col'>
                    <button
                        type="submit"
                        className='hover:opacity-90 transition-opacity ease-in-out transition-all py-3 rounded-3xl bg-linear-1 text-lg font-medium text-center'
                    >
                        Xác minh Email
                    </button>
                </div>
            </form>

            <div className='mt-5 flex justify-center items-center'>
                <button
                    onClick={() => navigate('/signin')}
                    className='text-gray-200 font-medium hover:underline ease-in-out transition-all'
                >
                    Quay về trang đăng nhập
                </button>
            </div>
        </div>
    );
}