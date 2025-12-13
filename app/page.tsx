import Image from "next/image";
import { 
  Search, Shield, Zap, Users, Clock, ChevronRight, Menu, Play, 
  HeartHandshake, ArrowRight, Code, Palette, PenTool, 
  Megaphone, Video, Languages, Briefcase, Lightbulb, 
  PartyPopper, Star, CheckCircle, Globe, Target, Sparkle, Award, Rocket, AwardIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src="/w.png"
                    alt="Worqly logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900">Worqly</span>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <a href="#talents" className="text-gray-700 hover:text-blue-600 font-medium transition">Trouver des freelances</a>
                <a href="#missions" className="text-gray-700 hover:text-blue-600 font-medium transition">Trouver du travail</a>
                <a href="#comment" className="text-gray-700 hover:text-blue-600 font-medium transition">Comment ça marche</a>
                <a href="#entreprises" className="text-gray-700 hover:text-blue-600 font-medium transition">Devenez partenaire</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-gray-700 hover:text-blue-600 font-medium">Connexion</button>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                S'inscrire gratuitement
              </button>
              <button className="lg:hidden text-gray-700"><Menu className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative pt-36 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                <HeartHandshake className="w-5 h-5" />
                <span>Nouvelle plateforme • Ouverte à tous • Inscription gratuite</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Trouvez ou proposez des services<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">en toute simplicité</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Que vous soyez freelance débutant ou expérimenté, étudiant, entrepreneur ou entreprise,<br />
                Worqly est fait pour vous. Rejoignez une communauté bienveillante qui grandit ensemble.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg">
                  Rejoindre la communauté
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-lg">
                  <Play className="w-5 h-5" />
                  Voir en 1 minute
                </button>
              </div>
            </div>

            <div className="relative pt-16">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 mb-6 transform hover:-translate-y-2 transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <AwardIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded w-32 mb-2"></div>
                        <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-4/5"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="h-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded w-3/4"></div>
                      </div>
                    </div>

                    <div className="group relative bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <HeartHandshake className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="h-2 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded w-3/4"></div>
                      </div>
                    </div>

                    <div className="col-span-2 mt-4">
                      <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center">
                              <Sparkle className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="h-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded w-24 mb-2"></div>
                              <div className="h-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded w-16"></div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">100% Sécurisé</div>
                    <div className="text-xs text-gray-500">Paiements garantis</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 left-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">5★ Qualité</div>
                    <div className="text-xs text-gray-500">Services vérifiés</div>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>

      {/* Search section with category buttons */}
      <section className="py-28 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Trouvez le talent parfait pour votre projet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection exigeante de freelances passionnés et compétents dans tous les domaines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 relative">
                  <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Développement web, design UX/UI, rédaction SEO, montage vidéo, stratégie marketing..."
                    className="w-full pl-20 pr-8 py-7 text-lg font-medium text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-14 py-7 font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 group">
                  <span>Rechercher</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {[
              { label: "Développement", icon: Code, bg: "from-blue-50 to-blue-100", color: "text-blue-600" },
              { label: "Design", icon: Palette, bg: "from-purple-50 to-purple-100", color: "text-purple-600" },
              { label: "Rédaction", icon: PenTool, bg: "from-emerald-50 to-emerald-100", color: "text-emerald-600" },
              { label: "Marketing", icon: Megaphone, bg: "from-orange-50 to-orange-100", color: "text-orange-600" },
              { label: "Vidéo", icon: Video, bg: "from-pink-50 to-pink-100", color: "text-pink-600" },
              { label: "Traduction", icon: Languages, bg: "from-indigo-50 to-indigo-100", color: "text-indigo-600" },
              { label: "Assistance", icon: Briefcase, bg: "from-teal-50 to-teal-100", color: "text-teal-600" },
              { label: "Conseil", icon: Lightbulb, bg: "from-amber-50 to-amber-100", color: "text-amber-600" },
            ].map((cat) => (
              <button
                key={cat.label}
                className="group flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 py-6 px-4 rounded-2xl font-medium text-gray-800 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <span className="text-sm">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Une plateforme pensée pour vous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparente et humaine — parce que le freelancing, c'est avant tout des relations de confiance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -top-6 left-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Paiements sécurisés</h3>
                  <p className="text-gray-600 leading-relaxed">Argent bloqué jusqu'à validation du travail</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">100% sécurisé</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -top-6 left-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Communauté bienveillante</h3>
                  <p className="text-gray-600 leading-relaxed">On favorise l'entraide et le respect</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-emerald-600 font-medium">Support actif</span>
                  <Sparkle className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -top-6 left-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Simple & rapide</h3>
                  <p className="text-gray-600 leading-relaxed">Créez votre profil ou postez un projet en 2 minutes</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-amber-600 font-medium">Rapide & facile</span>
                  <Zap className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -top-6 left-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Support humain</h3>
                  <p className="text-gray-600 leading-relaxed">Une vraie personne vous répond (pas un robot)</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">Support 7j/7</span>
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Expertise diversifiée</div>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tous les talents sont les bienvenus
            </h2>
            <p className="text-xl text-gray-600">
              Que vous débutiez ou que vous ayez 10 ans d'expérience, il y a une place pour vous ici.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { 
                name: "Développement & Tech", 
                gradient: "from-blue-500 via-cyan-500 to-blue-600",
                icon: Code,
                description: "Experts en développement"
              },
              { 
                name: "Design & Création", 
                gradient: "from-purple-500 via-pink-500 to-purple-600",
                icon: Palette,
                description: "Créatifs passionnés"
              },
              { 
                name: "Marketing & Com", 
                gradient: "from-orange-500 via-red-500 to-orange-600",
                icon: Megaphone,
                description: "Spécialistes marketing"
              },
              { 
                name: "Rédaction & Traduction", 
                gradient: "from-indigo-500 via-blue-500 to-indigo-600",
                icon: PenTool,
                description: "Talents de l'écriture"
              },
              { 
                name: "Vidéo & Son", 
                gradient: "from-violet-500 via-purple-500 to-violet-600",
                icon: Video,
                description: "Artistes audiovisuels"
              },
              { 
                name: "Business & Admin", 
                gradient: "from-emerald-500 via-teal-500 to-emerald-600",
                icon: Briefcase,
                description: "Experts en gestion"
              },
            ].map((cat) => (
              <div key={cat.name} className="group relative cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur" style={{
                  background: `linear-gradient(135deg, ${cat.gradient.split(' ')[1]}, ${cat.gradient.split(' ')[3]})`
                }}></div>
                <div className={`relative bg-gradient-to-br ${cat.gradient} rounded-2xl p-8 text-white overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <cat.icon className="w-32 h-32" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <cat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {cat.description}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
                    <p className="text-white/80 mb-6 text-sm">Rejoignez des talents passionnés</p>
                    
                    <div className="flex items-center gap-3 text-white/90 group-hover:gap-4 transition-all duration-300">
                      <span className="font-medium">Découvrir</span>
                      <div className="relative">
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        <ChevronRight className="w-5 h-5 absolute top-0 left-0 group-hover:translate-x-4 transition-transform opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final call-to-action section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-white/20">
            <PartyPopper className="w-5 h-5" />
            <span>Lancement 2026 – Inscription 100% gratuite pour tous</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Rejoignez-nous dès aujourd'hui
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Que vous cherchiez un freelance ou que vous vouliez proposer vos services,
            vous êtes au bon endroit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-white text-blue-600 px-12 py-5 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                Créer mon compte gratuit
                <Rocket className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group bg-transparent text-white px-12 py-5 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                Découvrir la plateforme
              </span>
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Sans frais</div>
                <div className="text-white/70 text-sm">Inscription gratuite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-white/70 text-sm">Satisfaction garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with links and branding */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/w.png"
                  alt="Worqly logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-white">Worqly</span>
            </div>
            
            <div className="flex gap-8 flex-wrap justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">À propos</a>
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">Aide</a>
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white transition font-medium">Confidentialité</a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              © 2025 Worqly. On grandit ensemble en connectant compétences, services et projets.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Service actif 24h/24</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifié sécurité</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Objectif qualité</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}