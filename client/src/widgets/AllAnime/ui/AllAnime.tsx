import { useEffect } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";

import { Loading } from "@/widgets/Loading";
import { ContentContainer } from "@/widgets/ContentContainer";

import { GET_ALL_USER_ANIME } from "@/app/graphql/user";

interface AllAnimeProps {
  userId: string;
}

export function AllAnime({ userId }: AllAnimeProps) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_ALL_USER_ANIME,
    {
      variables: {
        userId,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (called) {
      refetch();
    }
  }, [called, refetch]);

  if (loading || networkStatus === NetworkStatus.refetch) return <Loading />;

  return <ContentContainer items={data.getAllUserAnime} />;
}
