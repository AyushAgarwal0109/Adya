import '../../assets/css/schemes.css';

const Schemes = () => {
    return ( 
        <div className='schemes-outer'>
            <div className='schemes-inner'>
            <div className='schemes-heading'>
                <h1> SCHEMES. </h1>
            </div>
            <main className="page-content">
            
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">MAHILA UDYAM NIDHI SCHEME</h2>
                    <p className="copy">This scheme promotes MSMEs and small sector investments in different industries to grow and excel in their areas.</p>
                    <button className="btnschemes">Know More!</button>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">ORIENT MAHILA VIKAS YOJANA</h2>
                    <p className="copy">This scheme is for women who hold 51% share capital separately or collectively as a proprietary concern.</p>
                    <button className="btnschemes">Know More!</button>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">DENA SHAKTI SCHEME</h2>
                    <p className="copy"> This scheme is for women entrepreneurs but limited only to those which are small enterprises or micr-credit organizations.</p>
                    <button className="btnschemes">Know More!</button>
                    </div>
                </div>
                <div className="cardcard">
                    <div className="content">
                    <h2 className="title">UDYOGINI SCHEME</h2>
                    <p className="copy">This program encourages women to be self-reliant and help them in self-development by empowering them economically to be able to do so.</p>
                    <button className="btnschemes">Know More!</button>
                    </div>
                </div>
            </main>
            <div className='schemes-heading2'>
                <h1> योजनाएं / </h1>
            </div>
            </div>
        </div>
     );
}
 
export default Schemes;