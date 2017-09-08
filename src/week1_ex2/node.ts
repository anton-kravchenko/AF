class Node<T> {
    private value: T;
    private next: Node<T> | null;
    private prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    public set(value: T): void {
        this.value = value;
    }

    public get(): T {
        return this.value;
    }

    public getNext(): Node<T> {
        return this.next;
    }

    public setNext(next: Node<T>): void {
        this.next = next;
    }

    public getPrev(): Node<T> {
        return this.prev;
    }

    public setPrev(prev: Node<T>): void  {
        this.prev = prev;
    }

    public hasNext(): boolean {
        return null !== this.next;
    }

    public hasPrev(): boolean {
        return null !== this.prev;
    }
}

export default Node;
