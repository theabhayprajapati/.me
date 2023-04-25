import type { ComponentType } from 'svelte';


import AiMageLogo from '$lib/components/svg/icons/aimagelight.svg';
import CSSIcon from '$lib/components/svg/icons/css.svg?component';
import FigmaIcon from '$lib/components/svg/icons/figma.svg?component';
import GitIcon from '$lib/components/svg/icons/git.svg?component';
import GitHubIcon from '$lib/components/svg/icons/github.svg?component';
import GraphQLIcon from '$lib/components/svg/icons/graphql.svg?component';
import HTMLIcon from '$lib/components/svg/icons/html.svg?component';
import JavaScriptIcon from '$lib/components/svg/icons/javascript.svg?component';
import JestIcon from '$lib/components/svg/icons/jest.svg?component';
import LinkedInIcon from '$lib/components/svg/icons/linkedin.svg?component';
import LinuxIcon from '$lib/components/svg/icons/linux.svg?component';
import NextJSIcon from '$lib/components/svg/icons/nextjs.svg?component';
import NodeJSIcon from '$lib/components/svg/icons/nodejs.svg?component';
import ReactIcon from '$lib/components/svg/icons/react.svg?component';
import SaladLogo from '$lib/components/svg/icons/saladlogo.svg';
import SvelteIcon from '$lib/components/svg/icons/svelte.svg?component';
import TailwindCSSIcon from '$lib/components/svg/icons/tailwindcss.svg?component';
import TwitterIcon from '$lib/components/svg/icons/twitter.svg?component';
import TypeScriptIcon from '$lib/components/svg/icons/typescript.svg?component';
import VSCIcon from '$lib/components/svg/icons/vsc.svg?component';
import CloneOfTwitter from '$lib/images/cloneoftwitter.png';
import OAS from '$lib/images/oas.png';
import UTSClone from "$lib/images/utsclone.png";
export const SITE_URL = 'https://abhayprajapati.me';
export const EMAIL = 'theabhayprajapati@gmail.com';
export const PREVIEW_TRACK_COUNT = 3;


export const workExperiences = [
	{
		companyName: 'Salad Health | Wellness for Women',
		companyLogo: SaladLogo,
		companyColor: '#FFE115',
		companySite: 'https://saladnewlp.vercel.app/',
		employmentType: 'Intership',
		title: 'Frontend Developer',
		startDate: '2023-01-01',
		endDate: '2023-03-31'
	},
	{
		companyName: 'AiMage.in',
		companyLogo: AiMageLogo,
		companyColor: '#3992EE',
		companySite: 'https://aimage.in',
		employmentType: 'Internship',
		title: 'Software Developer',
		startDate: '2022-04-01',
		endDate: '2023-01-01'
	}
];
export const personalProjects = [
	{
		title: "Better UTS App",
		image: UTSClone,
		url: 'https://github.com/theabhayprajapati/Better-UTS',
		description: 'Tried to redeisgn the current URT App'
	},
	{
		title: "Open Apple Store API",
		image: OAS,
		url: 'https://oas.vercel.app/',
		description: 'Open Apple Store has data of almost all Apple Stores Products.'
	},
	{
		title: "Twitter Clone",
		image: CloneOfTwitter,
		url: 'https://cloneoftwitter.vercel.app',
		description: 'A simple twitter Clone build on next.js and tailwindcss'
	}
]

export type StackItem = { name: string; icon?: ComponentType; color?: string; url?: string };

export const techStack: Record<string, StackItem[]> = {
	Development: [
		{
			name: 'Git, GitLab, GitHub',
			icon: GitIcon,
			color: '#F05032',
			url: 'https://git-scm.com/'
		},
		{
			name: 'Linux (bash)',
			icon: LinuxIcon,
			color: '#FCC624',
			url: 'https://www.linux.org/'
		},
		{
			name: 'JavaScript',
			icon: JavaScriptIcon,
			color: '#F7DF1E',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'TypeScript',
			icon: TypeScriptIcon,
			color: '#3178C6',
			url: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Jest',
			icon: JestIcon,
			color: '#C21325',
			url: 'https://jestjs.io/'
		}
	],
	Frontend: [
		{
			name: 'React',
			icon: ReactIcon,
			color: '#61DAFB',
			url: 'https://react.dev/'
		},
		{
			name: 'Next.js',
			icon: NextJSIcon,
			color: '#000000',
			url: 'https://nextjs.org/'
		},
		{
			name: 'Svelte, SvelteKit',
			icon: SvelteIcon,
			color: '#FF3E00',
			url: 'https://svelte.dev/'
		},
		{
			name: 'HTML',
			icon: HTMLIcon,
			color: '#E34F26',
			url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			name: 'CSS',
			icon: CSSIcon,
			color: '#1572B6',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: 'Tailwind CSS',
			icon: TailwindCSSIcon,
			color: '#38B2AC',
			url: 'https://tailwindcss.com/'
		}
	],
	Backend: [
		{
			name: 'Node.js',
			icon: NodeJSIcon,
			color: '#339933',
			url: 'https://nodejs.org/'
		},
		{
			name: 'GraphQL',
			icon: GraphQLIcon,
			color: '#E10098',
			url: 'https://graphql.org/'
		},
	],
	Tools: [
		{
			name: 'Figma',
			icon: FigmaIcon,
			color: '#F24E1E',
			url: 'https://www.figma.com/'
		},
		{
			name: 'Visual Studio Code',
			icon: VSCIcon,
			color: '#007ACC',
			url: 'https://code.visualstudio.com/'
		},
	]
};

export const socialMedias = [
	{
		title: 'GitHub',
		color: '#4078c0',
		icon: GitHubIcon,
		link: 'https://github.com/theabhayprajapati'
	},
	{
		title: 'LinkedIn',
		color: '#0077B5',
		icon: LinkedInIcon,
		link: 'https://www.linkedin.com/in/theabhayprajapati/'
	},
	{
		title: 'Twitter',
		color: '#1D9BF0',
		icon: TwitterIcon,
		link: 'https://twitter.com/abhayprajapati_'
	}
];
