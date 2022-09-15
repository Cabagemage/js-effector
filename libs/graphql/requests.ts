import { getAnimeById, getAnimeShortInfoQuery } from './queries';
import {ANI_LIST_URL} from "./utils";

const getVariables = (page: number, perPage: number) => {
    return {
        page: page,
        perPage: perPage,
    };
};

const getOptions = (query: string) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: getVariables(1, 20),
        }),
    };
    return options;
};


async function handleResponse(response: Response) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}

function handleError(error: unknown) {
    console.error(error);
}
export async function fetchShortAnimeList() {
    try {
        const response = await fetch(ANI_LIST_URL, getOptions(getAnimeShortInfoQuery));
        const anime = await handleResponse(response);
        return anime;
    } catch (e) {
        handleError(e);
    }
}

export async function fetchFullAnimePage(id: number) {
    try {
        const response = await fetch(ANI_LIST_URL, getOptions(getAnimeById(id)));
        const anime = await handleResponse(response);

        return anime;
    } catch (e) {
        console.log(e);
    }
}
