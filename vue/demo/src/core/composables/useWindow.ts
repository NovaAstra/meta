export function useWindow(doc?: Document): Window & typeof globalThis {
    return doc?.defaultView || window;
}