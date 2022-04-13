import styled from "styled-components";

export const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
`;

export const NotificationWrapper = styled.div`
  position: relative;
  right: -1000px;
  animation: enter-leave 3s ease-in-out;
  max-width: 300px;
  min-width: 200px;
  height: auto;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.notificationSuccess};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  @keyframes enter-leave {
    0% {
      right: -1000px;
    }
    7.5% {
      right: 16px;
    }
    50% {
      right: 16px;
    }
    92.5% {
      right: -500px;
    }
    100% {
      right: -1000px;
    }
  }
`;