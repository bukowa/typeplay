import test from 'node:test';
import assert from 'node:assert';
import {FileImage} from "../index";

test("test file rendering", (t) => {
    let url = "/media/my-image";
    let name = "poppy.img"

    // test init
    let file = new FileImage(url, name);
    assert.strictEqual(file.name, name);
    assert.strictEqual(file.url, url);
    assert.equal(file.id.length, 13)

});