/**
 * Everything the page lists lives here. One entry per repository (or per
 * course that spans several repositories). Keep the order you want on the
 * page; nothing sorts these.
 */
import type { IconName } from "../components/icons";

const ORG = "https://github.com/1995parham-teaching";

export interface Link {
	label: string;
	href: string;
	icon?: IconName;
}

export interface Entry {
	title: string;
	description: string;
	/** Primary link. The title points here: the course homepage if it has one, else the repository. */
	href: string;
	links?: Link[];
	/** Repository is archived on GitHub: finished, read-only. */
	archived?: boolean;
}

export interface Section {
	id: string;
	title: string;
	icon: IconName;
	lead: string;
	entries: Entry[];
}

const repo = (name: string, label = "Repository"): Link => ({
	label,
	href: `${ORG}/${name}`,
	icon: "github",
});

export const sections: Section[] = [
	{
		id: "courses",
		title: "Courses",
		icon: "chalkboard-user",
		lead: "Full courses with slides and notes, and where they exist, the assignments and exam questions that went with them.",
		entries: [
			{
				title: "Internet Engineering",
				description:
					"Web programming from back-end to front-end: HTTP, REST, Go, databases, JavaScript, and the systems behind the Internet.",
				href: "https://1995parham-teaching.github.io/ie-lecture/",
				links: [
					repo("ie-lecture"),
					repo("ie-assignments", "Assignments"),
					repo("ie-exam", "Exams"),
				],
			},
			{
				title: "Introduction to Information Security",
				description:
					"A first course in information security: the properties we defend, cryptography, authentication, and secure systems.",
				href: "https://1995parham-teaching.github.io/is-lecture/",
				links: [
					repo("is-lecture"),
					repo("is-assignment", "Assignments"),
					repo("is-exam", "Exams"),
				],
			},
			{
				title: "Introduction to Programming",
				description:
					"First steps in programming, taught in C. Fourteen lectures plus sample code, based on Prof. Bakhshi's course at Amirkabir.",
				href: `${ORG}/c-lecture`,
				links: [
					repo("c-exam", "Exams"),
					{
						label: "Learn C at home (Persian, video)",
						href: "https://www.youtube.com/playlist?list=PL6ZKItCGCs20ma45yj8OuQzStezPTw4zA",
						icon: "youtube",
					},
				],
			},
			{
				title: "Python 101",
				description:
					"An introduction to Python: syntax, data structures, functions, modules, and the tooling around a real project.",
				href: "https://1995parham-teaching.github.io/python101/",
				links: [repo("python101"), repo("python-assignments", "Assignments")],
			},
			{
				title: "Python 201",
				description:
					"Intermediate Python for people who already know the basics: functional programming, iterators, typing, and more.",
				href: "https://1995parham-teaching.github.io/Python201/",
				links: [repo("Python201")],
			},
			{
				title: "Introduction to Go",
				description:
					"A compact Go course, also used as the Go part of Internet Engineering. Slides and runnable examples.",
				href: `${ORG}/go-lecture`,
				links: [
					{
						label: "Slides",
						href: "https://1995parham-teaching.github.io/ie-lecture/lectures/lecture-7/",
						icon: "external",
					},
				],
			},
			{
				title: "LLM 101",
				description:
					"An introduction to large language models by a non-AI developer: tokens, context, attention, prompting, tools, and agents.",
				href: "https://1995parham-teaching.github.io/llm101/",
				links: [repo("llm101")],
			},
			{
				title: "Kubernetes by doing",
				description:
					"Learn how to use Kubernetes: deployments, services, ingress, and kubectl, one hands-on step at a time.",
				href: `${ORG}/k1s`,
			},
			{
				title: "Infrastructure as Code",
				description:
					"An introduction to infrastructure as code with Terraform and friends.",
				href: `${ORG}/IaC`,
			},
			{
				title: "Computer Networks",
				description:
					"Course materials for computer networking, with socket programming hands-on sessions in Python.",
				href: `${ORG}/computer-networks`,
				links: [
					repo("socket.py", "Socket programming"),
					repo("cn-exam", "Exams"),
				],
				archived: true,
			},
		],
	},
	{
		id: "projects",
		title: "Hands-on projects",
		icon: "code",
		lead: "Code written live in class or handed out as a reference: small, complete programs that show one idea end to end.",
		entries: [
			{
				title: "fandogh",
				description:
					"Backend implementation demonstration in Go with JWT, MongoDB, and the usual service plumbing.",
				href: `${ORG}/fandogh`,
			},
			{
				title: "tinyurl",
				description:
					"A URL shortener in Go that demonstrates the key concepts of the language and of a small web service.",
				href: `${ORG}/tinyurl`,
			},
			{
				title: "students",
				description:
					"The RESTful server written during the Go course in live-coding sessions, one repository per term.",
				href: `${ORG}/students-fall-2023`,
				links: [
					repo("students-fall-2023", "Fall 2023"),
					repo("students-fall-2022", "Fall 2022"),
					repo("students-summer-2022", "Summer 2022"),
					repo("students-spring-2022", "Spring 2022"),
					repo("students-fall-2021", "Fall 2021"),
					repo("students-fall-2020", "Fall 2020"),
				],
			},
			{
				title: "gorm-sample",
				description: "Object-relational mapping in Go with GORM.",
				href: `${ORG}/gorm-sample`,
			},
			{
				title: "song_cloud",
				description:
					"A minimal SoundCloud, just for having fun with SQL databases from Go.",
				href: `${ORG}/song_cloud`,
			},
			{
				title: "record-appender",
				description: "Read a log file and append its records to PostgreSQL.",
				href: `${ORG}/record-appender`,
			},
			{
				title: "say-hello",
				description: "React, Fiber, and an API, just for saying hello.",
				href: `${ORG}/say-hello`,
			},
			{
				title: "fruits-api",
				description:
					"A simple, containerized Fruits API with FastAPI and SQLite.",
				href: `${ORG}/fruits-api`,
			},
			{
				title: "P2P",
				description:
					"A peer-to-peer network for file distribution over TCP and UDP.",
				href: `${ORG}/P2P`,
			},
			{
				title: "dallal",
				description: "How to write a message broker in Python over TCP.",
				href: `${ORG}/dallal`,
				archived: true,
			},
			{
				title: "git-exercise",
				description:
					"The Git warm-up exercise used as the first Internet Engineering homework.",
				href: `${ORG}/git-exercise`,
			},
			{
				title: "argofun",
				description: "A review of some practices in using Argo CD.",
				href: `${ORG}/argofun`,
			},
		],
	},
	{
		id: "workshops",
		title: "Workshops and talks",
		icon: "flask",
		lead: "Shorter sessions: a few hours on one topic.",
		entries: [
			{
				title: "Java in 4 hours",
				description: "A review of Java in a four-hour workshop.",
				href: `${ORG}/JavaIn4`,
				archived: true,
			},
			{
				title: "C linked-list workshop",
				description: "A C programming workshop on linked lists and structures.",
				href: `${ORG}/c-linked-list-workshop`,
				archived: true,
			},
			{
				title: "Go review with Snapp! Cloud",
				description: "A review of Go with the Snapp! cloud team, fall 2022.",
				href: `${ORG}/cloud-fall-2022`,
			},
			{
				title: "Internet of Things and IPv6",
				description:
					"A presentation on IoT over IPv6 for the AUT Linux Festival.",
				href: "http://aut-linux-festival.github.io/IoTiP6/",
				links: [repo("IoTIPv6")],
				archived: true,
			},
			{
				title: "interviews",
				description:
					"Interview stories told in code, to remember the awesome moments.",
				href: `${ORG}/interviews`,
			},
		],
	},
	{
		id: "tooling",
		title: "Course tooling",
		icon: "toolbox",
		lead: "Shared pieces behind the courses.",
		entries: [
			{
				title: "latex-templates",
				description:
					"The shared LaTeX look for course documents: assignments, exams, and projects.",
				href: `${ORG}/latex-templates`,
			},
			{
				title: "harpocrates",
				description:
					"Send students their grades privately from a CSV file, in Python.",
				href: `${ORG}/harpocrates`,
				archived: true,
			},
		],
	},
];
