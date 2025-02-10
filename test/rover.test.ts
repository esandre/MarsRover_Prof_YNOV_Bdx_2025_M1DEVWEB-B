import {Orientation} from "../src/rover.interface";
import {Rover} from "../src/rover";

describe('Rover avance', () => {
    test('depuis 0,0,N', () => {
        const orientation = Orientation.Nord;
        const rover : Rover = new Rover(0, 0, orientation);

        const etat = rover.Avancer();

        expect(etat.GetPositionX()).toBe(0);
        expect(etat.GetPositionY()).toBe(1);
        expect(etat.GetOrientation()).toBe(orientation);
    });

    test('depuis 1,0,N', () => {
        const orientation = Orientation.Nord;
        const rover : Rover = new Rover(1, 0, orientation);

        const etat = rover.Avancer();

        expect(etat.GetPositionX()).toBe(1);
        expect(etat.GetPositionY()).toBe(1);
        expect(etat.GetOrientation()).toBe(orientation);
    })

    test('depuis 0,1,N', () => {
        const orientation = Orientation.Nord;
        const rover : Rover = new Rover(0, 1, orientation);

        const etat = rover.Avancer();

        expect(etat.GetPositionX()).toBe(0);
        expect(etat.GetPositionY()).toBe(2);
        expect(etat.GetOrientation()).toBe(orientation);
    })

    test('2 fois depuis 0,0,N', () => {
        const orientation = Orientation.Nord;
        let rover : Rover = new Rover(0, 0, orientation);

        rover = rover.Avancer().Avancer();

        expect(rover.GetPositionX()).toBe(0);
        expect(rover.GetPositionY()).toBe(2);
        expect(rover.GetOrientation()).toBe(orientation);
    })
})