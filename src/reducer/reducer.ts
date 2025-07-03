export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RESET_CHAT = 'RESET_CHAT';

export const chatReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.message],
            };
        case 'RESET_CHAT':
            return {
                messages: [],
            };
        default:
            return state;
    }
}