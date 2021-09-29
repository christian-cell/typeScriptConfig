var alfombrasArray : Array<any> = [];


class UserInterface  {

    body = <HTMLDivElement> document.getElementById('tbody');


    public AddAlfombra (alfombra : any[] ) {
        console.log(alfombra);
        let htmlTR : string = "";
        console.log(alfombra[0].pais)
        htmlTR += ` <td class="pais_td" > ${alfombra[alfombra.length - 1].pais} </td> `;
        htmlTR += ` <td class="precio_td" > ${alfombra[alfombra.length - 1].precio} </td> `;
        htmlTR += ` <td class="stock_td" > ${alfombra[alfombra.length - 1].stock} </td> `;
        htmlTR += ` <td class="id_td" > ${alfombra[alfombra.length - 1].id} </td> `;
        htmlTR += ` <td> 
                        <button class="btn btn-danger" 
                            onclick="new Methods().borrar(this.parentElement.
                            parentElement,this.parentElement.previousElementSibling)"> 
                            Delete 
                        </button>  
                    </td> `
        this.body.innerHTML += htmlTR; 
    }

    public ShowAlert ( message  ,className) {
        console.log('estas en la function show alert')
        let alertContainer = <HTMLDivElement> document.getElementById('alert-container');
        let div = <HTMLDivElement> document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.style.width = "100%";
        div.style.height = "50px";
        div.style.padding = "8px";
        div.style.fontSize = "20px";
        div.className =  className;
        alertContainer.appendChild(div)

        setTimeout(() => {
            div.remove();
        }, 3000);
    }
}

class NewAlfombra {

    pais : string ;
    precio : number ;
    stock : string ;
    id : string ;

    constructor(pais,precio,stock,id){
        this.pais = pais;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }

}

class Methods extends UserInterface {

    input_total_precio = document.getElementById('input_total_precio');
    input_total_alfombras = document.getElementById('input_total');

   

    createNewAlfombra(){
        
        let input_pais : string = (<HTMLInputElement>document.getElementById('input_pais')).value;
        let input_precio : number = parseFloat((<HTMLInputElement>document.getElementById('input_precio')).value);
        let identificador : string = (<HTMLInputElement>document.getElementById('identificador')).value;
        var input_stock = <HTMLInputElement> document.getElementById("input_stock");

        let stockValue : string = "";

        input_stock.checked === true ? stockValue = "YES" :stockValue = "NO";

        console.log(input_precio);
        console.log(input_pais);
        console.log(stockValue);
        console.log(identificador);

        if ( input_pais === "" || input_precio === NaN || identificador === "" ) {
            
            this.ShowAlert('Revise y complete los campos Pais , Precio e Identificador',
            'btn btn-warning');

        } else {

           let newAlfombra = {} as NewAlfombra;

           newAlfombra = new NewAlfombra(input_pais , input_precio , stockValue , identificador);
           console.log(newAlfombra)

           let newAlfombraResp : boolean = true ;

           console.log(alfombrasArray);
           
           for (let i = 0; i < alfombrasArray.length; i++) {
               
                alfombrasArray[i].id === newAlfombra.id ? newAlfombraResp = false : newAlfombraResp = true;
               
            }

           if(newAlfombraResp){
              
              alfombrasArray.push(newAlfombra);
              this.AddAlfombra(alfombrasArray)
              input_pais = "";
              input_precio = 0;
              identificador = "";
              input_stock.checked = false ;
              
            } else {
                
                this.ShowAlert('No puede introducir alfombra con IDENTIFICADOR repetido',
                'btn btn-danger');

            }

           
        

          
        } 
        
    }

}