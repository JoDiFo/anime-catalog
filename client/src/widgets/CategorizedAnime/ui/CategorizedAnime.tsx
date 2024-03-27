import { useEffect } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";

import { Loading } from "@/widgets/Loading";
import { ContentContainer } from "@/widgets/ContentContainer";

import { GET_USER_ANIME } from "@/app/graphql/user";

interface CategorizedAnimeProps {
  userId: string;
  category: string;
}

export function CategorizedAnime({ userId, category }: CategorizedAnimeProps) {
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

  return <ContentContainer items={data.getUserAnime} />;
}
