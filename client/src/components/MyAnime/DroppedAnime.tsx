import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_DROPPED } from "../../graphql/user";

import { Content, Loading } from "..";

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
