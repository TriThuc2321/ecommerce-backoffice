import { useQuery } from '@tanstack/react-query';

import { REACT_QUERY_KEYS } from '@/constants/reactQuery';
import { userApi } from '@/services/api';

const useGetProfile = () =>
  useQuery({
    queryKey: [REACT_QUERY_KEYS.USER.PROFILE],
    queryFn: userApi.getProfile,
  });

export default useGetProfile;
