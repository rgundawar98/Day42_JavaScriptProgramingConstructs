class PostalCodeUC2{
    name;
    constructor(name)
    {
        this.name=name;
    }
    get  PostalCode(){
        return this._PostalCode;
    }
    set PostalCode(PostalCode){
        let codeRegex = RegExp("^[1-9]{1}[0-9]{2}[' ']?[0-9]{3}$");
        if(codeRegex.test(PostalCode))
            this._PostalCode = PostalCode;
        else
            throw 'Postal Code is not correct';
        this._PostalCode=PostalCode;
    }
    tostring()
    {
        return "name= "+this.name+" PostalCode= "+this.PostalCode;
    }
}

let Postalcodeuc2 = new PostalCodeUC2("Raj", "A400088");
try{
    Postalcodeuc2.PostalCode="A400088";
    console.log(Postalcodeuc2.tostring());
}
catch(e)
{
    console.log(e);
}