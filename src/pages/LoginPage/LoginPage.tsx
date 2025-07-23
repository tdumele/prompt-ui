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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-3">
                            <Logo size={48} />
                            <h1 className="text-2xl font-bold text-gray-900">Prompt UI</h1>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Accès au chat
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Documentation Content */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Bienvenue sur Prompt UI votre Assistant ChatBot
                            </h2>

                            <p className="text-lg text-gray-600 mb-8">
                                Découvrez un outil conversationnel intelligent conçu pour vous accompagner
                                dans vos tâches quotidiennes et répondre à vos questions.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-blue-700">
                                            <strong>Nouveau ici ?</strong> Cliquez sur "Accès au chat" pour commencer
                                            votre première conversation avec l'assistant.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Fonctionnalités principales
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        💬 Conversations intelligentes
                                    </h4>
                                    <p className="text-gray-600">
                                        Posez vos questions et obtenez des réponses contextuelles
                                        adaptées à vos besoins.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        🔒 Sécurisé et privé
                                    </h4>
                                    <p className="text-gray-600">
                                        Vos conversations sont protégées par une authentification
                                        sécurisée et restent confidentielles.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        ⚡ Réponses rapides
                                    </h4>
                                    <p className="text-gray-600">
                                        Obtenez des réponses instantanées grâce à notre
                                        technologie d'intelligence artificielle avancée.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        📱 Interface intuitive
                                    </h4>
                                    <p className="text-gray-600">
                                        Une interface simple et élégante pour une expérience
                                        utilisateur optimale.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Comment commencer ?
                            </h3>

                            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                                <li>Cliquez sur le bouton "Accès au chat" en haut à droite</li>
                                <li>Connectez-vous avec vos identifiants</li>
                                <li>Commencez votre conversation en tapant votre première question</li>
                                <li>Explorez les différentes fonctionnalités disponibles</li>
                            </ol>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                    Exemples de questions que vous pouvez poser :
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>"Comment puis-je optimiser ma productivité ?"</li>
                                    <li>"Explique-moi ce concept technique"</li>
                                    <li>"Aide-moi à rédiger un email professionnel"</li>
                                    <li>"Quelles sont les meilleures pratiques pour..."</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Accès rapide
                            </h3>

                            <button
                                onClick={handleLogin}
                                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4"
                            >
                                Accès au chat
                            </button>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Support</h4>
                                    <p className="text-sm text-gray-600">
                                        Besoin d'aide ? Contactez notre équipe support.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
                                    <p className="text-sm text-gray-600">
                                        Consultez notre guide complet d'utilisation.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Mises à jour</h4>
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
            <footer className="bg-white border-t mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-gray-500">
                        <p>&copy; 2024 ChatBot Assistant. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}