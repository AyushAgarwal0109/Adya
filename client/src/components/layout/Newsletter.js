import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../../assets/css/news.css';
import '../../assets/css/news-cards.css';
import NewsPhoto from '../../assets/images/news-photo.png';

const Newletter = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      swal({
        text: 'Please enter your email',
        icon: 'error',
      });
    } else {
      const formData = {
        email,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/news', formData, config);
        swal({
          title: 'Success',
          text: res.data.msg,
          icon: 'success',
        });
      } catch (err) {
        swal({
          text: 'Already applied for newsletter',
          icon: 'error',
        });
      }
    }
  };

  return (
    <>
      <div className='hello-about' id='about'></div>
      <div className='news-main'>
        <div className='news-inner'>
          <div className='news-inner-inner'>
            <figure class="icon-cards mt-3">
              <div class="icon-cards__content">
                <div class="icon-cards__item d-flex align-items-center justify-content-center"><span class="h1"></span></div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center"><span class="h1"></span></div>
                <div class="icon-cards__item d-flex align-items-center justify-content-center"><span class="h1"></span></div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newletter;
