import { WelcomeView } from './../views/welcome.view.js';
import { HomeView } from './../views/home.view.js';
import { CharactersView } from './../views/characters.view.js';
import { EpisodesView } from './../views/episodes.view.js';
import { Page404View } from './../errors/page404.error.js';

export const router = async () => {
    const routes = [
        { path: '', view: WelcomeView },
        { path: 'inicio', view: HomeView },
        { path: 'personaje', view: CharactersView },
        { path: 'episodio', view: EpisodesView },
        { path: '**', view: Page404View }
    ];

    if ( location.hash === '')
        return location.href = './#/';
        
    const matchRoute = routes.map( (route) => ({ ...route, path: `#/${ route.path }` }) )
        .find( ({ path }) => location.hash === path );
    
    if ( matchRoute ){
        const currentView = new matchRoute.view();
        document.querySelector('.js-main').innerHTML = await currentView.getView();
        currentView.initListeners();
    }else {
        const errorView =  routes.find( ({ path }) => path === '**' );
        const errorReference = new errorView.view();
        document.querySelector('.js-main').innerHTML = await errorReference.getView();
    }
};


