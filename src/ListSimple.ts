interface TadListaCircle<T> {
    add(elemt: T): void,
    get(): any,
    show(): string,
    delete(): void,
    isEmpty(): boolean
}

class ListaCircle<T> implements TadListaCircle<T> {

    private cursor: Nodo<T>;

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
    get() {
        return this.cursor.data;
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
        if(!this.isEmpty()){
            if(this.cursor.next===null){
                this.cursor.data=null;
            }else{
                this.cursor=this.cursor.next;
            }
        }
    }
    isEmpty(): boolean {
        return this.cursor.data === null;
    }

}


