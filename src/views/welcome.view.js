import { AbstractView } from "./abstract.view.js";

export class WelcomeView extends AbstractView{
    constructor(){
        super();
        this.setTitle('Bienvenido - Breaking Bad');
    }

    async getView(){
        return `
        <section class="container-fluid">
            <article class="row mh-100vh">
                <div class="col-12 col-md-6 bg-green d-flex flex-column justify-content-center 
                    align-items-center py-3">
                    <section class="mb-5">
                        <img src="./assets/logo.png" alt="logo de braking bad" 
                            class="img-fluid" width="200px">
                    </section>
                    <h2 class="font-weight-bold text-center mb-3 text-white">
                        Bienvenido a la SPA con Vanilla JS
                    </h2>
                    <p class="text-center text-grey">
                        Inspirada en la famosa serie Breaking Bad, donde construiremos una Single Page 
                        Application con ruteo dinámico. Además de aprender a consumir una API 
                        con los estándares actuales de 
                        <span class="font-weight-bold">Vanilla JS</span> 💥.
                    </p>
                    <a class="btn btn-dark btn-lg mb-3" href="./#/inicio">
                        Arribar
                    </a>
                    <p class="mb-0 text-grey">
                        <small class="font-weight-bold">
                            Hecho por Alexander Avila 🐱‍👤 | prophet-99
                        </small>
                    </p>
                </div>
                <div class="col-12 col-md-6 bg-dark">
                    <section class="grid-masonry">
                        <article class="grid-masonry__item-a">
                            <img src="./assets/thumbnail-two.jpg" alt="">
                        </article>
                        <article class="grid-masonry__item-b">
                            <img src="./assets/thumbnail-one.jpg" alt="">
                        </article>
                        <article>
                            <img src="./assets/thumbnail-three.jpg" alt="">
                        </article>
                    </section>
                </div>
            </article>
        </section>`;
    }
}
    