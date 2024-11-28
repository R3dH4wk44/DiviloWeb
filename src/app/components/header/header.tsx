
                export default function Header() {
                return (
                    <header className=" shadow-xl relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: "url(/background_header-optimized.webp)" }}>
                        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                            <div className="flex flex-col h-full z-10 justify-between text-white">
                                <div className="relative flex flex-row justify-between items-center px-8 py-5 text-white z-50">
                                    <a className="lg:text-4xl md:text-4xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500" href="">DiviloApp</a>
                                    <button className="lg:text-lg md:text-md sm:text-sm bg-gradient-to-r  from-indigo-500 from-30% via-sky-500 via-70%  to-emerald-500 rounded-xl hover:scale-105   hover:text-slate-50 px-2 py-1 lg:px-4 lg:py-2 transition duration-700 text-white">Descarga la app</button>
                                </div>
                                <div className="w-full h-full flex flex-col  text-center justify-center items-center">
                                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                        Gestiona tus gastos compartidos<br />de forma simple y rápida
                                    </h1>
                                    <p className="mt-4 text-lg lg:text-xl  shadow-inner">
                                        Con Divilo, dividir nunca fue tan fácil
                                    </p>
                                    <button className="mt-6 bg-gradient-to-r  from-indigo-500 from-30% via-sky-500 via-70%  px-8 py-2 rounded-xl  to-emerald-500 transition hover:scale-105">
                                        Empieza Ahora
                                    </button>
                                </div>
                            </div>              
                        </div>
                    </header>
                    
                );}