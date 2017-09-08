import * as Rx from 'rxjs/Rx';

function delayWithId(delay: number, id: number): Promise<Number> {
    return new Promise<number>((resolve) => setTimeout(() => resolve(id) , delay * 1000));
}

function runInParallel(delay1: number, delay2: number, delay3: number): void {
    console.log('runInParallel');
    const p1 = delayWithId(delay1, 1);
    const p2 = delayWithId(delay2, 2);
    const p3 = delayWithId(delay3, 3);

    const p1Source = Rx.Observable.fromPromise(p1);
    const p2Source = Rx.Observable.fromPromise(p2);
    const p3Source = Rx.Observable.fromPromise(p3);

    Rx.Observable
        .merge(p1Source)
        .merge(p2Source)
        .merge(p3Source)
        .subscribe(
            (id) => console.log(id),
            (error) => console.log(error),
            () =>{ console.log("Done");}
    )
}

// runInParallel(5, 10, 1);

function runInOrderedParallel(delay1: number, delay2: number, delay3: number): void {
    console.log("runInOrderedParallel");

    const p1 = delayWithId(delay1, 1);
    const p2 = delayWithId(delay2, 2);
    const p3 = delayWithId(delay3, 3);

    const p1Source = Rx.Observable.fromPromise(p1);
    const p2Source = Rx.Observable.fromPromise(p2);
    const p3Source = Rx.Observable.fromPromise(p3);

    Rx.Observable
                .forkJoin(p1Source, p2Source)
                .merge(p3Source)
                .subscribe(
                    (id) => console.log(id),
                    (error) => console.log(error),
                    () =>{ console.log("Done");}
    )
}

runInOrderedParallel(5, 3, 1);
