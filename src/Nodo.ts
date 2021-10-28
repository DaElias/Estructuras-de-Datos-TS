
interface INodo<T>{
    data:any
    next:Nodo<T>
    toString():string
}

class Nodo<T> implements INodo<T>{
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