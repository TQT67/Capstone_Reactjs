import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QueryKeys } from "../constants/queryKeys";
import { loginApi } from "../apis/login.api";
import { LoginData } from "../interfaces/login.interface";

type loginQueryOptions = Omit<
	UseQueryOptions<LoginData[]>,
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
