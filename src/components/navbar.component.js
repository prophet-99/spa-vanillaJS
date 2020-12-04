export class NavbarComponent{
    constructor() {}

    async getHTML(currentRoute){
        return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
            <a class="navbar-brand" href="#">
                <img src="./assets/logo.png" alt="" width="80" class="img-fluid">
            </a>
            <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarReference" 
                aria-controls="navbarReference" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarReference">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ${ (currentRoute === 'inicio') ? 'active' : '' }">
                        <a class="nav-link font-weight-bold" href="./#/inicio">
                            Inicio
                        </a>
                    </li>
                    <li class="nav-item ${ (currentRoute === 'personaje') ? 'active' : '' }"">
                        <a class="nav-link font-weight-bold" href="./#/personaje">
                            Personajes
                        </a>
                    </li>
                    <li class="nav-item ${ (currentRoute === 'episodio') ? 'active' : '' }"">
                        <a class="nav-link font-weight-bold" href="./#/episodio">
                            Episodios
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    }      
}