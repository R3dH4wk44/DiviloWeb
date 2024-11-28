
                export default function Header() {
                return (
                    <header className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: "url(/background_header-optimized.webp)" }}>
                        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <div className="flex flex-col h-full z-10 justify-between text-white">
                                <div className="relative flex flex-row justify-between items-center px-8 py-5 text-white z-50">
                                    <a className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500" href="">DiviloApp</a>
                                    <button className="bg-emerald-500 rounded-xl hover:scale-105  hover:bg-emerald-600 hover:text-slate-50 px-4 py-2 duration-100 text-white">Descarga la app</button>
                                </div>
                            </div>
                        </div>
                    </header>           
                );}