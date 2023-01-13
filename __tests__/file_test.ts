import {FileImage} from "../index";
import {describe, test} from '@jest/globals';

describe("test file rendering", () => {
    test("c", () =>{
        let url = "/media/my-image";
        let name = "poppy.img"

        // test init
        let file = new FileImage(url, name);
        // assert.strictEqual(file.name, name);
        // assert.strictEqual(file.url, url);
        // assert.equal(file.id.length, 13)
    })
});