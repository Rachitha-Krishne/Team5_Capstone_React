class Address{

    doorNo;
	street;
	city;
	state;
	pincode;
    country;

    constructor(doorNo, street,city,state, pincode,country){
        this.doorNo = doorNo;
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.country = country;
    }

}

export default Address;