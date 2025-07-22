"use client"

import { useState } from "react"
import BankSelector from "@/components/bank-selector"
import Tutorial from "@/components/tutorial"
import FileUpload from "@/components/file-upload"
import ThankYou from "@/components/thank-you"

export default function TutorialApp() {
  const [selectedBank, setSelectedBank] = useState<string | null>(null)
  const [showUpload, setShowUpload] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId)
    setShowUpload(false)
    setShowThankYou(false)
  }

  const handleTutorialComplete = () => {
    setShowUpload(true)
    setShowThankYou(false)
  }

  const handleUploadComplete = () => {
    setShowThankYou(true)
    setShowUpload(false)
  }

  const handleBackToStart = () => {
    setSelectedBank(null)
    setShowUpload(false)
    setShowThankYou(false)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-0">
        {!selectedBank ? (
          <BankSelector onBankSelect={handleBankSelect} />
        ) : showThankYou ? (
          <ThankYou onBackToStart={handleBackToStart} />
        ) : showUpload ? (
          <div className="px-0">
            <FileUpload onBackToStart={handleBackToStart} onComplete={handleUploadComplete} />
          </div>
        ) : (
          <div className="px-4 py-8">
            <Tutorial bankId={selectedBank} onComplete={handleTutorialComplete} onBack={handleBackToStart} />
          </div>
        )}
      </div>
    </div>
  )
}
