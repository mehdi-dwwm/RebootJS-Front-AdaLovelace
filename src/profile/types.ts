export interface IProfile {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  conversationSeen: {[conversationId: string] : string};
}


export interface IProfileState {
  connectedProfile?: IProfile
  list: IProfile[]
}

// --- Défintion des types de l'actions ---
export const UPDATE_CONNECTED_PROFILE = 'UPDATE_CONNECTED_PROFILE';
export const UPDATE_PROFILE_LIST = 'UPDATE_PORIFLE_LIST';

// Défintion des actions
export interface updateConnectedProfileAction {
  type: typeof UPDATE_CONNECTED_PROFILE,
  profile: IProfile
}

export interface UpdateProfileListAction {
  type: typeof UPDATE_PROFILE_LIST,
  profiles: IProfile[]
}

export type IProfileAction = updateConnectedProfileAction | UpdateProfileListAction;
