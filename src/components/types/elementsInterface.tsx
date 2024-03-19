export interface tab{
    name:string;
    id:number;
    pin:boolean;
    text: string;
}

export interface groups {
    title: string;
    pin:boolean;
    id:number;
    color:string;
    tabs:tab[];
} 

export interface point{
    x:number;
    y:number;
}
