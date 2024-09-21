export const getCurrentDocument = (node: HTMLElement): Document =>
    node.ownerDocument;


export const getCurrentWindow = (doc: Document): (Window & typeof globalThis) => doc.defaultView!;