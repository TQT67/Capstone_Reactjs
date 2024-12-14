import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Content } from "../interfaces/ticketRoom.interface";
import { QueryKeys } from '../constants/queryKeys';
import { ticketRoomApi } from '../apis/ticketRoom';
import { useParams } from 'react-router-dom';
import useQueryStatus from './useQueryStatus';

type ListTicketQueryOptions = Omit<UseQueryOptions<Content>, 'queryKey' | 'queryFn'>;

const useTicketRoom = (options?: ListTicketQueryOptions) => {
    const { id } = useParams<{ id: string }>();
    const queryResult = useQuery({
      queryKey: [QueryKeys.TICKET_ROOM,id],
      queryFn: () => ticketRoomApi.getTicket(id!),
      enabled: !!id,
      ...options,
    });

    const status = useQueryStatus({ queryResult });

    return { ...queryResult, ...status };
  };
  
  export default useTicketRoom;