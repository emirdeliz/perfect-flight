import { memo, useEffect, useMemo, useState } from "react";
import { Button, Col, Flex, Row, Title } from "@atoms"
import { Card, Logo, Soldier } from "@templates";
import { Players, SectionTitle } from "./components";
import { PlayerModel } from "@api";
import * as S from './GamePage.style';
import * as C from "./Game.controller";
import { initialPlayers } from "./__mocks__/players";
import { formatNumberAsCurrency, playMp3 } from "@helpers";
import { useRouter } from "next/router";


export const GamePage = memo(() => {
  const [players, setPlayers] = useState<Array<PlayerModel>>(initialPlayers);
  const [playersEliminated, setPlayersEliminated] = useState<Array<PlayerModel>>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [rounds, setRounds] = useState<number>(0);
  const [finishGame, setFinishGame] = useState<boolean>(false);
  const router = useRouter();

  const playGame = async () => { 
    if (finishGame) { 
      router.push('home');
      return;
    }

    playMp3('/red-light-sound.mp3');
    setProcessing(true);
    const result = C.play(players);
    setPlayers(C.voteToContinue(result.remaining));
    setPlayersEliminated([...playersEliminated, ...result.eliminated]);

    await new Promise((r) => setTimeout(r, 1000));
    setProcessing(false);
    setRounds(rounds + 1);
  }

  const prizeFunds = useMemo(() => {
    return playersEliminated.length * C.INITIAL_BALANCE;
  }, [playersEliminated]);

  const votesForEndGame = useMemo(() => {
    return players.filter(p => !p.keepPlaying).length;
  }, [players]);

  const buttonLabel = useMemo(() => {
    if (finishGame) { 
      return 'Finalizar Jogo';
    } else if (processing) {
      return 'Eliminando participantes...';
    }
    return 'Iniciar Rodada';
  }, [finishGame, processing]);

  useEffect(() => {
    const isToFinishGame = C.checkFinishGame(players, votesForEndGame);
    setFinishGame(isToFinishGame);
  }, [votesForEndGame, players]);

  return (
    <Flex.Center wFull hFull>
      <Logo />
      <S.Content>
        <Row>
          <Col.Auto>
            <Card maxHeight="500px">
              <SectionTitle
                title="Participantes"
                subTitle={`${players.length}/${playersEliminated.length}`}
                justifySpaceBetween
              />
              <Players players={players} showVote={processing} />
            </Card>
          </Col.Auto>
          <Col.Auto>
            <Row>
              <Col>
                <Card>
                  <SectionTitle title="Round" subTitle={String(rounds < 10 ? `0${rounds}` : rounds)} />
                </Card>
              </Col>
              <Col.Auto>
                <Card>
                  <SectionTitle title="Fundos do Prêmio" subTitle={formatNumberAsCurrency(prizeFunds)} />
                </Card>
              </Col.Auto>
            </Row>
            <Soldier type="circle" />
            <Flex.Center>
              <Button mb5 onClick={playGame} default={processing} clickable={!processing}>
                {buttonLabel}
              </Button>
            </Flex.Center>
            <Card>
              <SectionTitle title="Votos para o fim do jogo" subTitle={votesForEndGame} />
            </Card>
          </Col.Auto>
          <Col.Auto>
            <Card maxHeight="500px">
              <SectionTitle
                title="Participantes Eliminados"
                subTitle={`${playersEliminated.length}/${players.length}`}
                justifySpaceBetween
              />
              <Players players={playersEliminated} />
            </Card>
          </Col.Auto>
        </Row>
      </S.Content>
    </Flex.Center>
  );
});
