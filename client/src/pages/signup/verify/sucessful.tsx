import { useNavigate } from 'react-router-dom';
import SideBar from './step3_sidebar';
import PeopleImage from '../../../img/happypeople.svg';

function VerifySuccessful() {
    const navigate = useNavigate();

    return (
        <div className="flex w-full justify-center items-start h-full font-barlow-condensed mt-8 gap-8 text-white">
            <div className="w-[400px] sticky top-8">
                <SideBar />
            </div>
            
            <div className="flex-1 max-w-[600px] mt-[60px]">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-7xl font-bold text-center'>XÁC MINH THÀNH CÔNG</h1>
                    <p className='text-center mt-4 text-lg'>
                        Chúng tôi rất vui vì bạn đã chọn tin tưởng Echo Mind - Một trợ thủ AI đắc lực trong việc viết lách. 
                        Mong bạn có những trải nghiệm vui vẻ cùng chúng tôi.
                    </p>

                    <div>
                        <img src={PeopleImage} alt="Xác minh email" className='h-100 w-100'/>
                    </div>

                    <div className='mt-4 flex flex-col'>
                        <button
                            onClick={() => navigate('/signin')}
                            className='py-3 px-[100px] rounded-3xl bg-gradient-to-b from-linear-1 to-linear-2 text-white text-xl font-medium text-center hover:opacity-90 transition-opacity'>
                            Đến trang đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifySuccessful;