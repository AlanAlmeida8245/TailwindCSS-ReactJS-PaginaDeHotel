

function Navbar(){

    return (
        <header >
        <div className="container mx-auto max-w-5xl px-4 h-24 flex items-center justify-between">
            <div className="font-black">
                LOGO
            </div>
            
            <ul className=" flex items-center ml-auto space-x-5 invisible md:visible">
                <li>
                    <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como Reservar</a>
                </li>   
                <li>
                      <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre Nóis</a>
                  </li>
                  <li>
                      <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</a>
                  </li>
                   <li>
                      <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
                   </li>
            
            </ul>

            <div className="font-black visible md:invisible">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
          </div>
          
        </div>
    </header>
    )
}


export default Navbar