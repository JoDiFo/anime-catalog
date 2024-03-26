import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_STALLED } from "../../app/graphql/user";

import { Loading } from "@/widgets/Loading";
import { Content } from "..";

function StalledAnime({ userId }: { userId: string }) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_STALLED,
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

  return <Content items={data.getUserStalled} />;
}

export default StalledAnime;
