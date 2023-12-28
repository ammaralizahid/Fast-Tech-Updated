import { toast, ToastOptions } from 'react-toastify';

export const Toast = (message: string, type: string, options?: ToastOptions): void => {
  let toastType: any = toast.info;

  switch (type) {
    case 'success':
      toastType = toast.success;
      break;
    case 'error':
      toastType = toast.error;
      break;
    default:
      toastType = toast.info;
      break;
  }

  toastType(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    ...options,
  });
};
export default Toast;
