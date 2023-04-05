

    import Hotel1 from "../img/hotel-1.jpeg"
    import Hotel2 from "../img/hotel-2.jpeg"
    import Hotel3 from "../img/hotel-3.jpeg"
    import Hotel4 from "../img/hotel-4.jpeg"
    import Shadow from "../img/image-shadow.png"


function Grid(){
    return (
        <aside>
        <div className="container max-w-5xl mx-auto px-4">
          <h3 className="text-2xl text-gray-500 text-center font-semibold mb-8">Conheça Mais</h3>
            <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 lg:space-y-0">
                <div className="relative md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                      Salinas do Maraggi  Resort
                  </div>
                    <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-20 z-10" />
                    <img src={Hotel1} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative md:col-span-2 md:h-40 rounded-lg overflow-hidden" >
                  <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                    Beach Park Resort 
                </div>
                  <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-20 z-10" />
                  <img src={Hotel2} alt="" className="w-full h-full object-cover" />
                </div>
                <div className=" relative rounded-lg overflow-hidden">
                   <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                      Grand Palladium
                  </div>
                    <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-20 z-10" />
                  <img src={Hotel3} alt="" className="w-full h-full object-cover" />
                </div>
                <div className=" relative rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                    Arraial d´Ajuda Eco Resort
                </div>
                  <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-20 z-10" />
                  <img src={Hotel4} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </aside>
    )
}

export default Grid