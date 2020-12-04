export class CharactersService{

    constructor(){
        this.API_URL = 'https://www.breakingbadapi.com/api';
        this.config = { method: 'GET' };
    }

    async findAll(){
        const res = await fetch(`${ this.API_URL }/characters`, this.config);
        return res.json();
    }

    async findById(idCharacter){
        const res = await fetch(`${ this.API_URL }/characters/${ idCharacter }`, this.config);
        return res.json();
    }

    async findByName(nameCharacter){
        const res = await fetch(`${ this.API_URL }/characters?name=${ nameCharacter }`);
        return res.json();
    }

    async findAllDeadsByName(nameCharacter){
        const res = await fetch(`${ this.API_URL }/death-count?name=${ nameCharacter }`, this.config);
        return res.json();
    }

    async findRadom(){
        const res = await fetch(`${ this.API_URL }/character/random`);
        return res.json();
    }
}