// Inline SVG icons, read straight from the Font Awesome package at build time.
// Nothing from Font Awesome ships to the browser except the paths used here.
import github from "@fortawesome/fontawesome-free/svgs/brands/github.svg?raw";
import youtube from "@fortawesome/fontawesome-free/svgs/brands/youtube.svg?raw";
import external from "@fortawesome/fontawesome-free/svgs/solid/arrow-up-right-from-square.svg?raw";
import book from "@fortawesome/fontawesome-free/svgs/solid/book.svg?raw";
import boxArchive from "@fortawesome/fontawesome-free/svgs/solid/box-archive.svg?raw";
import chalkboardUser from "@fortawesome/fontawesome-free/svgs/solid/chalkboard-user.svg?raw";
import code from "@fortawesome/fontawesome-free/svgs/solid/code.svg?raw";
import filePen from "@fortawesome/fontawesome-free/svgs/solid/file-pen.svg?raw";
import flask from "@fortawesome/fontawesome-free/svgs/solid/flask.svg?raw";
import graduationCap from "@fortawesome/fontawesome-free/svgs/solid/graduation-cap.svg?raw";
import house from "@fortawesome/fontawesome-free/svgs/solid/house.svg?raw";
import moon from "@fortawesome/fontawesome-free/svgs/solid/moon.svg?raw";
import sun from "@fortawesome/fontawesome-free/svgs/solid/sun.svg?raw";
import toolbox from "@fortawesome/fontawesome-free/svgs/solid/toolbox.svg?raw";

export const icons = {
	book,
	"box-archive": boxArchive,
	"chalkboard-user": chalkboardUser,
	code,
	external,
	"file-pen": filePen,
	flask,
	github,
	"graduation-cap": graduationCap,
	house,
	moon,
	sun,
	toolbox,
	youtube,
} as const;

export type IconName = keyof typeof icons;
