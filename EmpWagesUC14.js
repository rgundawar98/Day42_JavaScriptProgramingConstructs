class EmpWagesUC14
{
    id;
    salary;
    gender;
    constructor(id , name, salary,gender)
    {
        this.id= id;
        this.name= name;
        this.salary=salary;
        this.gender=gender;
    }
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
           this._name=name;
        else
           throw 'Name is not correct';
        this._name=name;
    }
    tostring()
    {
        return "id= "+this.id+" name= "+this.name+" salary= "+this.salary+" gender= "+this.gender;
    }
}
let Empwagesuc14 = new EmpWagesUC14(1,"Rahul",456644,'M');
 try{
    Empwagesuc14.name="Rahul";
    console.log(Empwagesuc14.tostring());
 }
  catch(e)
  {
      console.log(e);
  }