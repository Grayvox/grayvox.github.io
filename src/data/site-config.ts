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
    subtitle: 'A wolf destined for greatness... hopefully.',
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
        }
    ],
    footerNavLinks: [
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
        text: "Oh, and it's Gray for short. I yell at computers for a living - whatever that living actually is. FOSS forever, ClosedAI never. I build apps, websites, and online resources to make your life a bit cooler. Though you won't find open repos for them, I also make games over on [Itch](https://grayvox.itch.io), which are built with whatever I find interesting at the time (but usually [Godot](https://www.godotengine.org))."
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
