export interface IDocentes {
        id: Number,
        nombre: String,
        asignatura: String
}

export interface IDocente {
    nombre: String,
    asignatura: String
}

export interface Users{
    id: number,
    username: String;
    password:String;
    role:String,
    ramo:String,
    ramo2:String,
    anio:Number
    semestre:String,
    horas:Number,
    carrera:String,
    isactive:'true'
}

export interface User{
    username:String,
    password:String
    role:String,
    ramo:String,
    ramo2:String,
    anio:String,
    semestre:String,
    horas:String,
    carrera:String,
    isactive: true,

}

export interface IFeriados{
    status: String;
    data: Data[];
}

export interface Data{
    date: String;
    title: String;
    type: String;
    inalineable:Boolean;
    extra: String;
}

//get, put, delete
export interface IPalabras{
    id:number;
    username: string;
    palabra: string;
    fecha: string;
}

//post
export interface IPalabra {
    username: string;
    palabra: string;
    fecha: string; // Ajusta el tipo de datos según tus necesidades
  }
