import type { NextPage } from 'next'
import { useMint } from '../hooks/useMint'

const Home: NextPage = () => {
  
  // hook for collecting already existing token
  const { 
    write, 
    data, 
    isError, 
    isLoading, 
    isSuccess, 
    status 
  } = useMint()

  return (
    <div className="flex flex-col items-center justify-center h-screen pb-48 space-y-6">
      <button
        disabled={isLoading}
        onClick={() => write?.()}
        className="w-[120px] border-[1px] border-black px-3 py-1 rounded hover:bg-black hover:text-white">
        Mint
      </button>     
    </div>
  )
}

export default Home
