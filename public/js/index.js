"use strict";
var Nodo = /** @class */ (function () {
    function Nodo(item) {
        this.data = item;
        this.next = null;
    }
    Nodo.prototype.toString = function () {
        return this.data;
    };
    return Nodo;
}());
var ListaCircle = /** @class */ (function () {
    function ListaCircle() {
        this.cursor = new Nodo(null);
    }
    ListaCircle.prototype.add = function (elemt) {
        if (this.isEmpty()) {
            this.cursor.data = elemt;
        }
        else {
            //code here
            var nuevo = new Nodo(elemt);
            //var p: Nodo<T> = this.cursor;
            nuevo.next = this.cursor;
            this.cursor = nuevo;
        }
    };
    ListaCircle.prototype.get = function (elemt) {
        throw new Error("Method not implemented.");
    };
    ListaCircle.prototype.show = function () {
        if (!this.isEmpty()) {
            var p = this.cursor;
            var text = "";
            while (p !== null) {
                text += p.toString() + " ";
                p = p.next;
            }
            //console.log(this.cursor);
            return text;
        }
        return "";
    };
    ListaCircle.prototype.delete = function () {
        throw new Error("Method not implemented.");
    };
    ListaCircle.prototype.isEmpty = function () {
        return this.cursor.data === null;
    };
    return ListaCircle;
}());
// Test 
console.log("Test");
var lista = new ListaCircle();
lista.add(1);
lista.add(2);
lista.add(3);
lista.add(4);
console.log(lista.show());
