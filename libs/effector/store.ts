import {createStore} from 'effector'
import {AnimeModel} from "../models/anime";
import {updateAnimeArray} from "./events";


export const $animeTitles = createStore<Array<AnimeModel>>([]);

$animeTitles.on(updateAnimeArray, (prev, value) => {prev.concat(value)})
