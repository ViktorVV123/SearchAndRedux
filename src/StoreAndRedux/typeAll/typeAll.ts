

type categories={
    name:string
}
type collections ={
    category:number,
    name:string,
    photos:string
}


export type collection ={
    categories:categories[]
    collections:collections[]

}