import test from 'node:test';
import assert from 'node:assert';
import {MyClass} from "../index";


test("asdasdas", (t) => {
    assert.strictEqual(1, 1);
    let x = new MyClass();
    assert.strictEqual(x.add(), 5)
});

