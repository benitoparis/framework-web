
export class User {

    constructor(private name: string, private age: number){}

    // Méthode pour renvoyer la valeur d'une propriété
    get (property: string){
        
        if (property === 'name'){
            return this.name;
        } else if(property === 'age'){
            return this.age;
        }
    }
}