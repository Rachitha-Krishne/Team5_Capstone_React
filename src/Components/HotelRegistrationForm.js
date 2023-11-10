import {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {postHotel} from '../Services/HotelService'

const HotelRegistrationForm = () => {
    const [address, setAddress] = useState({
        doorNo: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
      });
    const [formData, setFormData] = useState({
        hotelName: '',
        hotelCategory: 'NORTH_INDIAN',
        hotelImageURL : ["https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Toit1.jpg", "https://assets.architecturaldigest.in/photos/60083a5d3a9d9570bc841da9/16:9/w_1920,c_limit/canton-bangalore-restaurant-featured-image-1366x768.jpg"]
        
      });

      const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
      };
    
      useEffect(() => {
        setAddress(address);
      }, [address, setAddress]);


      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
   
    const submitHotelData = (evt) => {
        alert(`Hi ${formData.hotelName}  restaurant successfully registerd`);
        const data = {...formData , address}
        postHotel(data)
        .then((resp) => {
            alert(`Hi ${formData.hotelName}  restaurant successfully registerd`);
            console.log(resp);
            
        })
        .catch((error) => {
            console.log(error);
        });
        evt.preventDefault();
    }

    return(
        <div className="register-container">
        <div onSubmit={submitHotelData} className="register-form">
            <form className="form">
                <input type='text' name="hotelName"    placeholder = "hotelName"  value={formData. hotelName} onChange={handleChange}/>
                <br />
                <label>
                  Hotel Category:
                <select name="hotelCategory" value={formData.hotelCategory} onChange={handleChange}>
                <option value="NORTH_INDIAN">North Indian</option>
                <option value="SOUTH_INDIAN">South Indian</option>
                <option value="CHINESE">Chinese</option>
                </select>
                <input type='text'name="hotelName"    placeholder = "hotelName"  value={formData. hotelName} onChange={handleChange}/>
                <br />
                </label>
                <br />
                <input type='text' name="doorNo"    placeholder = "door number"  value={address.doorNo} onChange={handleAddressChange }/>
                <br />
            
                <input type='text' name="street" placeholder = "street" value={address.street}  onChange={handleAddressChange }/>
                <br />
    
                <input type='text' name="city"   placeholder = "city"  value={address.city} onChange={handleAddressChange }/>
                <br />
                
                <input type='text' name="state"  placeholder = "state"  value={address.state} onChange={handleAddressChange }/>
                <br />
                <input type='text' name="pincode" placeholder = "pincode"  value={address.pincode} onChange={handleAddressChange }/>
                <br />
                <input type='text' name="country" placeholder = "country"  value={address.country} onChange={handleAddressChange }/>
                <br />
                
                <input type="submit"  value="Submit" />
               
            </form>
        </div>
        </div>
    )
}

export default HotelRegistrationForm ;