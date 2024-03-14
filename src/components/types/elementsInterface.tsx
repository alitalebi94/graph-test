export interface tab{
    name:string;
    id:number;
    text: boolean;
}

export interface groups {
    title: string;
    id:number;
    tabs:tab[];
} 

export interface point{
    x:number;
    y:number;
}
