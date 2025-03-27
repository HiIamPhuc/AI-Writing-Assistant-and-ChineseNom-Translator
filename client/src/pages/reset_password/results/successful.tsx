import successfulIcon from '../../../img/Successful.svg';
import SuccessfulReset_Form from './SuccessfulReset_Form';

function SuccessfulReset() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-full">
            <div className='flex items-center justify-center mt-10'>
                <img 
                src={successfulIcon} 
                alt="Reset icon" 
                />
            </div>

            <div className="flex items-center justify-center w-full lg:w-auto lg:flex-1 mt-5">
                <SuccessfulReset_Form />
            </div>
        </div>
    );
}

export default SuccessfulReset