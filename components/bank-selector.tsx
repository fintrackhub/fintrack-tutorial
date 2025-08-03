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

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        {/* Logo */}
        <div className="mb-16">
          <svg width="80" height="80" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="69.5" cy="69.5" r="69.5" fill="#E8E6F5"/>
            <path d="M89.5647 24.8996L89.5647 63.0619L50.0166 63.0619V51.4426L89.5647 24.8996Z" fill="#3C75D8"/>
            <path d="M89.5649 69.8983L89.5649 114.573L50.0168 114.573L50.0168 69.8983H89.5649Z" fill="#2A2739"/>
          </svg>
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
