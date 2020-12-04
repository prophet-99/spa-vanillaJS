export class AbstractView{
    constructor(){ }

    setTitle(title){
        document.title = title;
    }   

    async getView(){
        return '';
    }

    initListeners(){ }
}

