import '../../../src/assets/css/donate.css';
import DonateImg from '../../assets/images/charity.svg';
const Donate = () => {
    return ( 
        <>
        <div className="donate-outer">
            <div className="donate-inner row">
                <div className="donate-right col-sm-10">
                    <div className='donate-form'>
                        <h1>SUPPORT US!</h1>
                        <form>
                        <div className='donate-center'>
                        </div>
                        <div className='row'>
                        <div className='form-group col-sm-4'>
                            <center>
                                <input type='text' name='name' autoComplete='off' placeholder='Name*' required/>
                            </center>
                        </div>

                        <div className='form-group col-sm-4'>
                            <center>
                                <input type='tel' name='phone' placeholder='Mobile Number*' autoComplete='off' required/>
                            </center>
                        </div>

                        <div className='form-group col-sm-4'>
                            <center>
                                <input type='email' name='email' placeholder='Email*' autoComplete='off' required/>
                            </center>
                        </div>

                        </div>

                        <div className='row'>


                        <div className='form-group col-sm-4'>
                            <center>
                                <input type='text' name='PAN' placeholder='PAN Number' autoComplete='off'/>
                            </center>
                        </div>

                        <div className='form-group col-sm-4'>
                            <center>
                                <input type='number' name='amount' placeholder='Amount*' autoComplete='off' required/>
                            </center>
                        </div>

                        <div className='form-group col-sm-4 btn-donate-cont'>
                            <center>
                                <input type='submit' name='Donate' value='Donate' className='btn-donate' autoComplete='off' required/>
                            </center>
                        </div>

                        </div>

                        </form>
                    </div>
                </div>

                <div className="donate-right col-sm-2">
                    <div className='donate-heading2'>
                        <h1> दान / </h1>
                    </div>
                    <div className='donate-heading'>
                        <h1> DONATE. </h1>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Donate;