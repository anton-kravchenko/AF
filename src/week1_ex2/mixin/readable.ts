class Readable {
    public value: string;
    public isReadOnly(): string {
        return this.value = "can't be changed.";
    }
}

export default Readable;
