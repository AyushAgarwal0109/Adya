import ContactPhoto from '../../assets/images/contact-photo.png';
import '../../assets/css/contact.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

export class ContactUs extends Component {
    render(){
        return(
        <>
        <div className="hello-cons" id="contact"></div>
        <div className="contact">
            <div className="contact-inner row">
                <div className="contact-left">

                <Map google={this.props.google} zoom={14}>
 
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
                </Map>

                </div>
                <div className="contact-right">
                    <div className="main-headingss">
                        REACH US!
                    </div>
                    <div className="contact-details">
                        <label>Email ID</label><span className="contact-span"> : adya.venture@gmail.com</span> <br />
                        <label>Customer Care</label><span className="contact-span"> : +91 - 9540273272</span> <br />
                        <label>Address</label><span className="contact-span"> : Dwarka, New Delhi</span> <br />
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyD_kRF8f0_e6IsONJf2uW8oUhJdvptAEno")
  })(ContactUs)