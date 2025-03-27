import SideBar from './step2_sidebar'
import AlertImage from '../../../img/alert.svg'
import { Link } from 'react-router-dom'; 

function Verify() {
    return (
        <div className="flex w-full justify-center items-start h-full font-barlow-condensed mt-8 gap-8 text-white">
            <div className="w-[400px] sticky top-8">
                <SideBar />
            </div>
            
            <div className="flex-1 max-w-[600px] mt-[50px]">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-7xl font-bold text-center'>XÁC MINH THẤT BẠI</h1>
                    <p className='text-center mt-4 text-lg'>
                        Ôi không! Có vẻ như đã có lỗi xảy ra. Vui lòng thử lại
                    </p>

                    <div>
                        <img src={AlertImage} alt="Xác minh email" className='h-100 w-100'/>
                    </div>

                    <div className='mt-5 flex justify-center items-center'>
                        <Link
                            to='/signup'
                            className='bg-linear-1 py-3 px-[60px] rounded-3xl text-black font-medium hover:opacity-90 transition-opacity'
                        >
                            Quay về trang đăng kí
                        </Link>
            </div>
                </div>
            </div>
        </div>
    );
}
  
export default Verify;