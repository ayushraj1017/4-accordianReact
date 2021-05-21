import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {


  const [questions]=useState(data);






  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            const {title,info} =question
            return (
              <SingleQuestion key={question.id} title={title} info={info}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
