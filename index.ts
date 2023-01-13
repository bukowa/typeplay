
export interface LocalStorageMock {
    getItem(key: string): string
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
