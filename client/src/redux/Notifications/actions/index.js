export const SEND_NOTIFICATIONS = "SEND_NOTIFICATIONS";
export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

export const sendMessage = (notify) => {
  notify.id = Math.floor(Date.now() / 1000);
  return (dispatch) => {
    dispatch({
      type: SEND_NOTIFICATIONS,
      payload: notify,
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_NOTIFICATIONS,
        payload: notify?.id,
      });
    }, 30000);
  };
};