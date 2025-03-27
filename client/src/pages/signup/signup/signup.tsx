import SignUp_Form from "./Signup_Form"; 
import SideBar from './step1_sidebar'

function SignUp() {
    return (
        <div className="flex w-full justify-center items-start h-full font-barlow-condensed mt-8 gap-8">
            <div className="w-[400px]">
                <SideBar />
            </div>
            
            <div className="flex-1 max-w-[600px]"> 
                <SignUp_Form />
            </div>
        </div>
    );
}
  
  export default SignUp;