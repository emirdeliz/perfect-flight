import { memo, useMemo } from "react";
import { Flex, Title } from "@atoms";
import { Avatar } from "@templates";
import { PlayerModel } from "@api";
import * as S from './Player.style';
import { formatNumberAsCurrency } from "@helpers";

interface PlayerProps { 
  player: PlayerModel;
  showVote?: boolean;
}

export const Player = memo(({ player, showVote }: PlayerProps) => {
  const { name, balance, keepPlaying } = player;

  const voleLabel = useMemo(() => {
    return keepPlaying ? 'SIM' : 'NÃO';
  }, [keepPlaying]);

  return (
    <S.Player>
      <Avatar src={`/mock/${name}.png`} />
      <Flex.Row justifySpaceBetween alignSpaceBetween wFull>
        <Title ml3 n5>{name}</Title>
        <Title ml3 n5 semibold>{showVote ? voleLabel : formatNumberAsCurrency(balance)}</Title>
      </Flex.Row>
    </S.Player>
  );
});