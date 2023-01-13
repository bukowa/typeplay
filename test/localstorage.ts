import {LocalStorageMock} from "../index";


export class LocalStorageMockClass implements LocalStorageMock {
    store: Map<string, string>
    constructor() {
        this.store = new Map();
    }

    getItem(key: string): string {
        return this.store.get(key)
    }

    removeItem(key: string): void {
        this.store.delete(key)
    }

    setItem(key: string, value: string): void {
        this.store.set(key, value)
    }

}