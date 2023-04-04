class AddressBookSystem{
        firstName;
        LastName;
        address;
        city;
        state;
        zip;
        phonenumber;
        email;

        //constructor for class AddressBookSystem
        constructor(firstName,LastName,address,city,state,zip,phonenumber,email){
            this.firstName = firstName;
            this.LastName= LastName;
            this.address= address;
            this.city= city;
            this.state = state;
            this.zip =zip;
            this.phonenumber= phonenumber;
            this.email= email;
        }

        get firstName(){
        return this.firstName;
    }
        set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(firstNameRegex.test(firstName))
        this.firstName = firstName;
        else throw 'Your First Name must start with capital letter and must have minimum 3 characters';
    }
        get LastName(){
        return this.LastName;
    }
        set LastName(LastName){
            let LastNameRegex = RegExp('[A-Z]{1}[a-z]{3,}');
            if(LastNameRegex.test(LastName))
            this.LastName =LastName;
            else throw 'Last Name must starts with capital letter and must have minimum 3 characters';
        }

    get address(){
        return this.address;
    }
        set address(address){
            let addressRegex = RegExp('^[A-Za-z]{4,}');
            if(addressRegex.test(address))
            this.address =address;
            else throw 'please enter the valid Address ';
        }

    get city(){
        return this.city;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Za-z]{4,}');
        if(cityRegex.test(city))
        this.city =city;
        else throw 'please enter the valid city ';
    }

    get state(){
        return this.state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Za-z]{4,}');
        if(stateRegex.test(state))
        this.state =state;
        else throw 'please enter the valid state name ';
    }
        get zip(){
        return this.zip;
    }
    set zip(zip){
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?');
        if(zipRegex.test(zip))
        this.zip =zip;
        else throw 'please enter valid zip code ';
    }
    get phonenumber(){
        return this.phonenumber;
    }
    set phonenumber(phonenumber){
        let phonenumberRegex = RegExp('[91]{2}[0-9]{10}');
        if(phonenumberRegex.test(phonenumber))
        this.phonenumber =phonenumber;
        else throw ' please enter valid phonenumber ';
    }
    get email(){
        return this.email;
    }
    set email(email){
        let emailRegex = RegExp('^([A-Za-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{5}(\.[a-z])?');
        if(emailRegex.test(email))
        this.email =email;
        else throw 'please enter valid email id ';
    }

    toString(){
        return "firstName:"+this.firstName+"\nLastName:"
                            +this.LastName+"\naddress:"
                            +this.address+"\ncity:"
                            +this.city+"\nstate:"
                            +this.state+"\nzip:"+
                            this.zip+"\nphone:"
                            +this.phonenumber+"\nemail:"
                            +this.email;
    }
    }
    let contact1 = new AddressBookSystem("pallavi","parteti","Maharashtra Amravati",
                                    "Amravati","Maharashtra",444601,1234567890,'abc@gmail.com');
    console.log(contact1.toString());
    let contact2  = new AddressBookSystem("samiksha","Dhabale","Maharashtra Pune",
                                    "Pune ","Maharashtra",534123,912345621357,
                                                                        'samiksha1@gmail.com');
    console.log(contact2.toString());
    try
    {
        contact2.LastName = "parteti";
        console.log(contact2.toString());
    }
    catch(e)
    {
        console.error(e);
    }
    let contact3 = new AddressBookSystem("Akash","Kokate","MP Bhopal",
                                            "Bhopal","MP",546234,919876453423,
                                                                'akash@gmail.com');
    let contactsArray= new Array();
    contactsArray.push(contact2);
    contactsArray.push(contact3);

    let object = contactsArray.find((Details)=>Details.firstName =='Akash');
    if(object != undefined){
    contactsArray.pop();
    object.setfirstName('Radha');
    object.setLastName('Suryvanshi');
    object.setAddress('Bihar Chapra');
    object.setcity('Chapra');
    object.setstate('Bihar');
    object.setzip(564234);
    object.setphonenumber(919756432345);
    object.setemail('radha@gmail.com');
    contactsArray.push(object);
    contactsArray.push(object);
    contactsArray.forEach((Details)=> console.log(Details.toString()));
    }
    else
    {
    console.log('Details not found!');
    }

    let contactToDelete = contactDetailarray.find((Details)=>Details.firstName ==='pallavi');
    if(contactToDelete != undefined){
        contactsArray.pop();
        console.log("record deleted successfully!");
        contactsArray.forEach((Details)=> console.log(Details.toString()));
    }
    else
    {
        console.log('Details not found');
    }