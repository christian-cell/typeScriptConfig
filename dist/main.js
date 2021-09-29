var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var alfombrasArray = [];
var UserInterface = /** @class */ (function () {
    function UserInterface() {
        this.body = document.getElementById('tbody');
    }
    UserInterface.prototype.AddAlfombra = function (alfombra) {
        console.log(alfombra);
        var htmlTR = "";
        console.log(alfombra[0].pais);
        htmlTR += " <td class=\"pais_td\" > " + alfombra[alfombra.length - 1].pais + " </td> ";
        htmlTR += " <td class=\"precio_td\" > " + alfombra[alfombra.length - 1].precio + " </td> ";
        htmlTR += " <td class=\"stock_td\" > " + alfombra[alfombra.length - 1].stock + " </td> ";
        htmlTR += " <td class=\"id_td\" > " + alfombra[alfombra.length - 1].id + " </td> ";
        htmlTR += " <td> \n                        <button class=\"btn btn-danger\" \n                            onclick=\"new Methods().borrar(this.parentElement.\n                            parentElement,this.parentElement.previousElementSibling)\"> \n                            Delete \n                        </button>  \n                    </td> ";
        this.body.innerHTML += htmlTR;
    };
    UserInterface.prototype.ShowAlert = function (message, className) {
        console.log('estas en la function show alert');
        var alertContainer = document.getElementById('alert-container');
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.style.width = "100%";
        div.style.height = "50px";
        div.style.padding = "8px";
        div.style.fontSize = "20px";
        div.className = className;
        alertContainer.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 3000);
    };
    return UserInterface;
}());
var NewAlfombra = /** @class */ (function () {
    function NewAlfombra(pais, precio, stock, id) {
        this.pais = pais;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
    return NewAlfombra;
}());
var Methods = /** @class */ (function (_super) {
    __extends(Methods, _super);
    function Methods() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.input_total_precio = document.getElementById('input_total_precio');
        _this.input_total_alfombras = document.getElementById('input_total');
        return _this;
    }
    Methods.prototype.createNewAlfombra = function () {
        var input_pais = document.getElementById('input_pais').value;
        var input_precio = parseFloat(document.getElementById('input_precio').value);
        var identificador = document.getElementById('identificador').value;
        var input_stock = document.getElementById("input_stock");
        var stockValue = "";
        input_stock.checked === true ? stockValue = "YES" : stockValue = "NO";
        console.log(input_precio);
        console.log(input_pais);
        console.log(stockValue);
        console.log(identificador);
        if (input_pais === "" || input_precio === NaN || identificador === "") {
            this.ShowAlert('Revise y complete los campos Pais , Precio e Identificador', 'btn btn-warning');
        }
        else {
            var newAlfombra = {};
            newAlfombra = new NewAlfombra(input_pais, input_precio, stockValue, identificador);
            console.log(newAlfombra);
            var newAlfombraResp = true;
            console.log(alfombrasArray);
            for (var i = 0; i < alfombrasArray.length; i++) {
                alfombrasArray[i].id === newAlfombra.id ? newAlfombraResp = false : newAlfombraResp = true;
            }
            if (newAlfombraResp) {
                alfombrasArray.push(newAlfombra);
                this.AddAlfombra(alfombrasArray);
                input_pais = "";
                input_precio = 0;
                identificador = "";
                input_stock.checked = false;
            }
            else {
                this.ShowAlert('No puede introducir alfombra con IDENTIFICADOR repetido', 'btn btn-danger');
            }
        }
    };
    return Methods;
}(UserInterface));
