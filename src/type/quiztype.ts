
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionType = {
    question : string
    answer : string
    options: string[]
}

export type propsType = {
    question:string
    quesno : number
    option:string[]
    callback: any
    userAnswer :any
}
export type answerObject = {
    question :string
    correct: boolean
    answer: string
    correctAnswer : String
    
}