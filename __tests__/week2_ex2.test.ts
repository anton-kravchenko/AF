import Order from "../src/week2_ex4/order";
import {} from 'jest';
import { assert } from 'chai';

describe("test Order class", () => {
    test("Test asyncCountTotal method. Add two items 50 and 50," +
          "countTotal with 5%, should be returns 105 after 2 seconds.", (done: Function) => {
        const order: Order = new Order();
        const item1:number = 50;
        const item2:number = 50;
        const tax:number = 5;
        const expectedResult: number = 105;
        order.addItem(item1);
        order.addItem(item2);

        const callback:(num:number)=> void = (data:number): void => {
            assert.equal(expectedResult, data, 'Unexpected output');
            done();
        };

        order.asyncCountTotal(tax, callback);
    });

    test("Test asyncCountTotal method. Expect to throw.", () => {
        const order: Order = new Order();
        const tax:number = 101;


        assert.throws(()=> {
            order.asyncCountTotal(tax, jest.fn());
        }, "Invalid tax range");
});

});