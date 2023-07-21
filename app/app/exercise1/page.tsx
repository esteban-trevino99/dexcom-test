"use client";
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link'
const data = {
    exercise: {
        title: "Exercise 1",
        description: `Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
    that solves the following problem; return a list of all the integers in the range [1, list length]
    that do not appear in nums.`,
        examples: [
            {
                input: 'Input: nums = [4,3,2,7,8,2,3,1]',
                output: 'Output: [5,6]'
            },
            {
                input: 'Input: nums = Input: nums = [1,1]',
                output: 'Output: [2]'
            }
        ]
    },
    styleClasses: {
        input: "mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400",
        button: "mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    }
}

function Excercise1Explanation() {
    return (
        <div className='mt-5'>
            <h3 className='text-2xl font-bold'>Solution explained</h3>
            <p>Basically, I just look for the missing number through a <code>for</code> from 1 to <code>array.length</code>, 
                checking if the number is in the series [1-<code>array.length</code>]. If so, if <code>i</code> (current number in loop)
                is within the range and is not in the array, it is then pushed to an array of <code>missingNumbers</code>, which is returned
                to this page. This is probably a 2 on SCRUM estimating points (due to a fullstack work).
            </p>
        </div>
    )
}

export default function Excercise1() {
    const [input, setInput]: [input: string, setInput: React.Dispatch<string>] = useState('');
    const [solved, setSolved]: [input: boolean, setInput: React.Dispatch<boolean>] = useState(false);
    const { exercise, styleClasses } = data

    const validateNumbers = (data: Array<String>): boolean => {
        if (data.find(item => Number.isNaN(Number(item)))) return false
        return true
    }
    const getResult = () => {
        const data = input.split(",")
        if (!validateNumbers(data)) {
            alert("Input is incorrect");
            return
        }
        axios
            .post(process.env.NEXT_PUBLIC_API_URL as string + '/exercise1', data.map(item => Number(item)), {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => {
                setSolved(true);
                alert(`Result: ${res.data}`)
            }).catch(err => {
                if (err) alert(err.response.data)
            })

    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const inputProps = {
        type: "text",
        id: "input",
        className: styleClasses.input,
        placeholder: "4,3,2,7,8,2,3,1",
        value: input,
        onChange: handleInputChange,
        required: true
    }

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-3">{exercise.title}</h1>
            <div className="w-1/2 mx-auto">
                <p className="text-left">{exercise.description}</p>
                {
                    exercise.examples.map(((example, index) => (
                        <div key={index} className="mb-3">
                            <p className="font-bold">Example {index + 1}</p>
                            <p>{example.input}</p>
                            <p>{example.output}</p>
                        </div>
                    )))
                }
                <div className="w-1/2 mx-auto">
                    <label htmlFor="input" className="block mb-2 text-sm font-medium text-gray-900">Input (separate with commas)</label>
                    <input {...inputProps} />
                    <div className="flex justify-center">
                        <button className={styleClasses.button} onClick={getResult}>Solve!</button>
                        <Link href="/" className={styleClasses.button}>Go home</Link>
                    </div>
                </div>
                {
                    solved ? Excercise1Explanation() : null
                }
            </div>
        </div>
    )
}
