export interface User {
    first_name? : string ,
     last_name? : string ,
     password : any ,
     email :  string ,
     role ?: string 
}


export interface Book {
    _id :  string ,
             name :  string,
             description :  string ,
             auther :  string ,
             price : number,
             image? :  string,
             category :  string ,
             status :  string ,
             updatedAt :  string,
             createdAt :  string ,
             __v : number
}


export interface category{
     _id : string,
     title :  string ,
     status :  string ,
}

export interface cartBook{
     
           book : string ,
           quantity : number,
           _id :  string 
      
}