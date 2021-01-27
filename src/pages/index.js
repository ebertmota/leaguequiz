import db from '../../db.json';
import { Widget } from '../styles/components/Widget';
import { BackgroundImage, QuizContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <BackgroundImage src={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quizes ohh</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum si dolor</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes 2 hehe</h1>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
