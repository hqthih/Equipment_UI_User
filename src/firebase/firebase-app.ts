import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { EAuthToken } from "../interfaces/user-interfaces";
import { createDeviceToken } from "../services/user-service";
import { toastInfo } from "../utils/notifications-utils";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

interface IProps {
  cb?: () => void;
}

export function requestPermission(cb?: () => void) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("hehe");
      onMessage(messaging, (payload) => {
        console.log(messaging);
        console.log(payload);
        cb?.();
        toastInfo("You have a new request !!", "Notification");
        // Xử lý thông báo ở đây
      });
      getToken(messaging, {
        vapidKey:
          "BF9F_OZJ6Un2UMnz4fkqBcuk3ASJTnECHPBwnU-P473QwXq7bo5hEBZXxR9HhvYiDKlfLSvw8WcHfX_E6Xr1pdY",
      }).then(async (currentToken: any) => {
        const deviceType = "WEB";
        await createDeviceToken(1, currentToken);
        localStorage.setItem(EAuthToken.DEVICE_TOKEN, currentToken);
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}
