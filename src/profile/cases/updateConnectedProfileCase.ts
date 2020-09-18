import { IProfileState, IProfileAction } from "../types";

export function updateConnectedProfileCase(state: IProfileState, action: IProfileAction){
    return {
        ...state,
        connectedProfile: action.profile
    }
}