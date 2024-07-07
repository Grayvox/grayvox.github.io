export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Grayvox',
    subtitle: '',
    description: "Welcome to my little corner on the internet.",
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    socialLinks: [
        {
            text: 'github',
            href: 'https://github.com/Grayvox'
        }
    ],
    hero: {
        title: 'Welcome to my little corner on the internet.',
        text: "I go by Grayvox - or Gray for short. I yell at computers for a living - whatever that living actually is. \n\nFOSS forever, ClosedAI never. \n\nI write stories and build stuff with code, often at the same time. \n\nPretty much everything I do is open source on [GitHub](https://www.github.com/Grayvox) - apps, websites, resources, gists... and stuff to make your life a little easier. \n\nThough you won't find open repos for them, I also make games to tell my stories. Stay tuned for more on that one."
    },
    subscribe: {
        title: 'Subscribe :)',
        text: "Whenever I post, you will know... whenever that is. Don't worry, it won't get shared outside this website, I hate that stuff as much as you do.",
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
