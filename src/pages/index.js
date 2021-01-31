import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import db from '../../db.json';

import TemplateContainer from '../components/TemplateContainer';
import { Widget, WidgetContent } from '../styles/components/Widget';
import Input from '../styles/components/Input';
import Button from '../styles/components/Button';
import { WidgetContainer, Logo } from '../styles/pages/home';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      router.push(`/quiz?name=${encodeURIComponent(name)}`);
    },
    [router, name],
  );

  return (
    <TemplateContainer backgroundImage={db.bg2}>
      <WidgetContainer>
        <Widget>
          <WidgetContent>
            <Logo src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20150216223701%2Fleagueoflegends%2Fimages%2Fe%2Feb%2FDarius_Poro_Icon.png&f=1&nofb=1" />
            <div>
              <p>Teste seus conhecimentos sobre pathing e controle de wave.</p>
              <form onSubmit={handleSubmit}>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Digite seu nome"
                />
                <div>
                  <Button disabled={name.length === 0}>Jogar</Button>
                </div>
              </form>
            </div>
          </WidgetContent>
        </Widget>
      </WidgetContainer>
    </TemplateContainer>
  );
}
