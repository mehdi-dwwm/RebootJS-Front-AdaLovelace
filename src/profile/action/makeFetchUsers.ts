import { IAppState } from "../../appReducer";
import { getUsers } from '../../api/methods';
import { updateProfileList } from "./updateProfileList";

export function makeFetchUsers() {
    return (dispatch: any, _getState: () => IAppState) => {
        // Fetch dans l'API
        getUsers()
            .then(fetchedUsers => {
                dispatch(updateProfileList(fetchedUsers))
            })
    }
}