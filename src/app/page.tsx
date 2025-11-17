"use client";

import { Camera, Zap, TrendingDown, BarChart3, Target, Users, Check, Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const handlePixPayment = () => {
    const pixKey = "dcd7ac32-4f7e-46fa-b2e8-14f104492975";
    
    // Copia a chave PIX para o clipboard
    navigator.clipboard.writeText(pixKey).then(() => {
      alert(`Chave PIX copiada com sucesso!\n\n${pixKey}\n\nCole no seu app de pagamento para completar a assinatura.`);
    }).catch(() => {
      // Fallback se não conseguir copiar
      alert(`Use esta chave PIX para pagamento:\n\n${pixKey}`);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Tecnologia de IA para Emagrecimento Inteligente
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Controle suas Calorias<br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              com um Clique! 📷✨
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Está pronto para transformar sua jornada de emagrecimento? Com o <strong>CaloriSnap</strong>, contar calorias ficou muito mais fácil e prático!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handlePixPayment}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Camera className="w-5 h-5 mr-2" />
              Experimente Grátis Agora
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              Ver Como Funciona
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              7 dias grátis
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              Cancele quando quiser
            </div>
          </div>
        </div>
        
        {/* App Preview Mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 blur-3xl opacity-20 rounded-full"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl flex items-center justify-center">
                <Camera className="w-24 h-24 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Como Funciona?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Basta tirar uma foto de sua refeição, e o CaloriSnap retorna instantaneamente as calorias e informações nutricionais. É simples, rápido e ideal para quem quer emagrecer sem complicação!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. Tire uma Foto
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Aponte a câmera para sua refeição e capture em segundos
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. IA Analisa
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa inteligência artificial processa e identifica os alimentos
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. Receba Resultados
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Veja calorias, proteínas, carboidratos e gorduras instantaneamente
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Benefícios do CaloriSnap
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Rastreamento Inteligente
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Capture suas refeições em segundos e receba dados precisos sobre calorias
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Vasta Biblioteca de Alimentos
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Milhares de alimentos no nosso banco de dados, garantindo informações atualizadas
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Relatórios de Progresso
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Acompanhe sua evolução ao longo do tempo com gráficos intuitivos e motivadores
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Análise Nutricional Detalhada
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Entenda a composição das suas refeições: proteínas, carboidratos e gorduras
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Meta de Calorias
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Defina metas personalizadas e encontre o equilíbrio ideal para emagrecer
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Comunidade de Apoio
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Compartilhe experiências e conquistas com outros usuários que buscam emagrecer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experimente de Graça!
          </h2>
          <p className="text-lg md:text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Baixe agora o CaloriSnap e aproveite um período de testes gratuito. Dê o primeiro passo para uma vida mais saudável com um app que entrega resultados!
          </p>
          <Button 
            size="lg" 
            onClick={handlePixPayment}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Camera className="w-5 h-5 mr-2" />
            Começar Agora - 7 Dias Grátis
          </Button>
          <p className="text-emerald-100 mt-4 text-sm">
            Sem compromisso • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-sm">
          © 2024 CaloriSnap. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
