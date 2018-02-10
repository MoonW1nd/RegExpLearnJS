import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './Lesson.css';

export default class Lesson extends React.Component {
  render() {
    return (
      <section className='Lesson'>
        <Paper zDepth={1} className='Lesson-Paper'>
          <h2 className='Lesson-Title'>Урок 1. Поиск слов</h2>
          <section className='Information'>
            <h3 className=''>Предварительные сведения</h3>
            <p>
              {'В первую очередь стоит заметить, что любая строка сама по себе является регулярным выражением. Так, выражению "Хей", очевидно, будет соответствовать строка “Хей” и только она. Регулярные выражения являются регистрозависимыми, поэтому строка “хей” (с маленькой буквы) уже не будет соответствовать выражению выше.'}</p>
            <p>{'Однако уже здесь следует быть аккуратным — как и любой язык, регулярные выражения имеют спецсимволы, которые нужно экранировать. Вот их список: . ^ $ * + ? { } [ ] \\ | ( ). Экранирование осуществляется обычным способом — добавлением \\ перед спецсимволом.'}
            </p>
          </section>
          <h3>Задание</h3>
          <p>Найди слово в тексте</p>
          <TextField
            className='Paper-TextField'
            hintText="RegExp"
            style={{
              width: '50vw',
            }}
          />
          <p></p>
        </Paper>
      </section>
    );
  }
}
