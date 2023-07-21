"use client";
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link'
const data = {
    exercise: {
        title: "Exercise 2",
        description: `Given a list of integers nums and an integer target, write a function that solves the following
        problem; return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.`,
        examples: [
            {
                input: 'Input: nums = [2,7,11,15], target = 9',
                output: 'Output: [0,1]'
            },
            {
                input: 'Input: nums = [3,2,4], target = 6',
                output: 'Output: [1,2]'
            },
            {
                input: 'Input: nums = [3,3], target = 6',
                output: 'Output: [0,1]'
            }
        ]
    },
    styleClasses: {
        input: "mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400",
        button: "mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    }
}

function ExcerciseExplanation() {
    return (
        <div className='mt-5'>
            <h3 className='text-2xl font-bold'>Solution explained</h3>
            <p> I did a <code>for</code> inside a <code>forEach</code> in order to sum every 
            <code>item[firstIndex]+item[secondindex]</code> until specified target is found. <br />
            If no right answer is found, then it returns an error;
            </p>
        </div>
    )
}

function ExcerciseInput(props: any) {
    return (
        <div>
            <label htmlFor="input" className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
            <input {...props.inputsProps} />
        </div>
    )
}

export default function Excercise2() {
    const [input, setInput]: [input: string, setInput: React.Dispatch<string>] = useState('');
    const [target, setTarget]: [input: string, setInput: React.Dispatch<string>] = useState('');
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
        if (Number.isNaN(Number(target))) alert("Target is incorrect");

        axios
            .post(process.env.NEXT_PUBLIC_API_URL as string + '/exercise2', { 
                input: data.map(item => Number(item)), target
            }, {
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
    const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTarget(event.target.value)
    }

    const inputsProps = {
        input: {
            type: "text",
            id: "input",
            className: styleClasses.input,
            placeholder: "2,7,11,15",
            value: input,
            onChange: handleInputChange,
            required: true
        },
        target: {
            type: "number",
            id: "target",
            className: styleClasses.input,
            placeholder: "9",
            value: target,
            onChange: handleTargetChange,
            required: true
        }
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
                    {ExcerciseInput({ label: "Input (separate with commas)", inputsProps: inputsProps.input })}
                    {ExcerciseInput({ label: "Target", inputsProps: inputsProps.target })}

                    <div className="flex justify-center">
                        <button className={styleClasses.button} onClick={getResult}>Solve!</button>
                        <Link href="/" className={styleClasses.button}>Go home</Link>
                    </div>
                </div>
                {
                    solved ? ExcerciseExplanation() : null
                }
            </div>
        </div>
    )
}
