"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BankSelectorProps {
  onBankSelect: (bankId: string) => void
}

const BANKS = [
  { id: "itau", name: "Itaú" },
  { id: "nubank", name: "Nubank" },
]

export default function BankSelector({ onBankSelect }: BankSelectorProps) {
  const [selectedBank, setSelectedBank] = useState("itau")

  const handleNext = () => {
    if (selectedBank) {
      onBankSelect(selectedBank)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header com seta de voltar */}
      <div className="p-4">
        <ArrowLeft className="w-6 h-6 text-white" />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        {/* Logo */}
        <div className="mb-16">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 relative">
              <div className="w-4 h-4 bg-blue-500 rounded-tl-lg absolute top-0 left-0"></div>
              <div className="w-4 h-4 bg-gray-800 rounded-br-lg absolute bottom-0 right-0"></div>
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-normal mb-12 text-center">Qual banco deseja usar?</h1>

        {/* Opções de banco */}
        <div className="w-full max-w-sm space-y-6 mb-16">
          {BANKS.map((bank) => (
            <label
              key={bank.id}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setSelectedBank(bank.id)}
            >
              <div className="relative">
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedBank === bank.id ? "border-blue-500 bg-blue-500" : "border-gray-400 bg-transparent"
                  }`}
                >
                  {selectedBank === bank.id && (
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </div>
              </div>
              <span className="text-lg text-gray-300">{bank.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <div className="p-6">
        <Button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium rounded-lg"
          disabled={!selectedBank}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}
