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
      };

    case 'DELETE_NOTIFICATIONS_SUCCESS':
      const deletedIndex = action.id;

      // Cria uma nova array excluindo o elemento no índice deletedIndex
      const updatedPosts = [
        ...state.notifications.slice(1, deletedIndex),
        ...state.notifications.slice(deletedIndex + 1),
      ];

      return {
        ...state,
        notifications: updatedPosts,
      };

    default:
      throw new Error();
  }
};
