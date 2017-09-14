import * as $ from "jquery";

class EmailInput {
    el: any;

    generateComponent() {
        return $(`<input type="email" placeholder="Email" id="emailInput"/>`);
    }

    public isValid(): boolean {
        return this.el && this.el.val().trim().length > 0;
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }
}

export default EmailInput;