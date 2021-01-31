import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import db from '../../db.json';

import TemplateContainer from '../components/TemplateContainer';
import Button from '../styles/components/Button';
import {
  Widget,
  WidgetHeader,
  WidgetCover,
  WidgetContent,
} from '../styles/components/Widget';

import {
  QuizContainer,
  QuestionContainer,
  QuestionItem,
} from '../styles/pages/quiz';

function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;
  const isCorrect = selectedAlternative === question.answer;

  useEffect(() => {
    if (isCorrect) {
      setCorrectAnswers(state => state + 1);
    }
  }, [selectedAlternative, isCorrect]);

  const handleNextQuestion = useCallback(() => {
    setSelectedAlternative(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setIsQuestionSubmited(false);
      setCurrentQuestion(nextQuestion);
    } else {
      router.push(
        `/success?name=${encodeURIComponent(
          name,
        )}&wins=${correctAnswers}&total=${totalQuestions}`,
      );
    }
  }, [
    currentQuestion,
    totalQuestions,
    router,
    name,
    isCorrect,
    correctAnswers,
  ]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(() => {
        handleNextQuestion();
      }, [1500]);
    },
    [setIsQuestionSubmited, handleNextQuestion],
  );

  return (
    <TemplateContainer backgroundImage={db.bg}>
      <QuizContainer>
        <Widget maxWidth="600px">
          <WidgetHeader>
            <h1>{`Pergunta ${currentQuestion + 1} de ${totalQuestions}`}</h1>
          </WidgetHeader>

          <WidgetContent>
            <WidgetCover src={question.image} />

            <div>
              <h2>{question.title}</h2>
              <p>
                {isQuestionSubmited && isCorrect
                  ? 'Alternativa correta'
                  : isQuestionSubmited && 'Alternativa Errada'}
                {!isQuestionSubmited && question.description}
              </p>

              <form onSubmit={handleSubmit}>
                <QuestionContainer>
                  {question.alternatives.map(
                    (alternative, alternativeIndex) => (
                      <QuestionItem
                        disabled={isQuestionSubmited}
                        selected={selectedAlternative === alternativeIndex}
                        key={alternative}
                        IsCorrect={isQuestionSubmited && isCorrect}
                        IsWrong={
                          isQuestionSubmited &&
                          selectedAlternative !== question.answer
                        }
                      >
                        <label htmlFor={alternative}>{alternative}</label>
                        <input
                          onChange={() =>
                            setSelectedAlternative(alternativeIndex)
                          }
                          type="radio"
                          name={currentQuestion}
                          id={alternative}
                        />
                      </QuestionItem>
                    ),
                  )}
                </QuestionContainer>

                <Button
                  type="submit"
                  disabled={isQuestionSubmited || selectedAlternative === null}
                >
                  Confirmar
                </Button>
              </form>
            </div>
          </WidgetContent>
        </Widget>
      </QuizContainer>
    </TemplateContainer>
  );
}

export default Quiz;
