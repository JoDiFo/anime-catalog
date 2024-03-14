import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_ALL } from "../../graphql/user";

import { Content, Loading } from "..";

function AllAnime({ userId }: { userId: string }) {
  const { data, loading, called, refetch, networkStatus } = useQuery(GET_ALL, {
    variables: {
      userId,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (called) {
      refetch();
    }
  }, [called, refetch]);

  if (loading || networkStatus === NetworkStatus.refetch) return <Loading />;

  return <Content items={data.getUserAnime} />;
}

export default AllAnime;
