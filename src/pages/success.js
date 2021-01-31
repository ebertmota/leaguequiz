import { useRouter } from 'next/router';
import db from '../../db.json';
import TemplateContainer from '../components/TemplateContainer';
import { Widget } from '../styles/components/Widget';

import { SuccessDetails } from '../styles/pages/success';

function Quiz() {
  const router = useRouter();
  const { name, wins, total } = router.query;
  console.log(router.query);

  return (
    <TemplateContainer backgroundImage={db.bg}>
      <Widget maxWidth="600px">
        <SuccessDetails>
          <p>Quiz concluido com sucesso</p>
          <h1>{name}</h1>

          <span>{`${wins}/${total}`}</span>
          <p>{`Você acertou ${wins} de ${total} perguntas.`}</p>
        </SuccessDetails>
      </Widget>
    </TemplateContainer>
  );
}

export default Quiz;
