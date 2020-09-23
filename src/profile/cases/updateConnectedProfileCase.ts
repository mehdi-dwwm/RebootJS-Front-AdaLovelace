import { IProfileState, updateConnectedProfileAction } from "../types";

export function updateConnectedProfileCase(state: IProfileState, action: updateConnectedProfileAction): IProfileState{
    return {
        ...state,
        connectedProfile: action.profile
    }
}