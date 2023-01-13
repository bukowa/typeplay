import test from 'node:test';
import assert from 'node:assert';
import {LocalStorageMockClass} from "./localstorage";

test("local storage implementation works", (t) =>{
    let storage = new LocalStorageMockClass()
    let key = "hello";
    let value = "world"
    let key2 = "hello2";
    let value2 = "world2";

    // check if storage exists and is empty
    assert.strictEqual(storage.store.size, 0)

    // set values on storage
    storage.setItem(key, value);
    storage.setItem(key2, value2);
    assert.strictEqual(storage.store.size, 2);

    // check if values are equal
    assert.strictEqual(storage.getItem(key), value)
    assert.strictEqual(storage.getItem(key2), value2);

    // check if we can delete values
    storage.removeItem(key);
    assert.strictEqual(storage.store.size, 1);
    assert.strictEqual(storage.getItem(key), undefined);

    storage.removeItem(key2);
    assert.strictEqual(storage.store.size, 0);
    assert.strictEqual(storage.getItem(key2), undefined)

})

