import { GetServerSideProps, NextPage } from "next";
import Nav from "../components/Nav";
import PlayerSheetCardOwned from "../components/Player/PlayerSheetCardOwned";
import PlayerSheetItems from "../components/Player/PlayerSheetItems";
import { useState, useEffect } from "react";
import { getPlayerStats } from "../lib/SubgraphQueries";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { Player } from "../models/Player";

interface Props {
  tokenId: string | undefined | string[];
}

const AssignStats = ({ tokenId }: Props) => {
  const [tokenID, setTokenID] = useState<string>(tokenId as string);
  const [query, setQuery] = useState<string>(getPlayerStats(tokenID) || "");
  const [player, setPlayer] = useState<Player | null>(null);

  const router = useRouter();
  const playerId = router.query.tokenId;

  useEffect(() => {
    setTokenID(playerId as string);
    setQuery(getPlayerStats(tokenID));
  }, [playerId, tokenID]);

  const [result, reexecuteQuery] = useQuery({
    query,
  });

  useEffect(() => {
    const { data, fetching, error } = result;
    console.log(result);
    setPlayer(result.data?.players[0]);
  }, [result, player]);

  useEffect(() => {
    reexecuteQuery();
  }, [tokenID]);

  return (
    <div className="h-[100vh] w-[100vw] bg-[#2D2424]">
      <Nav />
      <div className="flex justify-center">
        <div className="flex w-1/2 rounded-xl bg-[#D5CEA3] bg-opacity-30">
          {player && (
            <>
              <PlayerSheetCardOwned
                title={"title"}
                items={[]}
                player={player}
                image={"/wizard.png"}
              />
              <PlayerSheetItems player={player} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tokenId } = context.query;

  return {
    props: {
      tokenId,
    },
  };
};

export default AssignStats;
