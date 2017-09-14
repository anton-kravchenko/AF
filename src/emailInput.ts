import * as $ from "jquery";

class EmailInput {
    el: any;
    emailRegExp: RegExp;

    constructor() {
        this.emailRegExp = /\S+@\S+\.\S+/;
    }
    generateComponent() {
        return $(`<input type="text" placeholder="Email" id="emailInput"/>`);
    }

    public isValid(): boolean {
        return this.el && this.emailRegExp.test(this.el.val().trim());
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }
}

export default EmailInput;