import '../../../src/assets/css/donate.css';
import DonateImg from '../../assets/images/charity.svg';
const Donate = () => {
    return ( 
        <>
        <div className="donate-outer">
            <div className="donate-inner row">
                <div className="donate-right col-sm-8">
                    <div className='donate-form'>
                        <form>
                        <div className='donate-center'>
                            <h1>COME SUPPORT US!</h1>
                        </div>
                        <div className='row'>
                        <div className='form-group col-sm-4'>
                            <input type='text' name='name' autoComplete='off' placeholder='Name' required/>
                        </div>

                        <div className='form-group col-sm-4'>
                            <input type='tel' name='phone' placeholder='Mobile Number' autoComplete='off' required/>
                        </div>

                        <div className='form-group col-sm-4'>
                            <input type='email' name='email' placeholder='Email' autoComplete='off' required/>
                        </div>

                        </div>

                        <div className='row'>

                        <div className='form-group col-sm-4'>
                            <input type='text' name='PAN' placeholder='PAN Number' autoComplete='off' required/>
                        </div>

                        <div className='form-group col-sm-4'>
                            <input type='number' name='amount' placeholder='Amount' autoComplete='off' required/>
                        </div>

                        <div className='form-group col-sm-4'>
                            <input type='submit' name='Donate' value='Donate' className='btn-donate' autoComplete='off' required/>
                        </div>

                        </div>
                        </form>
                    </div>
                </div>

                <div className="donate-right col-sm-4">
                    <img src={DonateImg} className='donate-img'></img>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Donate;