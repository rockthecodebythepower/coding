import { toast } from 'react-toastify';

export const successToast = (message: string) =>
  toast.success(message, {
    position: 'bottom-center',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const errorToast = (message: string) =>
  toast.error(message, {
    position: 'bottom-center',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
