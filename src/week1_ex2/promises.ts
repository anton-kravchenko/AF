// Create three asynchronous
// (special for Anton/Alyona - invoke two async timeout in paralel when the first finish
// run third and when all finish console log 'Done!') timeout request to paralel.
// And When it all done log to console 'DONE!'(Use p)

function delayWithId(delay: number, id: number): Promise<number> {
    return new Promise<number>((resolve) => setTimeout(() => {
        console.log(id);
        resolve(id);
    }, delay * 1000));
}

function runInParallel(delay1: number, delay2: number, delay3: number): void {
    console.log("runInParallel");
    const p1 = delayWithId(delay1, 1);
    const p2 = delayWithId(delay2, 2);
    const p3 = delayWithId(delay3, 3);

    Promise.all([p1, p2, p3])
        .then((values) => {
            console.log("DONE!");
        });
}

function runInOrderedParallel(delay1: number, delay2: number, delay3: number): void {
    console.log("runInOrderedParallel");

    const p1 = new Promise<number>((resolve) => {
        setTimeout(() => {
            console.log(1);

            const p2 = delayWithId(delay2, 2);
            p2.then((result) => resolve);

        }, delay1 * 1000);
    });

    const p3 = delayWithId(delay3, 3);
    Promise.all([p1, p3])
        .then((values) => {
            console.log("DONE!");
        });
}
