

interface TadListaCircle<T> {
    add(elemt: T): void,
    get(elemt: T): void,
    show(): string,
    delete(): void
    isEmpty(): boolean
}

class Nodo<T> {
    public data: any;
    public next: Nodo<T> | any;

    constructor(item: any) {
        this.data = item;
        this.next = null;
    }

    public toString(): string {
        return this.data;
    }
}


class ListaCircle<T> implements TadListaCircle<T> {

    public cursor: Nodo<T>;

    constructor() {
        this.cursor = new Nodo(null);
    }

    add(elemt: T): void {
        if (this.isEmpty()) {
            this.cursor.data = elemt;

        } else {
            //code here
            const nuevo: Nodo<T> = new Nodo(elemt);
            //var p: Nodo<T> = this.cursor;
            nuevo.next = this.cursor;
            this.cursor = nuevo;
        }
    }
    get(elemt: T): void {
        throw new Error("Method not implemented.");
    }
    show(): string {
        if (!this.isEmpty()) {
            var p: Nodo<T> = this.cursor;
            var text: string = "";
            while (p !== null) {
                text += p.toString() + " ";
                p = p.next;
            }
            //console.log(this.cursor);
            return text;
        }
        return "";
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        return this.cursor.data === null;
    }



}

// Test 
console.log("Test")
const lista = new ListaCircle();
lista.add(1);
lista.add(2);
lista.add(3);
lista.add(4);




console.log(lista.show());
