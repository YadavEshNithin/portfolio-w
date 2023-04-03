interface SanityBody {
    _createdAt : string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type : "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    url:any;
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technolgoy extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    companty: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded:date;
    isCurrentlyWorkingHere: boolean;
    jobtitle: string;
    points: string[];
    technologies: Technolgoy[];
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technolgoy[];
}


export interface Social extends SanityBody {
    _type: "social"
    title: string;
    url: string;
}