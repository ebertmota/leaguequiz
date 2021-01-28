import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import db from '../../db.json';

import Widget from '../styles/components/Widget';
import Input from '../styles/components/Input';
import Header from '../components/Header';
import Button from '../styles/components/Button';

import { BackgroundImage, QuizContainer } from '../styles/pages/home';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    },
    [router, name],
  );

  return (
    <BackgroundImage src={db.bg}>
      <Header />

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>League Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre pathing e controle de wave.</p>
            <form onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite seu nome"
              />

              <Button disabled={name.length === 0}>Jogar</Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>github.com/ex1</p>
            <p>github.com/ex2</p>
            <p>github.com/ex3</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
