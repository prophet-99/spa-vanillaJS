import { AbstractView } from "./abstract.view.js";
import { NavbarComponent } from './../components/navbar.component.js';
import { LoaderComponent } from './../components/loader.component.js';
import { CharactersService } from './../services/characters.service.js';
import { QuotesService } from './../services/quotes.service.js';

export class HomeView extends AbstractView{
    constructor(){
        super();
        this.setTitle('Inicio - Breaking Bad');
        this.navbarComponent = new NavbarComponent();
        this.loaderComponent = new LoaderComponent();
        this.charactersService = new CharactersService();
        this.quotesService = new QuotesService();
    }

    async getView(){
        this.handleShowLoader();
        const navbarHTML = await this.navbarComponent.getHTML('inicio');
        const dataResponse = await this.charactersService.findRadom();
        const dataCharacter = dataResponse[0];
        const nameWithPlus = dataCharacter.name.replace(' ', '+');
        const dataQuotes = await this.quotesService.findAllByCharacterName(nameWithPlus);
        
        let templateQuotes = `
            <section class="card h-100">
                <article class="card-body d-flex justify-content-center align-items-center">
                    <h4 class="text-secondary text-center mb-0">
                        Sin frases disponibles
                    </h4>
                </article>
            </section>
        `;
        if (dataQuotes.length > 0) templateQuotes = '';
        dataQuotes.forEach( (qq) => {
            templateQuotes += `
            <section class="card mb-3 card-decorated">
                <article class="card-body">
                    <p class="text-secondary mb-0 text-quotes">
                        ${ qq.quote }
                    </p>
                    <p class="mb-0 text-secondary">
                        <small>${ qq.series }</small>
                    </p>
                </article>
            </section>
            `;
        } );

        return `
        ${ navbarHTML }
        <section class="container padding-main">
            <article class="row">
                <div class="col-12 col-md-6 h-70vh mb-3 mb-md-0">
                    <section class="card h-100">
                        <article class="card-body d-flex flex-column justify-content-center align-items-center">
                            <div class="mb-3 d-flex justify-content-center">
                                <img src="${ dataCharacter.img }" alt="${ dataCharacter.name }" 
                                    class="img-fluid card-thumbnail-circle">
                            </div>
                            <div class="mb-3">
                                <h3 class="text-center font-weight-bold mb-0">
                                    ${ dataCharacter.name }
                                </h3>
                                <p class="mb-0 text-secondary text-center">
                                    ${ dataCharacter.nickname }
                                </p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary js-random">
                                    ¡ Aleatorio ! 👾
                                </button>
                            </div>
                        </article>
                    </section>
                </div>
                <div class="col-12 col-md-6 h-70vh overflow-auto mb-3 mb-md-0">
                    ${ templateQuotes }
                </div>
            </article>
        </section>      
        `;
    }

    initListeners(){
        document.querySelector('.js-random').addEventListener(
            'click', this.handleRenderPageAgain.bind(this)
        );
    }

    async handleRenderPageAgain(){
        document.querySelector('.js-main').innerHTML = await this.getView();
        this.initListeners();
    }   

    async handleShowLoader(){
        const navbarHTML = await this.navbarComponent.getHTML('inicio');
        const loaderHTML = await this.loaderComponent.getHTML('general');
        const templateLoader = `${ navbarHTML } ${ loaderHTML }`;
        document.querySelector('.js-main').innerHTML = templateLoader;
    }
}
    