import LinkedList from "../src/week1_ex2/linkedList";
import Mixed from "../src/week1_ex2/mixin/mixed";
import Node from "../src/week1_ex2/node";

describe("test LinkedList class", () => {
    test("create Class instance", () => {
        const c: LinkedList<number> = new LinkedList();
    });

    test("test adding elements to list", () => {
        const c: LinkedList<number> = new LinkedList();
        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);
        expect(c.add(3)).toBe(true);
        expect(c.add(4)).toBe(true);
        expect(c.add(5)).toBe(true);
    });

    test("test getSize method", () => {
        const c: LinkedList<number> = new LinkedList();
        expect(c.getSize()).toBe(0);
        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);

        expect(c.getSize()).toBe(2);

        expect(c.add(3)).toBe(true);
        expect(c.add(4)).toBe(true);
        expect(c.add(5)).toBe(true);

        expect(c.getSize()).toBe(5);
    });

    test("test clear method", () => {
        const c: LinkedList<number> = new LinkedList();

        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);
        expect(c.getSize()).toBe(2);

        c.clear();
        expect(c.getSize()).toBe(0);
    });

    test("test contains method", () => {
        const c: LinkedList<number> = new LinkedList();

        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);

        expect(c.contains(1)).toBe(true);
        expect(c.contains(2)).toBe(true);
        expect(c.contains(3)).toBe(false);
    });

    test("test toArray method", () => {
        const c: LinkedList<number> = new LinkedList();
        expect(c.toArray()).toEqual([]);

        const expected = [];
        for (let i = 0; i < 10; i++) {
            c.add(i);
            expected.push(i);
        }

        expect(c.getSize()).toBe(10);
        expect(c.toArray()).toEqual(expected);
    });

    test("test indexOf function", () => {
        const c: LinkedList<number> = new LinkedList();
        expect(c.toArray()).toEqual([]);

        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);

        expect(c.indexOf(1)).toEqual(0);
        expect(c.indexOf(2)).toEqual(1);

        expect(c.indexOf(0)).toEqual(-1);
    });

    test("test remove method", () => {
        const a: LinkedList<number> = new LinkedList();

        for (let i = 0; i < 5; i++ ) {
            a.add(i);
        }

        // remove head
        expect(a.getSize()).toBe(5);
        expect(a.remove(0)).toBe(true);
        expect(a.toArray()).toEqual([1, 2, 3, 4]);
        a.clear();

        for (let i = 0; i < 5; i++ ) {
            a.add(i);
        }

        // remove tail
        expect(a.getSize()).toBe(5);
        expect(a.remove(4)).toBe(true);
        expect(a.toArray()).toEqual([0, 1, 2, 3, 4]);
        a.clear();

        for (let i = 0; i < 5; i++ ) {
            a.add(i);
        }

        // remove from middle
        expect(a.getSize()).toBe(5);
        expect(a.remove(3)).toBe(true);
        expect(a.toArray()).toEqual([0, 1, 2, 4]);
    });

    test("test isEmpty method", () => {
        const c: LinkedList<number> = new LinkedList();
        expect(c.isEmpty()).toBe(true);
        c.add(1);
        c.add(2);
        c.add(3);

        expect(c.isEmpty()).toBe(false);

        c.remove(1);
        c.remove(1);
        c.remove(0);

        expect(c.isEmpty()).toBe(true);
    });

    test("test getFirst/Last method", () => {
        const c: LinkedList<number> = new LinkedList();

        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);
        expect(c.add(3)).toBe(true);

        expect(c.getFirst()).toBe(1);
        expect(c.getLast()).toBe(3);
    });

    test("test get method", () => {
        const c: LinkedList<number> = new LinkedList();

        expect(c.add(0)).toBe(true);
        expect(c.add(1)).toBe(true);
        expect(c.add(2)).toBe(true);
        expect(c.add(3)).toBe(true);
        expect(c.add(4)).toBe(true);
        expect(c.add(5)).toBe(true);

        expect(c.get(0)).toBe(0);
        expect(c.get(1)).toBe(1);
        expect(c.get(2)).toBe(2);
        expect(c.get(3)).toBe(3);
        expect(c.get(4)).toBe(4);
        expect(c.get(5)).toBe(5);

        expect(c.get(6)).toBe(undefined);
        expect(c.get(7)).toBe(undefined);
    });
});

describe("test Node class", () => {
    test("test Class instance", () => {
        const n: Node<boolean> = new Node(true);
    });

    test("test get/set value method", () => {
        const n: Node<number> = new Node(1);

        expect(n.get()).toBe(1);
        n.set(3);

        expect(n.get()).toBe(3);
    });

    test("test get/set next method", () => {
        const n: Node<number> = new Node(1);

        expect(n.getNext()).toBe(undefined);

        const next: Node<number> = new Node(3);
        n.setNext(next);

        expect(n.getNext()).toBe(next);
        expect(n.getNext().get()).toBe(3);
    });

    test("test get/set prev method", () => {
        const n: Node<number> = new Node(1);

        expect(n.getPrev()).toBe(undefined);

        const prev: Node<number> = new Node(3);
        n.setPrev(prev);

        expect(n.getPrev()).toBe(prev);
        expect(n.getPrev().get()).toBe(3);
    });

    test("test hasNext/Prev methods", () => {
        const n: Node<number> = new Node(1);
        expect(n.hasNext()).toBe(false);
        expect(n.hasPrev()).toBe(false);

        n.setNext(new Node(1));
        expect(n.hasNext()).toBe(true);
        expect(n.hasPrev()).toBe(false);

        n.setPrev(new Node(2));
        expect(n.hasNext()).toBe(true);
        expect(n.hasPrev()).toBe(true);
    });
});

describe("test Mixed class", () => {
    test("test Mixed instance", () => {
        const m: Mixed = new Mixed();
    });

    test("test dispose/delete/isReadOnly methods", () => {
        const m: Mixed = new Mixed();
        expect(m.dispose()).toBe("");
        expect(m.getVal()).toBe("");

        expect(m.delete()).toBe("deleted");
        expect(m.getVal()).toBe("deleted");

        expect(m.isReadOnly()).toBe("can't be changed.");
        expect(m.getVal()).toBe("can't be changed.");
    });
});
