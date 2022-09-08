import { promises } from "fs";
import { join } from "path";
import { minify as _minify } from "minify";

export function minify(options) {
    return minifyDirectory(options.root || ".", options.extensions || [], options.minify || {});
}

export async function minifyDirectory(root, extensions, options) {
    const files = await promises.readdir(root);
    for(const file of files) {
        const path = join(root, file);
        if((await promises.stat(path)).isDirectory()) {
            await minifyDirectory(path, extensions, options);
        } else if(extensions.includes(file.split(".").pop())) {
            await minifyFile(path, options);
        }
    }
}

export async function minifyFile(path, options) {
    console.log("Minifying", path);
    const data = await _minify(path, options).catch(console.error);
    console.log("Writing to", path);
    await promises.writeFile(path, data);
}