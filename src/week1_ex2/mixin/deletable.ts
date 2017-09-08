class Deletable {
    public value: string;
    public delete(): string {
        return this.value = "deleted";
    }
}

export default Deletable;
