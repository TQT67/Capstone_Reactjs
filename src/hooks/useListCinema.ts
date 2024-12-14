import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { movieApi } from "../apis/movie.api";
import { QueryKeys } from "../constants/queryKeys";
import { CinemaData } from "../interfaces/cinema.interface";

type ListCinemaQueryOptions = Omit<
	UseQueryOptions<CinemaData[]>,
	"queryKey" | "queryFn"
>;

const useListCinema = (options?: ListCinemaQueryOptions) => {
	const queryResult = useQuery({
		queryKey: [QueryKeys.LIST_CINEMA],
		queryFn: () => movieApi.getListCinema(),
		...options,
	});
	return queryResult;
};

export default useListCinema;
