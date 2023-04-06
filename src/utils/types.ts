export interface ProjectProp {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
        img?: string
    }[];
    image: string;
    source_code_link: string;
    live_links: Array<{
        platform: string;
        link: string;
    }>;
}