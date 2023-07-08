import { memo } from 'react';
import * as S from './Players.style';
import { Player } from '../Player/Player';
import { PlayerModel } from '@api';

interface PlayersProps {
  players: Array<PlayerModel>;
  showVote?: boolean;
}

export const Players = memo(({ players, showVote }: PlayersProps) => {
  return (
    <S.Players>
      {players.map((p, index) => (
        <Player key={index} player={p} showVote={showVote} />
      ))}
    </S.Players>
  );
});
