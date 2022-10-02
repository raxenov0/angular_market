export interface IProduct{
  id?:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating: {
    rate:number,
    count:number
  }
}

export enum EType{
  'title'= 'string',
  'price' = 'number'
}
