
function Form(){
    return (
        <aside className="py-20">
        <div className="container max-w-5xl mx-auto p-4 flex justify-center">
          <form className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <select className="bg-grey-50 px-3 py-2 border-gray-300 rounded text-gray-500">
                <option value="">Escolha o Estado</option>
            </select>
            <select className="bg-grey-50 px-3 py-2 border-gray-300 rounded text-gray-500">
              <option value="">Escolha a Cidade</option>
            </select>
          <button className="col-span-2 lg:col-span-1 inline-flex justify-center items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Pesquisar Resort
          </button>
        </form>

        </div>

     </aside>
    )   
}

export default Form