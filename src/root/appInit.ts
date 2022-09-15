import {routes} from "../../libs/utils";


const AppInit = () => {
    const navigationListSelector = document.querySelector(".navigation__list")
    routes.forEach((route) => {
        const listItem = document.createElement("li");
        listItem.textContent = route.path;
        navigationListSelector!.appendChild(listItem)
    })

}


export default AppInit;
