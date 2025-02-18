export type ProjectType = {
    user_id: string,
    name: string,
    project_type: string,
    description: string,
    imageUrls: string[],
}

export type userData = {
    name?: string;
    project_type?: string;
    description?: string;
    imageUrls?: string[];
};
