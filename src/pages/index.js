import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import logoImg from '../assets/rangerlol.png';
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
    <TemplateContainer>
      <WidgetContainer>
        <Widget>
          <WidgetContent>
            <Logo src={logoImg} disabled={name.length === 0} />
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
