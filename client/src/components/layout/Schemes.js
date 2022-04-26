import '../../assets/css/schemes.css';
const Schemes = () => {
    return ( 
        <div className='schemes-outer'>
            <div className='schemes-inner row'>
            <div className='schemes-inner1 col-sm-1'>
                <div className='schemes-heading2'>
                    <h1> योजनाएं / </h1>
                </div>
                <div className='schemes-heading'>
                    <h1> SCHEMES. </h1>
                </div>
            </div>
            <div className="page-content col-sm-11">
            
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">MAHILA UDYAM NIDHI SCHEME</h2>
                    <p className="copy">This scheme promotes MSMEs and small sector investments in different industries to grow and excel in their areas.</p>
                    <a href="https://www.msmex.in/learn/what-is-mahila-udyam-nidhi-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">ORIENT MAHILA VIKAS YOJANA</h2>
                    <p className="copy">This scheme is for women who hold 51% share capital separately or collectively as a proprietary concern.</p>
                    <a href="https://www.govtgk.com/orient-mahila-vikas-yojana/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">DENA SHAKTI SCHEME</h2>
                    <p className="copy"> This scheme is for women entrepreneurs but limited only to those which are small enterprises or micr-credit organizations.</p>
                    <a href="https://aatmnirbharsena.org/blog/dena-shakti-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">UDYOGINI SCHEME</h2>
                    <p className="copy">This program encourages women to be self-reliant and help them in self-development by empowering them economically to be able to do so.</p>
                    <a href="https://www.lendingkart.com/blog/udyogini-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Schemes;