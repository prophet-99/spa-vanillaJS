export class QuotesService{

    constructor(){
        this.API_URL = 'https://www.breakingbadapi.com/api';
        this.config = { method: 'GET' };
    }

    async findAllByCharacterName(characterName){
        const res = await fetch(`${ this.API_URL }/quote?author=${ characterName }`, this.config);
        return res.json();
    }
}