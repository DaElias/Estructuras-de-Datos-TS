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
