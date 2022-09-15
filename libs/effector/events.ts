import {createEvent} from "effector";
import {AnimeModel} from "../models/anime";



export const addAnime = createEvent<AnimeModel>();
export const updateAnimeArray = createEvent<Array<AnimeModel>>();
export const removeAnime = createEvent<AnimeModel>();
