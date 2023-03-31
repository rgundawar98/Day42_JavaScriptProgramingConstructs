class PostalCodeUC4{
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

let Postalcodeuc4 = new PostalCodeUC4("Raj", "400 088");
try{
    Postalcodeuc4.PostalCode="400 088";
    console.log(Postalcodeuc4.tostring());
}
catch(e)
{
    console.log(e);
}