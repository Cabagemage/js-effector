import './style.css'
import {getAnimeShortListFx} from "../libs/effector/effects";
import {$animeTitles} from "../libs/effector/store";
import {AnimeModel} from "../libs/models/anime";
import AppInit from "./root/appInit";

    AppInit();

    document.addEventListener("DOMContentLoaded ", () => {
        $animeTitles.on(getAnimeShortListFx.doneData, (_, anime:Array<AnimeModel>) => _.concat(anime))
    })



