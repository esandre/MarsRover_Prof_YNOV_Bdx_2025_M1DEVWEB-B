import {IEtatRover, IRover, Orientation} from "./rover.interface";

export class Rover implements IRover, IEtatRover {
    private readonly _x: number;
    private readonly _y: number;
    private _orientation: Orientation;

    constructor(x: number, y: number, orientation: Orientation) {
        this._x = x;
        this._y = y;
        this._orientation = orientation;
    }

    GetPositionX(): number {
        return this._x;
    }

    GetPositionY(): number {
        return this._y;
    }

    GetOrientation(): Orientation {
        return Orientation.Nord;
    }

    Avancer(): Rover {
        if(this._orientation == Orientation.Sud)
            return new Rover(this._x, this._y - 1, Orientation.Sud);
        if(this._orientation == Orientation.Est)
            return new Rover(this._x + 1, this._y, Orientation.Est);
        if(this._orientation == Orientation.Ouest)
            return new Rover(this._x - 1, this._y, Orientation.Ouest);
        return new Rover(this._x, this._y + 1, Orientation.Nord);
    }

    Reculer(): IEtatRover {
        throw new Error("Method not implemented.");
    }

    TournerAGauche(): IEtatRover {
        throw new Error("Method not implemented.");
    }

    TournerADroite(): IEtatRover {
        throw new Error("Method not implemented.");
    }
}