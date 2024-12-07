import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QueryKeys } from "../constants/queryKeys";
import { loginData } from "../interfaces/login.interface";
import { loginApi } from "../apis/login.api";

type loginQueryOptions = Omit<
	UseQueryOptions<loginData[]>,
	"queryKey" | "queryFn"
>;

const useLogin = (options?: loginQueryOptions) => {

	const queryResult = useQuery({
		queryKey: [QueryKeys.LOGIN],
		queryFn: () => loginApi.postLogin(),
		...options,
	});
	return queryResult;
};

export default useLogin;
