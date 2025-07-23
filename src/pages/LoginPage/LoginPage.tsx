import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "../../components/Logo/Logo";

export const LoginPage = () => {
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    // Rediriger automatiquement vers /chat si déjà authentifié
    useEffect(() => {
        if (keycloak.authenticated) {
            navigate('/chat');
        }
    }, [keycloak.authenticated, navigate]);

    const handleLogin = () => {
        keycloak.login({
            redirectUri: window.location.origin + '/chat'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Soft Floating Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rounded-full opacity-30 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Header */}
            <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-3">
                            <Logo size={48} />
                            <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                                Prompt UI
                            </h1>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg 
                                     hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
                                     shadow-lg hover:shadow-xl"
                        >
                            Accès au chat
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Documentation Content */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-6">
                                Bienvenue sur Prompt UI votre Assistant ChatBot
                            </h2>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Découvrez un outil conversationnel intelligent conçu pour vous accompagner
                                dans vos tâches quotidiennes et répondre à vos questions.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-6 mb-8 rounded-lg shadow-sm">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping mr-3"></div>
                                    <div className="text-blue-800">
                                        <strong className="text-blue-900">Nouveau ici ?</strong>
                                        <span className="text-gray-700 ml-2">
                                            Cliquez sur "Accès au chat" pour commencer votre première conversation avec l'assistant.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
                                Fonctionnalités principales
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                                    <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                                        <span className="text-blue-600 mr-2">💬</span>
                                        Conversations intelligentes
                                    </h4>
                                    <p className="text-gray-600">
                                        Posez vos questions et obtenez des réponses contextuelles
                                        adaptées à vos besoins.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm hover:border-purple-300 transition-all duration-300 hover:shadow-md">
                                    <h4 className="text-lg font-semibold text-purple-700 mb-2 flex items-center">
                                        <span className="text-purple-600 mr-2">🔒</span>
                                        Sécurisé et privé
                                    </h4>
                                    <p className="text-gray-600">
                                        Vos conversations sont protégées par une authentification
                                        sécurisée et restent confidentielles.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-sm hover:border-pink-300 transition-all duration-300 hover:shadow-md">
                                    <h4 className="text-lg font-semibold text-pink-700 mb-2 flex items-center">
                                        <span className="text-pink-600 mr-2">⚡</span>
                                        Réponses rapides
                                    </h4>
                                    <p className="text-gray-600">
                                        Obtenez des réponses instantanées grâce à notre
                                        technologie d'intelligence artificielle avancée.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm hover:border-green-300 transition-all duration-300 hover:shadow-md">
                                    <h4 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                                        <span className="text-green-600 mr-2">📱</span>
                                        Interface intuitive
                                    </h4>
                                    <p className="text-gray-600">
                                        Une interface simple et élégante pour une expérience
                                        utilisateur optimale.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
                                Comment commencer ?
                            </h3>

                            <ol className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-3 font-mono">1.</span>
                                    Cliquez sur le bouton "Accès au chat" en haut à droite
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-3 font-mono">2.</span>
                                    Connectez-vous avec vos identifiants
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-3 font-mono">3.</span>
                                    Commencez votre conversation en tapant votre première question
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-3 font-mono">4.</span>
                                    Explorez les différentes fonctionnalités disponibles
                                </li>
                            </ol>

                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="text-blue-600 mr-2">▶</span>
                                    Exemples de questions que vous pouvez poser :
                                </h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="hover:text-blue-700 transition-colors cursor-pointer">
                                        • "Comment puis-je optimiser ma productivité ?"
                                    </li>
                                    <li className="hover:text-blue-700 transition-colors cursor-pointer">
                                        • "Explique-moi ce concept technique"
                                    </li>
                                    <li className="hover:text-blue-700 transition-colors cursor-pointer">
                                        • "Aide-moi à rédiger un email professionnel"
                                    </li>
                                    <li className="hover:text-blue-700 transition-colors cursor-pointer">
                                        • "Quelles sont les meilleures pratiques pour..."
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-8">
                            <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4">
                                Accès rapide
                            </h3>

                            <button
                                onClick={handleLogin}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-4 py-3 rounded-lg 
                                         hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
                                         shadow-lg hover:shadow-xl mb-6"
                            >
                                Accès au chat
                            </button>

                            <div className="space-y-4">
                                <div className="border-l-2 border-blue-300 pl-4">
                                    <h4 className="font-medium text-blue-700 mb-2">Support</h4>
                                    <p className="text-sm text-gray-600">
                                        Besoin d'aide ? Contactez notre équipe support.
                                    </p>
                                </div>

                                <div className="border-l-2 border-purple-300 pl-4">
                                    <h4 className="font-medium text-purple-700 mb-2">Documentation</h4>
                                    <p className="text-sm text-gray-600">
                                        Consultez notre guide complet d'utilisation.
                                    </p>
                                </div>

                                <div className="border-l-2 border-pink-300 pl-4">
                                    <h4 className="font-medium text-pink-700 mb-2">Mises à jour</h4>
                                    <p className="text-sm text-gray-600">
                                        Découvrez les dernières fonctionnalités ajoutées.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            &copy; 2024 ChatBot Assistant. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}