import * as $ from "jquery";

class SubmitButton {
    el: any;

    generateComponent() {
        return $(`<button id="submit" class=".btn-default">Submit</button>`);
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }

    public disable(){
        $(this.el).prop( "disabled", true );
    }

    public enable() {
        $(this.el).prop( "disabled", false );
    }
}

export default SubmitButton;