import { AbstractView } from "./abstract.view.js";
import { NavbarComponent } from './../components/navbar.component.js';
import { LoaderComponent } from './../components/loader.component.js';
import { CharactersService } from './../services/characters.service.js';

export class CharactersView extends AbstractView{

    constructor(){
        super();
        this.setTitle('Personajes - Breaking Bad');
        this.navbarComponent = new NavbarComponent();
        this.loaderComponent = new LoaderComponent();
        this.charactersService = new CharactersService();
        this.timeOutReference = null;
    }

    async getView(){
        this.handleShowLoader();
        const navbarHTML = await this.navbarComponent.getHTML('personaje');
        const dataCharacters = await this.charactersService.findAll();

        let templateCard = this.getTemplateCard(dataCharacters);
        return `
        ${ navbarHTML }
        <section class="container padding-main">
            <article class="row mb-4">
                <section class="col-12 col-md-6 mb-3 mb-md-0">
                    <h2 class="mb-0 text-white">
                        Lista de personajes
                    </h2>
                </section>
                <section class="col-12 col-md-3 offset-md-3">
                    <input type="text" class="form-control js-search-character"
                        placeholder="Busca un personaje ...">
                </section>
            </article>
            <article class="row row-cols-1 row-cols-md-4 js-cards-characters">
                ${ templateCard }
            </article>
            <article class="justify-content-center align-items-center h-70vh 
                d-none js-no-results">
                <h2 class="text-center text-grey">
                    🕵️‍ Sin resultados, busque otro personaje ...
                </h2>
            </article>
        </section>
        <section class="modal fade" id="modal-character-info" tabindex="-1" aria-hidden="true">
            <article class="modal-dialog">
                <div class="modal-content">
                    <section class="modal-header bg-green">
                        <h5 class="modal-title text-white font-weight-bold">
                            Información
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </section>
                    <section class="modal-body js-modal-content"></section>
                </div>
            </article>
        </section>
        `;
    }

    initListeners(){
        document.querySelectorAll('.js-select-character').forEach(
            (element) => element.addEventListener('click', this.handleSelectCharacter.bind(this) )
        );
        document.querySelector('.js-search-character').addEventListener(
          'keyup', this.handleSearchCharacter.bind(this) 
        );
    }

    async handleSelectCharacter({ target }){
        const loaderHTML = await this.loaderComponent.getHTML('custom');
        document.querySelector('.js-modal-content').innerHTML = loaderHTML;

        const currentId = target.dataset.idCharacter;
        const dataResOne = await this.charactersService.findById(currentId);
        const dataCharacter = dataResOne[0];
        const nameWithPlus = dataCharacter.name.replace(' ', '+');
        const dataResTwo = await this.charactersService.findAllDeadsByName(nameWithPlus);
        const dataDead = dataResTwo[0];
        
        let templateSeasons = '';
        (dataCharacter.appearance) ? 
        dataCharacter.appearance.forEach( (ep, idx) => 
            (idx < dataCharacter.appearance.length - 1) ? 
            templateSeasons += `${ ep } - ` : 
            templateSeasons += ep
        ) :
        templateSeasons = 'Sin registros';

        let templateOccupations = '';
        dataCharacter.occupation.forEach( (oc) => 
            templateOccupations += `
            <p class="badge badge-character text-secondary font-weight-normal">
               ${ oc }
            </p>`
        );

        const templateHTML = `
            <article class="mb-3 d-flex align-items-center">    
                <img src="${ dataCharacter.img }" alt="${ dataCharacter.name }"
                    class="img-fluid thumbnail-circle mr-3">
                <section>
                    <h5 class="mb-0 font-weight-bold">${ dataCharacter.name }</h5>
                    <p class="text-secondary mb-2">${ dataCharacter.nickname }</p>
                    <p class="mb-0">
                        <span class="badge
                            ${ dataCharacter.status.includes('live') ? 'badge-success': 'badge-danger' }">
                            ${ dataCharacter.status }
                        </span>
                    </p>
                </section>
            </article>
            <article class="row">
                <section class="col-12 col-sm-4 mb-3">
                    <p class="mb-1 font-weight-bold">Actor</p>
                    <p class="mb-0 text-secondary">${ dataCharacter.portrayed }</p>    
                </section>
                <section class="col-12 col-sm-4 mb-3">
                    <p class="mb-1 font-weight-bold">Cumpleaños</p>
                    <p class="mb-0 text-secondary">${ dataCharacter.birthday }</p>
                </section>
                <section class="col-12 col-sm-4 mb-3">
                    <p class="mb-1 font-weight-bold">Temporadas</p>
                    <p class="mb-0 text-secondary">
                        ${ templateSeasons }
                    </p>
                </section>
                <section class="col-12 mb-3">
                    <p class="mb-1 font-weight-bold">Ocupaciones</p>
                    <div class="d-flex flex-wrap align-items-center">
                        ${ templateOccupations }
                    </div>
                </section>
                <section class="col-12">
                    <div class="information-dead">
                        <p class="mb-0 text-center">
                            <span class="d-block information-dead__title">💀 Total de muertes 💀</span>
                            ${ dataDead.deathCount }
                        </p>                        
                    </div>
                </section>
            </article>
        `;
        document.querySelector('.js-modal-content').innerHTML = templateHTML;
    }

    handleSearchCharacter({ target }){
        if (this.timeOutReference) clearTimeout(this.timeOutReference);
        this.timeOutReference = setTimeout( async () => {
            let valueSearch = target.value.trim();
            valueSearch = valueSearch.replace(' ', '+');
            const charactersMatch = await this.charactersService.findByName(valueSearch);
            
            if (charactersMatch.length === 0){
                document.querySelector('.js-no-results').classList.remove('d-none');
                document.querySelector('.js-no-results').classList.add('d-flex');
            } else{
                document.querySelector('.js-no-results').classList.remove('d-flex');
                document.querySelector('.js-no-results').classList.add('d-none');
            }
            const templateCard = this.getTemplateCard(charactersMatch);
            document.querySelector('.js-cards-characters').innerHTML = templateCard;
            this.initListeners();
        }, 300 );
    }

    getTemplateCard(dataCharacters){
        let templateCard = '';
        dataCharacters.forEach( (character) => {
            templateCard += 
            `<div class="col mb-4">
                <section class="card h-100">
                    <img src="${ character.img }" class="card-img-top card-thumbnail" 
                        alt="${ character.name }">
                    <article class="card-body">
                        <h5 class="card-title font-weight-bold">
                            ${ character.name }
                        </h5>
                        <p class="card-text">
                            💸 ${ character.nickname }
                        </p>
                        <a href="./#/personaje" data-toggle="modal" 
                            data-target="#modal-character-info" data-id-character="${ character.char_id }"
                            class="js-select-character">
                            Ver más
                        </a>
                    </article>
                </section>
            </div>`;
        } );
        return templateCard;
    }

    async handleShowLoader(){
        const navbarHTML = await this.navbarComponent.getHTML('personaje');
        const loaderHTML = await this.loaderComponent.getHTML('general');
        const templateLoader = `${ navbarHTML } ${ loaderHTML }`;
        document.querySelector('.js-main').innerHTML = templateLoader;
    }
}