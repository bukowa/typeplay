
export interface LocalStorageMock {
    getItem(key: string): string
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}

export class FileStorage {
    storage: LocalStorageMock

    constructor(storage: LocalStorageMock) {
        this.storage = storage
    }

}

export class FileImage {
    id: string
    url: string
    name: string

    constructor(url: string, name: string) {
        this.url = url;
        this.name = name;
        this.id = Date.now().valueOf().toString()
    }

    render(): string {
        return ""
    }

    element(): HTMLElement {
        return document.getElementById(this.id)
    }
    /**
     * Deletes image from the backend.
     */
    delete(){}
}

