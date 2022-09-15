import {createEffect} from "effector";
import {fetchFullAnimePage, fetchShortAnimeList} from "../graphql/requests";


export const getAnimeShortListFx = createEffect(async () => {
    const animeList = await fetchShortAnimeList();
    return animeList.data.Page.media;
})


export const getFullAnimeFx = createEffect(async (id: number) => {
    const fullAnime = await fetchFullAnimePage(id);
    return fullAnime;
})


