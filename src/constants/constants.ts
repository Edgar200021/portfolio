import { z } from "zod";
import discord from "../assets/icons/discord.svg";
import email from "../assets/icons/email.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import telegram from "../assets/icons/telegram.svg";
import adminPanel from "../assets/img/projects/admin-panel.png";
import coffeehouse from "../assets/img/projects/coffeehouse.jpg";
import dm from "../assets/img/projects/dm.jpg";
import drivereasy from "../assets/img/projects/drivereasy.jpg";
import godofwar from "../assets/img/projects/godofwar.jpg";
import { SkillsTheme } from "../components/ui/Skills/Skills";
import { Languages } from "../types/langSwitcher";
import type { IProject } from "../types/projects";
import type { SkillsTitle } from "../types/skills";
import type { ISocials } from "../types/socials";

export const LANGUAGES: Languages[] = [Languages.RU, Languages.EN];
export const SOCIALS: ISocials[] = [
	{ Icon: github, href: "https://github.com/Edgar200021" },
	{
		Icon: linkedin,
		href: "https://www.linkedin.com/in/edgar-asatryan-0235a2281/",
	},
	{ Icon: telegram, href: "https://t.me/Edgarasatryan2000" },
	{ Icon: email, href: "mailto:easatryan2000@gmail.com" },
	{ Icon: discord, href: "https://discordapp.com/users/423166093129941013" },
];

export const PROJECTS: IProject[] = [
	{
		image: adminPanel,
		title: "Admin Panel",
		tools: ["ReactJs", "TypeScript", "RTK Query", "TailwindCss"],
		url: "https://adminpanellll.netlify.app/",
		description:
			"A feature-rich admin panel that not only serves its purpose effectively but also showcases my expertise in integrating modern technologies for optimal web development.",
	},
	{
		image: drivereasy,
		title: "Driver Easy",
		tools: ["HTML", "SASS", "JavaScript"],
		url: "https://astounding-bubblegum-04e109.netlify.app/",
		description:
			"Developed an efficient and user-friendly application, Driver Easy, designed to simplify the driver management process.",
	},
	{
		image: godofwar,
		title: "God Of War",
		tools: ["HTML", "SASS", "JavaScript"],
		url: "https://godofwarrr.netlify.app/",
		description:
			"Embark on an epic journey with the God of War presentation, a homage to the iconic gaming saga.",
	},
	{
		image: coffeehouse,
		title: "Coffee House",
		tools: ["HTML", "SASS", "JavaScript"],
		url: "https://coffee-houseee.netlify.app/",
		description:
			"The site invites visitors into the cozy ambiance of the coffee experience, providing an intuitive interface to explore the menu, events, and ambiance",
	},
];

export const SKILLS: Record<
	SkillsTitle,
	{ skills: string[]; theme: SkillsTheme }
> = {
	tools: {
		skills: ["VSCode", "Git", "Figma", "DevTools"],
		theme: SkillsTheme.STANDARD,
	},
	databases: {
		skills: ["PostgreSQL", "MongoDB"],
		theme: SkillsTheme.SMALL,
	},
	languages: {
		skills: ["TypeScript", "JavaScript", "Go"],
		theme: SkillsTheme.SMALL,
	},
	libraries: {
		skills: ["React"],
		theme: SkillsTheme.STANDARD,
	},
	other: {
		skills: [
			"HTML",
			"CSS",
			"SASS/SCSS",
			"Tailwind CSS",
			"Redux",
			"Redux Toolkit",
			"Redux Thunk",
			"RTK Query",
			"Storybook",
			"React Hook Form",
			"Framer Motion",
			"NodeJs",
			"Express",
			"Fastify",
			"NestJs",
			"Kysely",
			"PrismaOrm",
			"RabbitMq",
			"Nginx",
			"Linux",
			"Docker/Docker-Compose",
		],
		theme: SkillsTheme.SMALL,
	},
};

export const SELF_SKILLS: string[] = [
	"problem-solving",
	"time management",
	"dependability",
	"self-motivation",
	"critical thinking",
];

export const formSchema = z.object({
	name: z.string().min(3, "Name must contain at least 3 character(s)"),
	email: z.string().email("Invalid email"),
	title: z.string().min(5, "Title must contain at least 5 character(s)"),
	message: z
		.string()
		.min(10, "Message must contain at least 10 character(s)")
		.max(200),
});
