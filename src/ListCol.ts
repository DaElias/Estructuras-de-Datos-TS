interface iListCol<T> {
    get(x: number): any;
    getFirst(): any;
    getLast(): any;
    set(x: number): void;
    setFirst(x: number): void;
    setLast(x: number): void;
    show(): string;
    deleteFirst(): void;
    deleteLast(): void;
    size(): number;
    serch(): boolean;
    isEmpty():boolean;
}

class ListaCol<T> implements iListCol<T>{

    private ptr: Nodo<T>;

    constructor() {
        this.ptr = new Nodo(null);
    }
    isEmpty(): boolean {
        return this.ptr===null;
    }
    get(x: number) {
        throw new Error("Method not implemented.");
    }
    getFirst() {
        throw new Error("Method not implemented.");
    }
    getLast() {
        throw new Error("Method not implemented.");
    }
    set(x: number): void {
        throw new Error("Method not implemented.");
    }
    setFirst(x: number): void {
        throw new Error("Method not implemented.");
    }
    setLast(x: number): void {
        throw new Error("Method not implemented.");
    }
    show(): string {
        throw new Error("Method not implemented.");
    }
    deleteFirst(): void {
        throw new Error("Method not implemented.");
    }
    deleteLast(): void {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
    serch(): boolean {
        throw new Error("Method not implemented.");
    }



}