import { IConversationState, UpdateConversationMessageAction } from "../types";

export function updateConversationMessageCase(state: IConversationState, action: UpdateConversationMessageAction): IConversationState{
    const message = action.message;
    const conversation = state.list.find(conv => conv._id === message.conversationId);
    if(conversation === undefined){
        return {
            ...state,
            list: [
                ...state.list,
                {
                    _id: message.conversationId,
                    targets: [],
                    unseenMessages: 1,
                    updatedAt: message.createdAt,
                    messages: [message]
                }
            ]
        }
    }else {
        return {
            ...state,
            list: [
                ...state.list.filter(conv => conv._id !== message.conversationId),
              {
                  ...conversation,
                  updatedAt: message.createdAt,
                  messages: [...conversation.messages, message]
              }
            ]
        }
    }
} 