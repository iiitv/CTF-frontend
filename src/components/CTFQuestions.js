import React from 'react'
import CTFhero from './CTFhero'
import './CTFQuestions.css'
import { Data } from './Data'

function CTFQuestions() {
  return (
    <div className='QuestionPage'>
      <CTFhero />
      <div className='questionBox'>
        <>
          <p>What are common hydrogen powered vehicles?</p>
          <button className='tag'>Science</button>
          <br />
          <div className='answer'>
            <textarea name='Answer' id='' cols='30' rows='2'></textarea>
          </div>
        </>
      </div>
    </div>
  )
}

export default CTFQuestions
