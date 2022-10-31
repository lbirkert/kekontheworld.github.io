import { promises } from "fs";
import { dirname, join } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const files = await promises.readdir(__dirname);

for (const file of files) {
	if (!file.endsWith(".frag") && !file.endsWith(".vert")) continue;

	const path = join(__dirname, file);

	const data = "export default `\n" + (await promises.readFile(path)) + "\n`";

	await promises.writeFile(path + ".js", data);
}
