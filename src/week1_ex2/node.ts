class Node<T> {
    private value: T;
    private next: Node<T> | undefined;
    private prev: Node<T> | undefined;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }

    public set(value: T): void {
        this.value = value;
    }

    public get(): T {
        return this.value;
    }

    public getNext(): Node<T> | undefined {
        return this.next;
    }

    public setNext(next: Node<T> | undefined): void {
        this.next = next;
    }

    public getPrev(): Node<T> | undefined {
        return this.prev;
    }

    public setPrev(prev: Node<T>  | undefined): void  {
        this.prev = prev;
    }

    public hasNext(): boolean {
        return undefined !== this.next;
    }

    public hasPrev(): boolean {
        return undefined !== this.prev;
    }
}

export default Node;
