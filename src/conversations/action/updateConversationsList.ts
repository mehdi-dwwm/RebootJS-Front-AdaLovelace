import { IConversation, UpdateConversationListAction, UPDATE_CONVERSATION_LIST} from "../types";

export function updateConversationsList(conversations: IConversation[]): UpdateConversationListAction {
    return {
        type: UPDATE_CONVERSATION_LIST,
        conversations: conversations 
    }
}