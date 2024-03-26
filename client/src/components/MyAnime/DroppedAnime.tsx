import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_DROPPED } from "../../app/graphql/user";

import { Loading } from "@/widgets/Loading";
import { Content } from "..";

function DroppedAnime({ userId }: { userId: string }) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_DROPPED,
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

  return <Content items={data.getUserDropped} />;
}

export default DroppedAnime;
