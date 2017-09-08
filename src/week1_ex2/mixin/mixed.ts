// Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
// Class should contains property value: string.
// If Dispose it should be equals ''.
// If delete is should be equals 'deleted'.
// Id readonly it can't be changed.

import Deletable from "./deletable";
import Disposable from "./disposable";
import Readable from "./readable";
import applyMixins from "./utils";

class Mixed implements Disposable, Deletable, Readable {
    public value: string;
    public dispose: () => string;
    public delete: () => string;
    public isReadOnly: () => string;

    public getVal(): string {
        return this.value;
    }
}

applyMixins(Mixed, [Disposable, Deletable, Readable]);

export default Mixed;
