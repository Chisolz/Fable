"use strict";
// Buttons designated to file system
let currentPath = "/src";
const project = {
    name: "src",
    path: "/src",
    type: "folder",
    createdAt: new Date(),
    modifiedAt: new Date(),
    children: []
};
function getFileFromPath(root, path) {
    if (root.path === path)
        return root;
    for (const child of root.children) {
        if (child.path === path)
            return child;
        if (child.type === "folder") {
            const found = getFileFromPath(child, path);
            if (found)
                return found;
        }
    }
    return null;
}
