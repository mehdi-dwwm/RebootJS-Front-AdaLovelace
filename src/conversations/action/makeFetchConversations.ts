import { IAppState } from "../../appReducer";
import { getConversations } from '../../api/methods';
import { updateConversationsList } from './updateConversationsList';


export function makeFetchConversations() {
    return (dispatch: any, getState: () => IAppState) => {

        const connectedProfile = getState().profile.connectedProfile;
        // Fetch dans l'API
        if(connectedProfile){
            getConversations(connectedProfile)
            .then(conversations => {
                dispatch(updateConversationsList(conversations))
            })
        }
    }
}