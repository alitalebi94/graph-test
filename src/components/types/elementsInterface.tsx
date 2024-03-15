export interface tab{
    name:string;
    id:number;
    pin:boolean;
    text: boolean;
}

export interface groups {
    title: string;
    pin:boolean;
    id:number;
    tabs:tab[];
} 

export interface point{
    x:number;
    y:number;
}
