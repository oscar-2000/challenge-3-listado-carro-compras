import '@styles/App.css'
import data from '@lib/data.json'
import { useState } from 'react'
import ListProducts from '@components/ListProducts'
import Checkout from '@components/Checkout'

function App() {
  const [isDark, setDark] = useState(false)
  
  const ChangeTheme = () => {
    if (root.classList.contains('dark')) {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setDark(false);
    } else {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setDark(true);
    }
  }

  return (
    <div className=' bg-[#fcf8f5] dark:bg-[#363636]'>
      <div className='max-w-[1300px] mx-auto py-20 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='col-span-1 md:col-span-2'>
            <div className="flex flex-row gap-2 flex-wrap items-center mb-10 justify-between">
              <h5 className='text-gray dark:text-white font-bold text-3xl'>Desserts</h5>
              <button onClick={() => ChangeTheme()} className="cursor-pointer p-3 rounded-2xl group duration-300 bg-gray-700/20 dark:bg-white/40 dark:hover:bg-white/50">
                  <img src={`/img/icon-${isDark ? 'sun' : 'moon'}.svg`} className="h-6 opacity-80 group-hover:opacity-100 duration-300" alt={`Modo ${isDark ? 'oscuro' : 'claro'}`} />
              </button>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              <ListProducts
              products={data}
              />
            </div>
          </div>
          <div className='col-span-1 md:col-span-1'>
            <Checkout/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
