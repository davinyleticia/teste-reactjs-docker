export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS':
      return {
        ...state,
        notifications: [],
      };
    case 'FFETCH_NOTIFICATIONS_SUCESS':
      return {
        ...state,
        notifications: action.payload,
        actionDelete: false,
      };

      case 'DELETE_NOTIFICATIONS_SUCCESS':
        const deletedIndex = action.id;
    
        // Cria uma nova array excluindo o elemento no índice deletedIndex
        const updatedPosts = [
            ...state.notifications.posts.slice(1, deletedIndex),
            ...state.notifications.posts.slice(deletedIndex + 1)
        ];
    
        return {
            ...state,
            notifications: {
                ...state.notifications,
                posts: updatedPosts,
            },
            actionDelete: false,
        };

    default:
      throw new Error();
  }
};
