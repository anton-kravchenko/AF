import * as $ from "jquery";

class NameInput {
    el: any;

    generateComponent() {
        return $(`<input type="text" placeholder="Name" id="nameInput" />`);
    }

    public isValid(): boolean {
        return this.el && this.el.val().trim().length > 5;
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }
}

export default NameInput;