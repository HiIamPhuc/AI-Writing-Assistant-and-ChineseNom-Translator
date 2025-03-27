import logo from '../../../img/logo part.svg';
import personIcon from '../../../img/Customer.svg'
import emailIcon from '../../../img/Mail.svg'
import heartIcon from '../../../img/Handshake Heart.svg'
import arrowIcon from '../../../img/Right Arrow.svg'
import { Link } from 'react-router-dom'; 

function SideBar() {
  return (
      <div className='relative w-[400px] bg-bar-color flex flex-col items-center justify-between mt-8 mr-20 py-[60px] rounded-xl text-gray-100 h-[700px]'>
          <div className='w-full'>
              {/* Logo */}
              <div className='w-full flex justify-start pl-8'>
                  <img src={logo} alt="Echo Mind" className="h-12" />
              </div>

              {/* Các bước */}
              <div className='w-full flex flex-col px-8 mt-8 space-y-6'>
                  {/* Step 1 */}
                  <div className='flex items-center px-4 py-4'>
                      <div className='w-8 mr-4 flex justify-center'>
                          <img src={personIcon} className="w-8 h-8" />
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-lg font-semibold text-neon'>
                              Đăng kí
                          </div>
                          <div className='text-xs'>
                              Cung cấp tài khoản email và mật khẩu của bạn
                          </div>
                      </div>
                  </div>

                  {/* Step 2 */}
                  <div className='flex items-center bg-bar-step px-4 py-4 rounded-lg opacity-80'>
                      <div className='w-8 mr-4 flex justify-center'>
                          <img src={emailIcon} className="w-8 h-8" />
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-lg font-semibold text-neon text-shadow'>
                              Xác minh tài khoản
                          </div>
                          <div className='text-xs'>
                              Nhập mã xác minh được gửi tới tài khoản của bạn
                          </div>
                      </div>
                  </div>

                  {/* Step 3 */}
                  <div className='flex items-center px-4 py-4'>
                      <div className='w-8 mr-4 flex justify-center'>
                          <img src={heartIcon} className="w-8 h-8" />
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-lg font-semibold text-neon'>
                              Chào mừng tới Echo Mind
                          </div>
                          <div className='text-xs'>
                              Mong bạn có hành trình vui vẻ cùng chúng tôi
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Nút trở về trang chủ - đặt ở dưới cùng */}
          <div className='w-full px-8 mt-auto mb-8'>
              <a
                  href='/'
                  className='flex items-center justify-center hover:underline'
              >
                  <img src={arrowIcon} className='w-6 h-6 mr-2'/>
                  Trở về trang chủ
              </a>
          </div>
      </div>
  );
}

export default SideBar;
