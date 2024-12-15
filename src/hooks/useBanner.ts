import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { QueryKeys } from "../constants/queryKeys";
import { Content } from "../interfaces/banner.interface";
import useQueryStatus from "./useQueryStatus";
import { bannerApi } from "../apis/banner";

type ListBannerQueryOptions = Omit<UseQueryOptions<Content[], Error>, "queryKey" | "queryFn">;

const useListBanner = (options?: ListBannerQueryOptions) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.LIST_BANNER],
    queryFn: bannerApi.getBanner,
    ...options,
  });

  const status = useQueryStatus({ queryResult });

  return { ...queryResult, ...status };
};

export default useListBanner;
