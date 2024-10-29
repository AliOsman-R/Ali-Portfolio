import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div className="flex  flex-col  gap-4 justify-center items-center h-[70vh]">
        <div className="text-2xl font-bold">
            Not Found 404
        </div>
        <Link 
        to={'/'}
        className="text-blue-500 hover:underline text-xl"
        >
            Go Home Page
        </Link>
    </div>
  )
}

export default Page404