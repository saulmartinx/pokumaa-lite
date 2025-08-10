import { useState, useEffect } from 'react'

// Four simple questions for the "Milline Poku sa oled?" quiz.
const QUESTIONS = [
  {
    question: 'Mis on sinu lemmik tegevus?',
    options: ['Mängimine', 'Seiklemine', 'Sõpradega olemine', 'Õppimine'],
  },
  {
    question: 'Milline on sinu lemmik aastaaeg?',
    options: ['Kevad', 'Suvi', 'Sügis', 'Talv'],
  },
  {
    question: 'Vali oma lemmik jook:',
    options: ['Limonaad', 'Kakao', 'Vesi', 'Tee'],
  },
  {
    question: 'Mis stiil sind kõige paremini kirjeldab?',
    options: ['Seikleja', 'Loominguline', 'Seltskondlik', 'Tark'],
  },
]

/**
 * Component that renders a mini quiz with four questions.  At the end it
 * calculates a simple result based on the most frequently chosen option
 * index and stores a 10% coupon in localStorage.  If a result already
 * exists in localStorage, the quiz is skipped and the stored result is
 * displayed.
 */
const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  // Load any existing result from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('pokuQuizResult')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setResult(parsed)
      } catch (e) {
        /* ignore parse errors */
      }
    }
  }, [])

  const handleAnswer = (index) => {
    const newAnswers = [...answers, index]
    if (current < QUESTIONS.length - 1) {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (allAnswers) => {
    // determine the most frequently selected answer index
    const counts = {}
    allAnswers.forEach((ans) => {
      counts[ans] = (counts[ans] || 0) + 1
    })
    let topIndex = 0
    let max = 0
    Object.keys(counts).forEach((key) => {
      if (counts[key] > max) {
        max = counts[key]
        topIndex = parseInt(key, 10)
      }
    })
    // Map index to a simple Poku type description
    const types = ['Mänguline Poku', 'Seiklev Poku', 'Sotsiaalne Poku', 'Tark Poku']
    const resultData = {
      type: types[topIndex] ?? 'Müstiline Poku',
      coupon: 'POKU10',
    }
    localStorage.setItem('pokuQuizResult', JSON.stringify(resultData))
    setResult(resultData)
  }

  if (result) {
    return (
      <div className="space-y-4 text-center" aria-label="Viktoriini tulemus">
        <h2 className="text-3xl font-bold">Tulemus</h2>
        <p>Sa oled <strong>{result.type}</strong>!</p>
        <p className="text-green-700">Siin on sinu kupongi kood: <strong>{result.coupon}</strong> (10% soodustust)</p>
      </div>
    )
  }

  const { question, options } = QUESTIONS[current]
  return (
    <div className="space-y-6" aria-label="Mini viktoriin">
      <h2 className="text-3xl font-bold text-center mb-4">Milline Poku sa oled?</h2>
      <p className="font-medium">{question}</p>
      <div className="grid gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            aria-label={`Vali vastus ${opt}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Quiz
