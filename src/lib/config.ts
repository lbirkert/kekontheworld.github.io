import {
	faCss3,
	faCuttlefish,
	faHtml5,
	faJava,
	faJs,
	faPhp,
	faPython
} from "@fortawesome/free-brands-svg-icons";
import type { License, Project } from "./types";

export const EMAIL = "kekontheworld@gmail.com";

export const DISCORD_URL = "https://discord.gg/Cq2UpzeTnm";
export const GITHUB_URL = "https://github.com/lbirkert";
export const GITLAB_URL = "https://gitlab.com/KekOnTheWorld";
export const TWITTER_URL = "https://twitter.com/KekOnTheWorld";
export const TWITCH_URL = "https://twitch.tv/KekOnTheWorld";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCn-EuwrJNTYtkBS-r_XudjA";

export const EXPERIENCE_LANGS = [
	{
		name: "CSS",
		perc: "99%",
		icon: faCss3
	},
	{
		name: "Java",
		perc: "98%",
		icon: faJava
	},
	{
		name: "HTML",
		perc: "95%",
		icon: faHtml5
	},
	{
		name: "JavaScript, TypeScript",
		perc: "94%",
		icon: faJs
	},
	{
		name: "Python",
		perc: "90%",
		icon: faPython
	},
	{
		name: "C, C++, C#",
		perc: "85%",
		icon: faCuttlefish
	},
	{
		name: "ZIG",
		perc: "75%",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 140" style="height:1em">
		<g fill="currentColor">
			<g>
				<polygon points="46,22 28,44 19,30"/>
				<polygon points="46,22 33,33 28,44 22,44 22,95 31,95 20,100 12,117 0,117 0,22" shape-rendering="crispEdges"/>
				<polygon points="31,95 12,117 4,106"/>
			</g>
			<g>
				<polygon points="56,22 62,36 37,44"/>
				<polygon points="56,22 111,22 111,44 37,44 56,32" shape-rendering="crispEdges"/>
				<polygon points="116,95 97,117 90,104"/>
				<polygon points="116,95 100,104 97,117 42,117 42,95" shape-rendering="crispEdges"/>
				<polygon points="150,0 52,117 3,140 101,22"/>
			</g>
			<g>
				<polygon points="141,22 140,40 122,45"/>
				<polygon points="153,22 153,117 106,117 120,105 125,95 131,95 131,45 122,45 132,36 141,22" shape-rendering="crispEdges"/>
				<polygon points="125,95 130,110 106,117"/>
			</g>
		</g>
		</svg>`
	},
	{
		name: "PHP",
		perc: "30%",
		icon: faPhp
	}
];

export const LICENSES = {
	mit: {
		name: "MIT License",
		short: "MIT"
	},
	"gpl-3.0": {
		name: "GNU General Public License v3",
		short: "GNU GPLv3"
	}
} as { [key: string]: License };

export const EXTERNAL_LICENSE_URL = "https://oss.kotw.dev/licenses/?id=";

export const PROJECTS = [
	{
		title: "kotw.dev",
		description: "This website is developed entirely opensource.",
		license: "mit",
		repo: "KekOnTheWorld/kekontheworld.github.io",
		demo: "https://kotw.dev"
	},
	{
		title: "frenchscape",
		description: "A vocabulary trainer for mobile devices.",
		license: "mit",
		repo: "KekOnTheWorld/frenchscape"
	},
	{
		title: "UnicodeExplorer",
		description: "A tool, with which you can explore the unicode landscape.",
		license: "mit",
		repo: "KekOnTheWorld/UnicodeExplorer",
		demo: "https://kotw.dev/UnicodeExplorer"
	},
	{
		title: "svelte-ogl",
		description: "A typed port of OGL (Open graphics library) to svelte using components. ",
		license: "mit",
		repo: "GamepowerX/svelte-ogl",
		demo: "https://oss.kotw.dev/svelte-ogl"
	},
	{
		title: "VoxelGeometry",
		description: "Voxel shape Demos written with plain JS and HTML.",
		license: "mit",
		repo: "KekOnTheWorld/VoxelGeometry",
		demo: "https://kotw.dev/VoxelGeometry"
	},
	{
		title: "kekupload-server",
		description:
			"A backend providing a HTTP REST like interface for uploading files written in rust.",
		license: "mit",
		repo: "GamepowerX/kekupload-server",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-client",
		description: "Frontend made for KekUpload written using SvelteKit.",
		license: "mit",
		repo: "GamepowerX/kekupload-client",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-lib-ts",
		description: "A library for KekUpload written in typescript.",
		license: "mit",
		repo: "GamepowerX/kekupload-lib-ts",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-cli",
		description: "A CLI client made for KekUpload.",
		license: "mit",
		repo: "GamepowerX/KekUploadCLIClient"
	},
	{
		title: "Kock Themes",
		description: "A collection of cool dark themed VSCode themes.",
		license: "mit",
		repo: "GamepowerX/kock-themes",
		demo: "https://marketplace.visualstudio.com/items?itemName=kotwoss.kock-themes"
	},
	{
		title: "Keks Helper",
		description: "A moderation and utility Discord Bot.",
		license: "mit",
		repo: "KekOnTheWorld/keks-helper",
		demo: DISCORD_URL
	},
	{
		title: "Port control",
		description: "Webinterface made for the ESP32 Development board to test circuits.",
		license: "mit",
		repo: "KekOnTheWorld/portcontrol"
	},
	{
		title: "Local account",
		description: "Create accounts using localStorage.",
		license: "mit",
		repo: "KekOnTheWorld/localaccount",
		demo: "https://kotw.dev/localaccount"
	},
	{
		title: "Sample page",
		description: "Sample html page to put on an otherwise empty file server.",
		license: "mit",
		repo: "KekOnTheWorld/sample-page",
		demo: "https://kotw.dev/sample-page"
	},
	{
		title: "MINHttp",
		description: "Minimize bandwith by transcoding the HTML in a more efficient standart.",
		license: "mit",
		repo: "KekOnTheWorld/MINHttp",
		archive: true
	},
	{
		title: "Kekson",
		description: "What happens if you order Gson on wish?",
		license: "gpl-3.0",
		repo: "KekOnTheWorld/Kekson",
		archive: true
	},
	{
		title: "TVideo",
		description: "A videoplayer for your terminal. (Embedded)",
		license: "mit",
		repo: "KekOnTheWorld/TVideo",
		archive: true
	},
	{
		title: "Essentials",
		description: "Opensource essentials plugin made for learning purposes.",
		license: "mit",
		repo: "KekOnTheWorld/Essentials",
		archive: true
	}
] as Project[];
