"use strict";
// Create three asynchronous (special for Anton/Alyona -
// invoke two async timeout in paralel when the first finish
// run third and when all finish console log 'Done!')
// timeout request to paralel.
// And When it all done log to console 'DONE!'(Use p)
exports.__esModule = true;
// const delay = function(time: number): Promise<string> {
//     return new Promise<string>((res: (string) => void, rej: (string) => void) => {
//         setTimeout((): void=> res('Done'), time * 1000);
//     });
// }
// function delayVoid(ms: number) {
//     return new Promise<void>(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }
// delay(1)
//     .then((data: string):Promise<string> => {
//         console.log(data);
//         return delay(2);
//     })
//     .then((data: string):Promise<string> => {
//         console.log(data);
//         return delay(0.5);
//     })
//     .then((data: string) => {
//         console.log(data);
//         console.log('Completely done!');
//     });
// async function asyncAwait() {
//     console.log("Knock, knock!");
//     await delay(1000);
//     console.log("Who's there?");
//     await delay(1000);
//     console.log("async/await!");
// }
// import * as Rx from 'rxjs/Rx';
// function delay(seconds: number): Promise<string> {
//     return new Promise<string>((resolve) => setTimeout(() => resolve("Done."), seconds * 1000));
// }
// function runInParallel(delay1: number, delay2: number, delay3: number, callback: ()=> number): void{
//     const p1 = new Promise<string>((resolve) => setTimeout(() => resolve("1") , delay1 * 1000));
//     const p2 = new Promise<string>((resolve) => setTimeout(() => resolve("2") , delay2 * 1000));
//     let count = 0;
//     const source = Rx.Observable.from([p1, p2]);
//     const sub = source.subscribe(
//         (x) => {
//             console.log('Next: %s', x);
//         },
//         (err): void => {
//             console.log('error:', err);
//         },
//         () => {
//            console.log('Completed');
//         }
//     );
// }
var Rx = require("rxjs/Rx");
function runInParallel(delay1, delay2, delay3) {
    // function runInParallel(delay1: number, delay2: number, delay3: number, callback: ()=> number): void{
    var p1 = new Promise(function (resolve) { return setTimeout(function () { return resolve(1); }, delay1 * 1000); });
    var p2 = new Promise(function (resolve) { return setTimeout(function () { return resolve(2); }, delay2 * 1000); });
    var p3 = new Promise(function (resolve) { return setTimeout(function () { return resolve(2); }, delay3 * 1000); });
    // const observable = Rx.Observable.concat(p1, p2);
    // observable.subscribe(
    //     function onNext(id) {
    //         if (1 == id){
    //             observable.next(p3);
    //         }
    //     },
    //     function onErroid(e) {
    //     },
    //     function onCompleted() {
    //     }
    // )
    var p1Source = Rx.Observable.fromPromise(p1);
    var p2Source = Rx.Observable.fromPromise(p1);
    p1Source
        .concat(p2Source)
        .subscribe(function onNext(id) {
        console.log(id);
    }, function onErroid(e) {
    }, function onCompleted() {
        console.log("complete");
    });
}
runInParallel(1000, 2000, 3000);
// var observable = Rx.Observable.create(function (observer) {
//     observer.next(1);
//     observer.next(new Promise)
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//       observer.next(4);
//       observer.complete();
//     }, 1000);
//   });
// console.log('just before subscribe');
// observable.subscribe({
// next: x => console.log('got value ' + x),
// error: err => console.error('something wrong occurred: ' + err),
// complete: () => console.log('done'),
// });
// console.log('just after subscribe');
