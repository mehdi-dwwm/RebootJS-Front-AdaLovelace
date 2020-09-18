export interface IProfile {
    email: string;
    firstname: string;
    lastname: string;
    conversationSeen: {[conversationId: string] : string};
}


export interface IProfileState {
  connectedProfile?: IProfile
}

export const UPDATE_CONNECTED_PROFILE = 'UPDATE_CONNECTED_PROFILE';

export interface updateConnectedProfileAction {
  type: typeof UPDATE_CONNECTED_PROFILE,
  profile: IProfile
}

export type IProfileAction = updateConnectedProfileAction;
