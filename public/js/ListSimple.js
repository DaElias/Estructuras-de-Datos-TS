"use strict";
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
    ListaCircle.prototype.get = function () {
        return this.cursor.data;
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
        if (!this.isEmpty()) {
            if (this.cursor.next === null) {
                this.cursor.data = null;
            }
            else {
                this.cursor = this.cursor.next;
            }
        }
    };
    ListaCircle.prototype.isEmpty = function () {
        return this.cursor.data === null;
    };
    return ListaCircle;
}());
