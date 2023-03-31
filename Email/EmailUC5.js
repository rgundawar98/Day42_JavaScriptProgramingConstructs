class EmailUC5{
    name;
    constructor(name)
    {
        this.name=name;
    }
    get  Email(){
        return this._Email;
    }
    set Email(Email){
        let codeRegex = RegExp("^[a-z0-9]{3,}?([-,.,+][a-z0-9]{1,})*@[a-z0-9]{1,}.(com|com.au|net|co.in|com.com)$");
        if(codeRegex.test(Email))
            this._Email = Email;
        else
            throw 'Email is not correct';
        this._Email=Email;
    }
    tostring()
    {
        return "name= "+this.name+" Email= "+this.Email;
    }
}

let Emailuc5 = new EmailUC5("Rajesh", "abc@yahoo.com", "abc-100@yahoo.com","abc.100@yahoo.com","abc111@abc.com",
"abc-100@abc.net", "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com","abc+100@gmail.com",
"abc","abc@.com.my","abc123@gmail.a","abc123@.com","abc123@.com.com",".abc@abc.com","abc()*@gmail.com",
"abc@%*.com","abc..2002@gmail.com","abc.@gmail.com","abc@abc@gmail.com","abc@gmail.com.1a","abc@gmail.com.aa.au");
try{
    Emailuc5.Email="abc@yahoo.com", "abc-100@yahoo.com","abc.100@yahoo.com","abc111@abc.com",
    "abc-100@abc.net", "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com","abc+100@gmail.com",
    "abc","abc@.com.my","abc123@gmail.a","abc123@.com","abc123@.com.com",".abc@abc.com","abc()*@gmail.com",
    "abc@%*.com","abc..2002@gmail.com","abc.@gmail.com","abc@abc@gmail.com","abc@gmail.com.1a","abc@gmail.com.aa.au";
    console.log(Emailuc5.tostring());
}
catch(e)
{
    console.log(e);
}