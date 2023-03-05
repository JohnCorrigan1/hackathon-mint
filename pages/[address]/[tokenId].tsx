import { GetServerSideProps, NextPage } from "next";
import Nav from "../../components/Nav";
import PlayerSheetCardOwned from "../../components/Player/PlayerSheetCardOwned";
import PlayerSheetItems from "../../components/Player/PlayerSheetItems";
import { useState, useEffect } from "react";
import { getPlayerStats } from "../../lib/SubgraphQueries";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { Player } from "../../models/Player";
import Head from "next/head";


interface Props {
  tokenId: string | undefined | string[];
  address: string | undefined | string[];
}

const AssignStats = ({ tokenId, address  }: Props) => {
  const [tokenID, setTokenID] = useState<string>(tokenId as string);
  const [contractAddress, setContractAddress] = useState<string>(address as string);
  const [query, setQuery] = useState<string>(getPlayerStats(tokenID, contractAddress) || "");
  const [player, setPlayer] = useState<Player | null>(null);
  console.log("tokenID", tokenId)
  console.log("address", address)
  const router = useRouter();
  const playerId = router.query.tokenId;
  const playerAddress = router.query.address;

  useEffect(() => {
    setTokenID(playerId as string);
    setContractAddress(playerAddress as string);
    setQuery(getPlayerStats(tokenID, contractAddress));
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
    <>
     <Head>
        <title>Block Crawler</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>
    <div className="h-[100vh] w-[100vw] bg-[#2D2424]">
      <Nav />
      <div className="flex justify-center">
        <div className="flex w-1/4 rounded-xl bg-[#D5CEA3] bg-opacity-30">
          {player && (
            <>
              <PlayerSheetCardOwned
                title={"title"}
                items={[]}
                player={player}
                image={"/wizard.png"}
              />
              {/* <PlayerSheetItems player={player} /> */}
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tokenId } = context.query;
  const { address } = context.query;

  return {
    props: {
      tokenId,
      address,
    },
  };
};

export default AssignStats;
