import Link from 'next/link'
const exercises = [
  {
    title: "Exercise 1",
    description: `Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
    that solves the following problem; return a list of all the integers in the range [1, list length]
    that do not appear in nums.`,
    btnText: 'Go to Exercise 1',
    url: "/exercise1"
  },
  {
    title: "Exercise 2",
    description: `Given a list of integers nums and an integer target, write a function that solves the following
    You may assume that each input would have exactly one solution, and you may not use the
    problem; return indices of the two numbers such that they add up to target.
    same element twice. You can return the answer in any order.`,
    btnText: 'Go to Exercise 2',
    url: "/exercise2"
  }
]

export default function Home() {
  const linkClass = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Test</h1>
        <div className="flex justify-around">
          {
            exercises.map((exercise, index) => (<>
              <div key={index} className="w-1/3">
                <h3 className="text-2xl font-bold mb-2">
                  {exercise.title}
                </h3>
                <p className="text-left mb-3">{exercise.description}</p>
                <Link className={linkClass} href={exercise.url} >
                  {exercise.btnText}
                </Link>
              </div>
            </>))
          }
        </div>
      </div>
    </div>
  )
}
