"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, X } from "lucide-react"
import Image from "next/image"

interface FileUploadProps {
  onBackToStart: () => void
  onComplete: () => void
}

export default function FileUpload({ onBackToStart, onComplete }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setIsUploaded(false)

      // Criar preview se for imagem
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      } else {
        setPreviewUrl(null)
      }
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setIsUploaded(false)
    // Limpar o input
    const input = document.getElementById("file-upload") as HTMLInputElement
    if (input) input.value = ""
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Simular upload
      setTimeout(() => {
        setIsUploaded(true)
      }, 1000)
    } else {
      // Se não há arquivo selecionado, abrir o seletor
      document.getElementById("file-upload")?.click()
    }
  }

  const handleNext = () => {
    if (isUploaded) {
      onComplete()
    } else {
      handleUpload()
    }
  }

  const isImage = selectedFile?.type.startsWith("image/")

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
        {/* Número do step */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">05</div>
          <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Área de upload */}
        <div className="w-full max-w-sm mx-auto mb-8">
          <div
            className={`bg-gray-800 rounded-2xl text-center cursor-pointer hover:bg-gray-750 transition-colors border-2 border-dashed border-gray-600 hover:border-gray-500 ${
              selectedFile ? "p-4" : "p-12"
            }`}
            onClick={() => !selectedFile && document.getElementById("file-upload")?.click()}
          >
            {selectedFile ? (
              <div className="space-y-4">
                {/* Preview da imagem ou ícone do arquivo */}
                {isImage && previewUrl ? (
                  <div className="relative">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview do arquivo"
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveFile()
                      }}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                    <div className="flex-1 text-left">
                      <div className="text-sm text-gray-300 truncate">{selectedFile.name}</div>
                      <div className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveFile()
                      }}
                      className="ml-2 text-red-400 hover:text-red-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {isUploaded && <div className="text-green-400 text-sm">✓ Upload feito</div>}
              </div>
            ) : (
              <>
                <div className="text-gray-300 text-lg mb-4">Carregar arquivo</div>
                <Download className="w-8 h-8 text-blue-500 mx-auto" />
              </>
            )}
          </div>

          <input
            id="file-upload"
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          />
        </div>

        {/* Texto instrucional */}
        <div className="text-center mb-8 max-w-sm">
          <p className="text-gray-300 text-lg leading-relaxed">
            Para finalizar, clique no box acima e importe o arquivo PDF baixado no nosso site
          </p>
        </div>

        {/* Indicadores de progresso */}
        <div className="flex space-x-3 mb-8">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index === 4 ? "bg-blue-500" : "bg-gray-600"}`} />
          ))}
        </div>

        {/* Botão Próximo */}
        <div className="w-full max-w-sm">
          <Button
            onClick={handleNext}
            disabled={!selectedFile}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 text-lg font-medium rounded-lg"
          >
            {isUploaded ? "Finalizar" : "Próximo"}
          </Button>
        </div>
      </div>
    </div>
  )
}
