import '../../assets/css/news.css';
import NewsPhoto from '../../assets/images/news-photo.png';

const Newletter = () => {
    return ( 
        <>
        <div className="hello-about" id="about"></div>
        <div className="news-main">
            <div className="news-inner">
                <div className="news-left">
                    <div className="main-headingsz">
                        NEWSLETTER
                    </div>
                    <div className="news-body">
                        <form>
                            <div className='form-group'>
                                <label htmlFor='email'>Email ID : </label>
                                <input type='email'name='newsletter' autoComplete="off" required />
                            </div>
                            <input type='submit' value='Submit' className='btn-sbmt-final'/>
                        </form>
                    </div>
                </div>
                <div className="news-right">
                    <img className="news-photo" src={NewsPhoto}></img>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Newletter;