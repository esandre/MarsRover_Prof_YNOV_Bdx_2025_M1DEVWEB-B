export interface IRover {
    Avancer(): IEtatRover;
    Reculer(): IEtatRover;
    TournerAGauche(): IEtatRover;
    TournerADroite(): IEtatRover;
}

export interface IEtatRover {
    GetPositionX(): number;
    GetPositionY(): number;
    GetOrientation(): Orientation;
}

export class Orientation {
    static Nord: Orientation = new Orientation();
    static Sud: Orientation = new Orientation();
    static Est: Orientation = new Orientation();
    static Ouest: Orientation = new Orientation();
}