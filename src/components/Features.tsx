
import Image from "../img/featured-img.png";

function Features()
{
    return (
        <section>
        <div className="container max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col-reverse lg:flex-row">

                <div className="lg:pr-10">
                    <div className="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</div>
                    <div className="text-2xl">Ecoresort Praia do Forte Bahia</div>
                    <div className="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 estrelas</div>
                    <div className="text-sm text-gray-400 font-medium mt-4">
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi aperiam fugit? Nulla autem dolorum, minima est dolorem quae esse, eveniet officia perspiciatis error repellendus saepe eligendi necessitatibus cumque dolores.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi aperiam fugit? Nulla autem dolorum, minima est dolorem quae esse, eveniet officia perspiciatis error repellendus saepe eligendi necessitatibus cumque dolores.</p>
                    </div>
                    <a href="" className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded mt-3">
                      Pesquisar Resort
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </a>
                </div>
               
                <div className="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
                    <div>
                        <img src={Image} alt="featured" width="450" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Features