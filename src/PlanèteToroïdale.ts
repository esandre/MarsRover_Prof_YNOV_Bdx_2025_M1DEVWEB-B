class PlanèteToroïdale {
    private _xMax: number;
    private _yMax: number;

    public constructor(xMax: number, yMax: number) {
        this._xMax = xMax;
        this._yMax = yMax;
    }

    public Normaliser(x: number, y: number): [number, number] {
        return [PlanèteToroïdale.modulo(x, this._xMax), PlanèteToroïdale.modulo(y, this._yMax)]
    }

    private static modulo(num: number, mod: number){
        const valeurRéduiteSignée = (num % mod) % -mod;
        const valeurNonSignée = valeurRéduiteSignée + mod;
        return valeurNonSignée % mod;
    }
}