"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import TutorialStep from "@/components/tutorial-step"
import FinTrackLogo from "@/components/fintrack-logo"
import { TUTORIAL_DATA } from "@/lib/tutorial-data"

interface TutorialProps {
  bankId: string
  onComplete: () => void
  onBack: () => void
}

export default function Tutorial({ bankId, onComplete, onBack }: TutorialProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const tutorialSteps = TUTORIAL_DATA[bankId] || []
  const totalSteps = tutorialSteps.length

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  if (!tutorialSteps.length) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p>Tutorial não encontrado para este banco.</p>
          <Button onClick={onBack} className="mt-4">
            Voltar
          </Button>
        </div>
      </div>
    )
  }

  const currentStepData = tutorialSteps[currentStep]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <FinTrackLogo width={140} height={24} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Número do step */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">{String(currentStep + 1).padStart(2, "0")}</div>
          <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Tutorial Step */}
        <TutorialStep
          step={currentStepData}
          stepNumber={currentStep + 1}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentStep === 0}
          isLast={currentStep === totalSteps - 1}
        />

        {/* Indicadores de progresso */}
        <div className="flex space-x-3 mb-8 mt-8">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentStep ? "bg-blue-500" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
