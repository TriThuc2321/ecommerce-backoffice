import { addToast } from '@heroui/toast';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/services/apis';

const useLogout = () =>
  useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      window.location.reload();
    },
    onError: err => {
      addToast({
        title: 'Logout failed',
        description: err.message,
        color: 'danger',
        variant: 'flat',
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    },
  });

export default useLogout;
