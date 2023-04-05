import Facebook from "../img/icon-facebook.png"
import Instagram from "../img/icon-instagram.png"

function Footer(){
 
    return (
            <footer className="border-t border-gray-200">
            <div className="container max-w-5xl mx-auto px-4 flex items-center justify-between">
                <div className="font-black text-gray-400">LOGO</div>
                <div className="inline-flex items-center space-x-3">
                    <a href=""><img src={Facebook} alt=""/></a>
                    <a href=""><img src={Instagram} alt=""/></a>
                </div>
            </div>
        </footer>
    )   
}

export default Footer