import { get } from '../services/adapters/xhr';

export const fetchNotifications = async dispatch => {
  dispatch({
    type: 'FETCH_NOTIFICATIONS',
  });
  try {
    const results = await get(
      'https://dummyjson.com/posts',
    );
    dispatch({
      type: 'FFETCH_NOTIFICATIONS_SUCESS',
      payload: results.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNofitication = async (id, dispatch) => {

  try {
    dispatch({
      type: 'DELETE_NOTIFICATIONS_SUCCESS',
      id: id,
    });
  } catch (error) {
    console.log("ddd");
  }
};
