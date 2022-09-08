import { existsSync, unlinkSync } from "fs";
import { join } from "path";
import { minify } from "./minify.js";

const root = "build";
const manifest = join(root, "vite-manifest.json");


if(existsSync(manifest)) {
    console.log("Removing manifest at", manifest);
    unlinkSync(manifest);
}

minify({
    extensions: ["html"],
    miniy: {
        html: {
            removeAttributeQuotes: true,
            removeOptionalTags: true,
        }
    },
    root
});