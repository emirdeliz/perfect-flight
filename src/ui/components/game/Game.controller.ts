import { PlayerModel } from "@api";
import { getRandomInt } from "@helpers";

export const CHANCES_TO_BEING_ELIMINATED = 42;
export const CHANCES_TO_CONTINUE = 30;
export const INITIAL_BALANCE = 42_0_0_0_0;
export const PERCENTAGE_VOTES_FINISH_GAME = 50;

export const play = (players: Array<PlayerModel>) => { 
  const playersResult = [] as Array<PlayerModel>;
  const playersEliminatedResult = [] as Array<PlayerModel>;

  for (const player of players) { 
    const isPlayerLucky = playLuck();
    if (isPlayerLucky) {
      playersResult.push(player);
    } else { 
      player.balance = 0;
      playersEliminatedResult.push(player);
    }
  }

  for (const player of playersResult) {
    player.balance = player.balance + (playersEliminatedResult.length * INITIAL_BALANCE) / playersResult.length;
  }

  return {
    remaining: playersResult,
    eliminated: playersEliminatedResult,
    finishGame: false
  }
}

export const playLuck = () => {
  const playerLuck = getRandomInt(0, 100);
  const isEliminated = playerLuck <= CHANCES_TO_BEING_ELIMINATED;
  return isEliminated;
}

export const voteToContinue = (players: Array<PlayerModel>) => { 
  const result = [] as Array<PlayerModel>;
  for (const player of players) {
    const keepPlaying = checkKeepPlaying();
    result.push({
      ...player,
      keepPlaying
    })
  }
  return result;
}

export const checkKeepPlaying = () => { 
  const playerKeepPlaying = getRandomInt(0, 100);
  const isNotContinue = playerKeepPlaying <= CHANCES_TO_CONTINUE;
  return !isNotContinue;
}

export const checkFinishGame = (players: Array<PlayerModel>, votesForEndGame: number) => {
  const result = (PERCENTAGE_VOTES_FINISH_GAME * players.length) / 100;
  const finishGame = (votesForEndGame >= result && votesForEndGame > 0) || !players.length;
  return finishGame;
}