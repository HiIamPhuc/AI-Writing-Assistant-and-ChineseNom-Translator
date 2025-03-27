import forgetIcon from '../../img/password 2.svg';
import Forget_Form from './Forget_Form';

export default function Forget_Password() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-full">
            <div className='flex items-center justify-center mt-40'>
                <img 
                src={forgetIcon} 
                alt="Forget password icon" 
                />
            </div>

            <div className="flex items-center justify-center w-full lg:w-auto lg:flex-1 mt-10">
                <Forget_Form />
            </div>
        </div>
    )
}