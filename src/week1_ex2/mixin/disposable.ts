class Disposable {
    public value: string;
    public dispose(): string {
        return this.value =  "";
    }
}

export default Disposable;
