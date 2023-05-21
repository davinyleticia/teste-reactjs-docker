import { toast } from 'react-toastify';

const useNotifySuccess = () => {
  const notify = (string, config) => {
    toast.success(string, config);
  };

  return notify;
};

export default useNotifySuccess;
