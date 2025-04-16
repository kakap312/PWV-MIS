class Service{
    id
    name
    category
    updatedAt
    constructor(id,name,category,updatedAt){
        this.id = id
        this.name = name
        this.category = category
        this.updatedAt = updatedAt
    }

    getId(){return this.id;}
    setId(id){this.id = id}
    getName(){return this.name}
    setName(name){this.name = name}
    getCategory(){return this.category}
    setCategory(category){this.category = category}
    getUpdatedAt(){return this.updatedAt}
    setUpdatedAt(updatedAt){this.updatedAt = updatedAt}
}