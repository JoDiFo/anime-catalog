import { useEffect } from "react";

import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_USER_ANIME } from "@/app/graphql/user";

import { Loading } from "@/widgets/Loading";
import { Content } from "..";

function CategorizedAnime({
  userId,
  category,
}: {
  userId: string;
  category: string;
}) {
  const { data, loading, called, refetch, networkStatus } = useQuery(
    GET_USER_ANIME,
    {
      variables: {
        userId,
        category,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (called) {
      refetch();
    }
  }, [called, refetch, category]);

  if (loading || networkStatus === NetworkStatus.refetch) return <Loading />;

  return <Content items={data.getUserAnime} />;
}

export default CategorizedAnime;
