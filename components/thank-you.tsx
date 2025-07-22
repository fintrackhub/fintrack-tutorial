"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Star } from "lucide-react"

interface ThankYouProps {
  onBackToStart: () => void
}

export default function ThankYou({ onBackToStart }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBackToStart} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-xl font-medium">
          <span className="text-white">Fin</span>
          <span className="text-blue-500">Track</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Número final */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">06</div>
          <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Ícone de sucesso */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Mensagem de agradecimento */}
        <div className="text-center mb-12 max-w-sm">
          <h1 className="text-2xl font-bold text-white mb-4">Parabéns! 🎉</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Você completou com sucesso o tutorial. Lembrando que nenhum arquivo seu foi salvo.
          </p>
        </div>


        {/* Indicadores de progresso - todos preenchidos */}
        <div className="flex space-x-3 mb-8">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-blue-500" />
          ))}
        </div>

        {/* Botões de ação */}
        <div className="w-full max-w-sm space-y-4">
          <Button
            onClick={onBackToStart}
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 py-4 text-lg font-medium rounded-lg bg-transparent"
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  )
}
