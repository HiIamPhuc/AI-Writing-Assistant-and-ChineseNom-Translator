import resetIcon from '../../img/reset.svg'
import Reset_Form from './Reset_Form';

function ResetPassword() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-full">
            <div className='flex items-center justify-center mt-20'>
                <img 
                src={resetIcon} 
                alt="Forget password icon" 
                />
            </div>

            <div className="flex items-center justify-center w-full lg:w-auto lg:flex-1 mt-10">
                <Reset_Form />
            </div>
        </div>
    );
  }
  
  export default ResetPassword