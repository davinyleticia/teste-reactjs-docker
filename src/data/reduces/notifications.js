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
      const deletedId = action.id;

      const deletedIndex = state.notifications.findIndex(
        notification => notification.id === deletedId,
      );

      if (deletedIndex !== -1) {
        const updatedPosts = [
          ...state.notifications.slice(0, deletedIndex),
          ...state.notifications.slice(deletedIndex + 1),
        ];

        return {
          ...state,
          notifications: updatedPosts,
        };
      } else {
        return state;
      }

    case 'MARK_ALL_AS_READ_SUCESS':
      const updatedActionArray = action.array.map(notification => ({
        ...notification,
        isRead: true,
      }));
      const combinedArray = [...state.notifications, ...updatedActionArray];

      const updatedNotificationsObject = combinedArray.reduce(
        (acc, notification) => {
          acc[notification.id] = notification;
          return acc;
        },
        {},
      );

      const updatedNotifications = Object.values(updatedNotificationsObject);

      return {
        ...state,
        notifications: updatedNotifications,
      };

    default:
      throw new Error();
  }
};
