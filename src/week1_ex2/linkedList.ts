import Node from "./node";

// Implement generic for two way linked list for different items type.

class LinkedList<T> {
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    private length: number = 0;

    public getSize(): number {
        return this.length;
    }

    public add(value: T): boolean {
        const node: Node<T> = new Node(value);
        const size = this.getSize();

        if (0 === size) {
            this.head = node;
        } else if (1 === size) {
            node.setPrev(this.head);
            this.head.setNext(node);
            this.tail = node;
        } else {
            node.setPrev(this.tail);
            this.tail.setNext(node);
            this.tail = node;
        }

        this.length += 1;
        return true;
    }

    public getFirst(): T | undefined {
        return this.head ? this.head.get() : this.head;
    }

    public getLast(): T | undefined {
        return this.tail ? this.tail.get() : this.tail;
    }

    public get(index: number): T | undefined {
        if (0 === index) {
            return this.getFirst();
        }

        if (index === this.getSize() - 1) {
            return this.getLast();
        }

        if (this.getSize() - 1 < index) {
            return undefined;
        }

        let node = this.head;
        while (0 < index) {
            node = node.getNext();
            index--;
        }

        return node.get();
    }

    public toArray(): T[] {
        const r: T[] = [];
        let node = this.head;

        while (node) {
            r.push(node.get());
            node = node.getNext();
        }

        return r;
    }

    public contains(value: T) {
        let contain = false;
        let node = this.head;

        while (node) {
            if (value === node.get()) {
                contain = true;
                break;
            }
            node = node.getNext();
        }

        return contain;
    }

    public indexOf(value: T) {
        let idx = -1;
        let node = this.head;

        let i = 0;
        for (i = 0; i < this.getSize(); i++) {
            if (value === node.get()) {
                idx = i;
                break;
            }
            node = node.getNext();
        }

        return idx;
    }

    public remove(index: number): boolean {
        let node = this.head;
        if (index >= this.getSize()) {
            return false;
        }

        if (0 === index) {
            this.head = this.head.getNext();
            this.length--;
            return true;
        }

        if (this.getSize() - 1 === index) {
            this.tail.setNext(undefined);
            this.tail = this.tail.getPrev();
            this.length--;
            return true;
        }

        for (let i = 0; i < index; i++) {
            node = node.getNext();
        }

        const prev = node.getPrev();
        const next = node.getNext();

        prev.setNext(next);
        next.setPrev(prev);
        this.length--;

        return true;
    }

    public isEmpty(): boolean {
        return 0 === this.getSize();
    }

    public clear(): void {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }
}

export default LinkedList;
