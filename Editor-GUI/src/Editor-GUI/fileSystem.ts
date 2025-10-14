// Buttons designated to file system


type VFS = { // Virtual File System
    name: string;
    path: string;
    createdAt: Date;
    modifiedAt: Date;
}

type VFile = VFS & {
    type: "file";
    content: string;
    extention: string;
}

type VFolder = VFS & {
    type: "folder";
    children: Array<VFolder | VFile>;
}

type VNode = VFile | VFolder;

let currentPath = "/src";

const project : VFolder = {
    name: "src",
    path: "/src",
    type: "folder",
    createdAt: new Date(),
    modifiedAt: new Date(),
    children: []
}

function getFileFromPath(root: VFolder, path: string) : VNode | null {
    if (root.path === path) return root;

    for (const child of root.children) {
        if (child.path === path) return child;
        if (child.type === "folder") {
            const found = getFileFromPath(child, path);
            if (found) return found;
        }
    }

    return null;
}