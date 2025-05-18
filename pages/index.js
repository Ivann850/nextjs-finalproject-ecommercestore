export default function Home() {
    return (
        <div className="p-5">
            <div>
                <h2>Mobiles</h2>
                <div className="py-4">
                    <div className="w-64">
                        <div className="bg-blue-100 p-5 rounded-xl">
                            <img src="/products/iphone.png" width="300" height="300"  alt=""/>
                        </div>
                        <div classNAme="mt-2">
                            <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
                        </div>
                        <p className="text-sm mt-2 leading-4">
                            The iPhone 14 is a smartphone featuring a 6.1-inch Super Retina XDR display and a 
                            dual-camera system with a 12MP Main and Ultra Wide camera. 
                            It's powered by the A15 Bionic chip and offers a 128GB storage option. 
                        </p>
                        <div className="flex mt-1">
                            <div className="text-2xl font-bold grow">$899</div>
                            <button className="bg-emerald-400 text-white py-1 px-3">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}