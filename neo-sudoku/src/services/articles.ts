import { SetStateAction } from "react";

const articlesURL = 'http://localhost:8000/api/article';

const getAll : (page: number) => Promise<any> = async (page) => {
    return fetch(`${articlesURL}?page=${page}`).then((e : any) => e.json());
}

const getOne : (id: string) => Promise<unknown> = (id) => {
    return fetch(`${articlesURL}/${id}`);
}

const articlesApi = { getAll, getOne };

export default articlesApi;