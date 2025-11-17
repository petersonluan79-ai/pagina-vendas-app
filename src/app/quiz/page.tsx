"use client";

import { useState } from "react";
import { Camera, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Answer = "A" | "B" | "C" | null;

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([null, null, null, null, null]);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" });

  const questions = [
    {
      question: "Qual é o seu principal objetivo?",
      options: [
        { label: "A) Perder peso de forma saudável", value: "A" },
        { label: "B) Manter o peso atual", value: "B" },
        { label: "C) Ganhar massa muscular", value: "C" },
      ],
    },
    {
      question: "Com que frequência você se exercita?",
      options: [
        { label: "A) Diariamente", value: "A" },
        { label: "B) Algumas vezes por semana", value: "B" },
        { label: "C) Raramente ou nunca", value: "C" },
      ],
    },
    {
      question: "Como você costuma se alimentar?",
      options: [
        { label: "A) Refeições saudáveis e equilibradas", value: "A" },
        { label: "B) Uma mistura de alimentos saudáveis e não tão saudáveis", value: "B" },
        { label: "C) Tenho dificuldades para manter uma alimentação saudável", value: "C" },
      ],
    },
    {
      question: "Você já utilizou algum aplicativo para rastrear calorias?",
      options: [
        { label: "A) Sim, regularmente", value: "A" },
        { label: "B) Já usei, mas não consegui seguir", value: "B" },
        { label: "C) Nunca usei", value: "C" },
      ],
    },
    {
      question: "O que mais te motiva a emagrecer?",
      options: [
        { label: "A) Melhorar minha saúde", value: "A" },
        { label: "B) Sentir-me melhor comigo mesmo", value: "B" },
        { label: "C) Influência de amigos e família", value: "C" },
      ],
    },
  ];

  const handleAnswer = (questionIndex: number, answer: Answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else if (step === questions.length - 1) {
      setStep(questions.length); // Ir para resultados
    } else if (step === questions.length) {
      setStep(questions.length + 1); // Ir para formulário
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const calculateResult = () => {
    const countA = answers.filter((a) => a === "A").length;
    const countB = answers.filter((a) => a === "B").length;
    const countC = answers.filter((a) => a === "C").length;

    if (countA >= countB && countA >= countC) {
      return {
        title: "Você é disciplinado!",
        description: "Com o CaloriSnap, você pode monitorar suas calorias e alcançar resultados ainda mais rápidos.",
        type: "A",
      };
    } else if (countB >= countA && countB >= countC) {
      return {
        title: "Você está no caminho certo!",
        description: "O CaloriSnap te ajudará a encontrar um equilíbrio e facilitar seu rastreamento.",
        type: "B",
      };
    } else {
      return {
        title: "Você precisa de motivação!",
        description: "O CaloriSnap é perfeito para te guiar em sua jornada e tornar o processo mais divertido.",
        type: "C",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep(questions.length + 2); // Ir para página de agradecimento
  };

  const handleCopyPix = () => {
    const pixKey = "dcd7ac32-4f7e-46fa-b2e8-14f104492975";
    navigator.clipboard.writeText(pixKey);
    alert(
      `✅ Chave PIX copiada!\n\n${pixKey}\n\nAbra seu app de pagamento e cole a chave PIX para concluir sua assinatura do CaloriSnap!`
    );
  };

  const currentQuestion = questions[step];
  const result = calculateResult();
  const canProceed = step < questions.length ? answers[step] !== null : true;

  // Página de entrada
  if (step === -1 || step === 0 && answers[0] === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qual é o seu estilo de emagrecimento?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Responda a algumas perguntas e descubra como o CaloriSnap pode te ajudar a alcançar seus objetivos de forma prática e rápida!
            </p>
            <Button
              onClick={() => setStep(0)}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Começar Quiz
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Perguntas do quiz
  if (step < questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-emerald-600">
                Pergunta {step + 1} de {questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((step + 1) / questions.length) * 100)}% completo
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(step, option.value as Answer)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  answers[step] === option.value
                    ? "border-emerald-500 bg-emerald-50 shadow-lg"
                    : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-900">
                    {option.label}
                  </span>
                  {answers[step] === option.value && (
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {step > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 py-6 text-lg rounded-full"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Voltar
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === questions.length - 1 ? "Ver Resultado" : "Próxima"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Página de resultados
  if (step === questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aqui está o seu estilo de emagrecimento ideal!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Com base nas suas respostas, recomendamos o CaloriSnap, um app que se adapta ao seu estilo de vida e ao seu ritmo!
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border-2 border-emerald-200">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              {result.title}
            </h2>
            <p className="text-lg text-gray-700">
              {result.description}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <p className="text-center text-lg font-medium text-gray-900 mb-4">
              Baixe agora o CaloriSnap e comece sua jornada de emagrecimento de forma prática e inteligente!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex-1 py-6 text-lg rounded-full"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Refazer Quiz
            </Button>
            <Button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Continuar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Formulário de coleta
  if (step === questions.length + 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Receba seu plano personalizado!
            </h1>
            <p className="text-xl text-gray-600">
              Preencha seus dados para receber dicas exclusivas e começar sua jornada com o CaloriSnap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg font-medium text-gray-900 mb-2 block">
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-emerald-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-medium text-gray-900 mb-2 block">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-emerald-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-lg font-medium text-gray-900 mb-2 block">
                Número de Telefone (opcional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-emerald-500"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                className="flex-1 py-6 text-lg rounded-full"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Voltar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Receber meu plano personalizado!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Página de agradecimento
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Parabéns! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Você completou o quiz. Fique de olho no seu e-mail para dicas valiosas e promoções exclusivas sobre o CaloriSnap!
          </p>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border-2 border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Seu Resultado: {result.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {result.description}
            </p>
            <p className="text-md text-gray-600">
              📧 Enviamos um e-mail para <strong>{formData.email}</strong> com seu plano personalizado!
            </p>
          </div>

          <Button
            onClick={handleCopyPix}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
          >
            <Camera className="mr-2 w-5 h-5" />
            Experimentar CaloriSnap Grátis
          </Button>

          <Button
            onClick={() => window.location.href = "/"}
            variant="outline"
            className="w-full py-6 text-lg rounded-full"
          >
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
}
