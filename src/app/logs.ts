export class Logs {

    id: number;
    description: string;
    location: string;
    skills: string;
    li: string;
    gh: string;
    portfolio: string;
    img: boolean;
    message: string;

    constructor(id: number, description: string, location: string, skills: string, li: string, gh: string, portfolio: string, img: boolean, message: string) {
        this.id = id;
        this.description = description;
        this.location = location;
        this.skills = skills;
    }
}