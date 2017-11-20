const Stack = require('./stack');

describe('Stack practice', () => {
    let myWeeklyMenu;
    let firstInput;
    let secondInput;
    let testInput;

    beforeEach(() => {
        firstInput = 'RedBeans';
        secondInput = 'super';
        testInput = 'test';

        myWeeklyMenu = new Stack();
        myWeeklyMenu.push(firstInput);
    });

    it('should add the value to the stack', () => {
        expect(myWeeklyMenu.size()).toEqual(1);

        myWeeklyMenu.push(secondInput);
        expect(myWeeklyMenu.size()).toEqual(2);
    });

    it('should pop the latest value from the stack', () => {
        expect(myWeeklyMenu.size()).toEqual(1);

        const popped = myWeeklyMenu.pop();

        expect(popped).toEqual(firstInput);

        expect(myWeeklyMenu.size()).toEqual(0);

        myWeeklyMenu.push(secondInput);

        expect(myWeeklyMenu.size()).toEqual(1);

        const secondPopped = myWeeklyMenu.pop();

        expect(secondPopped).toEqual(secondInput);

        expect(myWeeklyMenu.size()).toEqual(0);
    });

    it('should get the size', () => {
        expect(myWeeklyMenu.size()).toEqual(1);

        myWeeklyMenu.push(testInput);
        expect(myWeeklyMenu.size()).toEqual(2);

        myWeeklyMenu.push(testInput);
        expect(myWeeklyMenu.size()).toEqual(3);

        myWeeklyMenu.pop();
        expect(myWeeklyMenu.size()).toEqual(2);
    });
});
