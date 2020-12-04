import { AbstractView } from "./abstract.view.js";
import { NavbarComponent } from './../components/navbar.component.js';
import { LoaderComponent } from './../components/loader.component.js';
import { EpisodesService } from "./../services/episodes.service.js";

export class EpisodesView extends AbstractView{

    constructor(){
        super();
        this.setTitle('Episodios - Breaking Bad');
        this.navbarComponent = new NavbarComponent();
        this.loaderComponent = new LoaderComponent();
        this.episodesService = new EpisodesService();
        this.timeOutReference = null;
    }

    async getView(){
        this.handleShowLoader();
        const navbarHTML = await this.navbarComponent.getHTML('episodio');
        const dataEpisodes = await this.episodesService.findAll();

        const templateEpisodes = this.getTemplateEpisodes(dataEpisodes);
        return `
        ${ navbarHTML }
        <section class="container padding-main">
            <article class="row mb-4">
                <section class="col-12 col-md-6 mb-3 mb-md-0">
                    <h2 class="mb-0 text-white">
                        Lista de episodios
                    </h2>
                </section>
                <section class="col-12 col-md-3 offset-md-3">
                    <input type="text" class="form-control js-search-episode"
                        placeholder="Busca un episodio ...">
                </section>
            </article>
            <article class="table-responsive js-table-container">
                <table class="table bg-light table-striped table-borderless rounded">
                    <thead class="rounded">
                        <tr>
                            <th scope="col" class="text-nowrap">Título</th>
                            <th scope="col" class="text-nowrap">Temporada</th>
                            <th scope="col" class="text-nowrap">Fecha de emisión</th>
                            <th scope="col" class="text-nowrap">Personajes</th>
                        </tr>
                    </thead>
                    <tbody class="rounded js-result-episodes">
                        ${ templateEpisodes }
                    </tbody>
                </table>
            </article>
            <article class="justify-content-center align-items-center h-70vh 
                d-none js-no-results">
                <h2 class="text-center text-grey">
                    🕵️‍ Sin resultados, busque otro episodio ...
                </h2>
            </article>
        </section>
        `;
    }

    initListeners(){
        document.querySelector('.js-search-episode').addEventListener(
          'keyup', this.handleSearchEpisodes.bind(this) 
        );
    }

    handleSearchEpisodes({ target }){
        if (this.timeOutReference) clearTimeout(this.timeOutReference);
        this.timeOutReference = setTimeout( async () => {
            const valueSearch = target.value.trim();
            const dataEpisodes = await this.episodesService.findAll();
            const episodesMatch = dataEpisodes.filter( ({ title }) => 
                title.toUpperCase().includes(valueSearch.toUpperCase()) 
            );
            
            if (episodesMatch.length === 0){
                document.querySelector('.js-no-results').classList.remove('d-none');
                document.querySelector('.js-no-results').classList.add('d-flex');
                document.querySelector('.js-table-container').classList.add('d-none');
            } else{
                document.querySelector('.js-no-results').classList.remove('d-flex');
                document.querySelector('.js-no-results').classList.add('d-none');
                document.querySelector('.js-table-container').classList.remove('d-none');
            }
            const templateEpisodes = this.getTemplateEpisodes(episodesMatch);
            document.querySelector('.js-result-episodes').innerHTML = templateEpisodes;
            this.initListeners();
        }, 300 );
    }

    getTemplateEpisodes(dataEpisodes){
        let templateEpisodes = '';
        dataEpisodes.forEach( (ep) => {
            let templateCharacters = '';            
            ep.characters.forEach( (character) => 
                templateCharacters += `
                <span class="badge bg-green text-white mr-2 mb-2">
                    ${ character }
                </span>` 
            );

            templateEpisodes += `
            <tr>
                <td class="text-nowrap text-secondary">${ ep.title }</td>
                <td class="text-nowrap text-secondary">${ ep.season }</td>
                <td class="text-nowrap text-secondary">${ ep.air_date }</td>
                <td>
                    <div class="d-flex flex-wrap mw-400">
                        ${ templateCharacters }
                    </div>
                </td>
            </tr>
            `;
        } );
        return templateEpisodes;
    }

    async handleShowLoader(){
        const navbarHTML = await this.navbarComponent.getHTML('episodio');
        const loaderHTML = await this.loaderComponent.getHTML('general');
        const templateLoader = `${ navbarHTML } ${ loaderHTML }`;
        document.querySelector('.js-main').innerHTML = templateLoader;
    }
}