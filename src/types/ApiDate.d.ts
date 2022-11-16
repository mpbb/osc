export class ApiDate extends Number {
    constructor(value?: any) {
        super(value);
        this.date = new Date(this * 1000);
    }
}