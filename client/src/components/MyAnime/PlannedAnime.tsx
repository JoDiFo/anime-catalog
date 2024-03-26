import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_PLANNED } from "../../app/graphql/user";

import { Loading } from "@/widgets/Loading";
import { Content } from "..";

function PlannedAnime({ userId }: { userId: string }) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_PLANNED,
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

  return <Content items={data.getUserPlanning} />;
}

export default PlannedAnime;
