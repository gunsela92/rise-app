import React from "react";
import {NotificationsContainer, NotificationWrapper} from "./style";
import {useSelector} from "react-redux";

const Notification = () => {
  const notifications = useSelector(state => state.Notifications);

  return (
    <NotificationsContainer>
      {notifications?.map(notification => (
        <NotificationWrapper key={notification.id}>
          <span>{notification.message}</span>
        </NotificationWrapper>
      ))}
    </NotificationsContainer>
  );
};

export default Notification;
