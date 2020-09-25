import { UpdateConversationMessageAction, IConversationMessage, UPDATE_CONVERSATION_WITH_NEW_MESSAGE} from "../types";

export function UpdateConversationMessage(message: IConversationMessage): UpdateConversationMessageAction {
    return {
        type: UPDATE_CONVERSATION_WITH_NEW_MESSAGE,
        message: message 
    }
}