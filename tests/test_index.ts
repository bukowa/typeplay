import test from 'node:test';
import assert from 'node:assert';
import {MyClass} from "../static/index.js";


test("asdasdas", (t) => {
    assert.strictEqual(1, 1);
    let x = new MyClass();
    assert.strictEqual(x.add(), 5)
});

