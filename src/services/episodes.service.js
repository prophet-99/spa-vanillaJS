export class EpisodesService{
    
    constructor(){
        this.API_URL = 'https://www.breakingbadapi.com/api';
        this.config = { method: 'GET' };
    }

    async findAll(){
        const res = await fetch(`${ this.API_URL }/episodes?series=Breaking Bad`, this.config);
        return res.json();
    }
}