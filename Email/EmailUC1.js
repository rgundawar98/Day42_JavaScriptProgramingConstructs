class EmailUC1{
    name;
    constructor(name)
    {
        this.name=name;
    }
    get  Email(){
        return this._Email;
    }
    set Email(Email){
        let codeRegex = RegExp("^[A-Za-z]{1,}?[@][A-Za-z0-9]{1,}?[.][A-Za-z]{1,}$");
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

let Emailuc1 = new EmailUC1("Raj", "abc@bridgelabz.co");
try{
    Emailuc1.Email="abc@bridgelabz.co";
    console.log(Emailuc1.tostring());
}
catch(e)
{
    console.log(e);
}