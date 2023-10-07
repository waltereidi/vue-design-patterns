export class Classe {
    api_token: string ; 
    constructor(api_token:string ){
        this.api_token = api_token ; 
    }

    getClasse(){
        return this.api_token;
    }
}