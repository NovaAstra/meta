export function useDocument(node?: HTMLElement): Document {
    return node?.ownerDocument || document;
}