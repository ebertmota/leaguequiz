import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import db from '../../db.json';

import TemplateContainer from '../components/TemplateContainer';
import { Widget, WidgetContent } from '../styles/components/Widget';
import Input from '../styles/components/Input';
import Button from '../styles/components/Button';
import { WidgetContainer } from '../styles/pages/home';

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
    <TemplateContainer backgroundImage={db.bg}>
      <WidgetContainer>
        <Widget>
          <WidgetContent>
            <img
              src="https://lh3.googleusercontent.com/hQkq_POi31CpDfkhKn9T5NuU3ti-3miOm3524HSHynpCfRyW0I6-AjsR80pmrEsRXJB7NQZ__3Q-XqQuozDe5WJsFUbuKVOJUDL1dxKtvipRyIPqfNBaMacKMTvWkXQwaQR-tIvAsE_lD-VE9Wy9BuGRuBZHOie7L1ODSLXSOry5YwyTaT-xyuJFaGgrUSHTs-njcC19ZtHkrrn10D-ha1OLAn8GcfhfDJKY3aP9JF3fntTtaVaV12Jyrquoh7G2fqtY3dxpiKWm9vcq-c7tPEXPQvzi9MWtqBnCZNu7cUq1OGiS397hOQF68K9jxklcWYGcMSh7u-h7IXDyn4mXMDwloOJiHS17jLP0boQyo_qhGdKnhVCxz3OQy1uANERsq6bbg5VGjD07pkZzMkFZjfQvoaSqdI45HswO2_gu4zQILgeDbrHVYA1dGJPDgqC5gtd_YU1L7ZsCYq8yeO3AMP-ZFLRk1QskehM-lgcMDwZu8avd6FBOXKK1RXq-3ycPYZ6zeq72IHwe21-UFTH0NE8SFfsXM0nDvcpH7RkZ3paXvKNOMWMRbzBTxD6DN8QjqQrTbSjNt1Lb7fDgz6nKGUQjZ8LYVgtAZj7zfT8WbS9wv_sq_Hj8lqtQkjaFBpUfgrocWw09Dx0yMXfWZE2nUIVCF-e_uNHFrvZbQZmNPG4rHe69NklMmh2Eklw=w446-h100-no?authuser=0"
              alt=""
            />
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
