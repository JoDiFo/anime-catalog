import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_WATCHED } from "../../graphql/user";

import { Content, Loading } from "..";

function WatchedAnime({ userId }: { userId: string }) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_WATCHED,
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

  return <Content items={data.getUserWatched} />;
}

export default WatchedAnime;