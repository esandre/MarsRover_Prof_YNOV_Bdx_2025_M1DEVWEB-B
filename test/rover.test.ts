import {Orientation} from "../src/rover.interface";
import {Rover} from "../src/rover";

describe('Rover avance', () => {
    it.each([
        [1, 0, 0],
        [1, 1, 0],
        [2, 1, 1],
    ])('vers le Nord %s fois depuis %s,%s',
        (times: number, xInitial: number, yInitial: number) => {
            const orientation = Orientation.Nord;
            let rover : Rover = new Rover(xInitial, yInitial, orientation);

            for(let iteration = 0; iteration < times; iteration ++){
                rover = rover.Avancer();
            }

            expect(rover.GetPositionX()).toBe(xInitial);
            expect(rover.GetPositionY()).toBe(yInitial + times);
            expect(rover.GetOrientation()).toStrictEqual(orientation);
    });

    it.each([
        [1, 0, 0],
        [1, 1, 0],
        [2, 1, 1],
    ])('vers le Sud %s fois depuis %s,%s',
        (times: number, xInitial: number, yInitial: number) => {
            const orientation = Orientation.Sud;
            let rover : Rover = new Rover(xInitial, yInitial, orientation);

            for(let iteration = 0; iteration < times; iteration ++){
                rover = rover.Avancer();
            }

            expect(rover.GetPositionX()).toBe(xInitial);
            expect(rover.GetPositionY()).toBe(yInitial - times);
            expect(rover.GetOrientation()).toStrictEqual(orientation);
        });

    it.each([
        [1, 0, 0],
        [1, 1, 0],
        [2, 1, 1],
    ])('vers l\'Est %s fois depuis %s,%s',
        (times: number, xInitial: number, yInitial: number) => {
            const orientation = Orientation.Est;
            let rover : Rover = new Rover(xInitial, yInitial, orientation);

            for(let iteration = 0; iteration < times; iteration ++){
                rover = rover.Avancer();
            }

            expect(rover.GetPositionX()).toBe(xInitial + times);
            expect(rover.GetPositionY()).toBe(yInitial);
            expect(rover.GetOrientation()).toStrictEqual(orientation);
        });

    it.each([
        [1, 0, 0],
        [1, 1, 0],
        [2, 1, 1],
    ])('vers l\'Ouest %s fois depuis %s,%s',
        (times: number, xInitial: number, yInitial: number) => {
            const orientation = Orientation.Ouest;
            let rover : Rover = new Rover(xInitial, yInitial, orientation);

            for(let iteration = 0; iteration < times; iteration ++){
                rover = rover.Avancer();
            }

            expect(rover.GetPositionX()).toBe(xInitial - times);
            expect(rover.GetPositionY()).toBe(yInitial);
            expect(rover.GetOrientation()).toStrictEqual(orientation);
        });
})