import { AbstractView } from "./../views/abstract.view.js";

export class Page404View extends AbstractView{
    
    constructor(){
        super();
        this.setTitle('Página no encontrada - Breaking Bad');
    }

    async getView(){
        return `
            <section class="container-fluid d-flex flex-column 
                justify-content-center align-items-center p-5">
                <h1 class="text-white font-weight-bold mb-5">
                    Página no encontrada
                </h1>
                <img src="./assets/not-found.svg" alt="not-found"
                    class="img-fluid mb-5" width="550px">    
                <a class="btn btn-lg btn-primary" href="./#/">
                    Sácame de aquí
                </a>
            </section>
        `;
    }
}