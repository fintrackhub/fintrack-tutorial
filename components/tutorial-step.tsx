"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TutorialStepProps {
  step: {
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    cardImageUrl?: string
  }
  stepNumber: number
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
}

export default function TutorialStep({ step, stepNumber, onNext, onPrevious, isFirst, isLast }: TutorialStepProps) {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Imagem do card/tela do app */}
      <div className="mb-8">
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={step.cardImageUrl || "/placeholder.svg?height=400&width=300&text=Card+Image"}
            alt={`Tela do aplicativo - Etapa ${stepNumber}`}
            width={360}
            height={220}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Texto instrucional */}
      <div className="text-center mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          {step.description.split("**").map((part, index) =>
            index % 2 === 1 ? (
              <span key={index} className="text-white font-semibold">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </div>

      {/* Botão para próxima etapa */}
      <div className="flex justify-center">
        <Button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium"
        >
          {isLast ? "Finalizar" : "Próximo"}
        </Button>
      </div>
    </div>
  )
}
