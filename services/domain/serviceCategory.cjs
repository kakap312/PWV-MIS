class ServiceCategory{
    id
    name
    updatedAt

    constructor(id,name,updatedAt){
        this.id = id
        this.name = name 
        this.updatedAt = updatedAt
    }
    getId(){return this.id;}
    setId(id){this.id = id}
    getName(){return this.name}
    setName(name){this.name = name}
    getUpdatedAt(){return this.updatedAt}
    setUpdatedAt(updatedAt){this.updatedAt = updatedAt}
}