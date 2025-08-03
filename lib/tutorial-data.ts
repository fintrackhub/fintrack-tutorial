// Dados dos tutoriais - fácil de modificar
export const TUTORIAL_DATA: Record<
  string,
  Array<{
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    cardImageUrl?: string // Caminho para a imagem do card/tela do app
  }>
> = {
  itau: [
    {
      title: "Acesse sua conta corrente",
      description: "Após acessar seu aplicativo, **clique em Conta corrente**",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Tela inicial do aplicativo Itaú",
      cardImageUrl: "/assets/itau/step-01.png", // Caminho para sua imagem
    },
    {
      title: "Navegue pelo menu",
      description: "Clique no **botão de download** ao lado de **Lançamentos**",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Menu do aplicativo Itaú",
      cardImageUrl: "/assets/itau/step-02.png", // Caminho para sua imagem
    },
    {
      title: "Selecione o período",
      description: "Selecione o período que deseja exportar o extrato e clique no botão **Gerar Extrato**",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Seleção de período no Itaú",
      cardImageUrl: "/assets/itau/step-03.png", // Caminho para sua imagem
    },
    {
      title: "Exporte o arquivo",
      description: "Abra o arquivo pelo **Samsung Notes**. Em seguida, clique nos 3 pontos e em **Salv. como arq.**",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Opções de exportação do Itaú",
      cardImageUrl: "/assets/itau/step-04.png", // Caminho para sua imagem
    },
  ],
  nubank: [
    {
      title: "Acesse sua conta",
      description: "Na tela principal, **toque em sua conta corrent ae**",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Tela inicial do aplicativo Nubank",
      cardImageUrl: "/assets/nubank/step1.png", // Caminho para sua imagem
    },
    {
      title: "Visualize o extrato",
      description: "**Deslize para baixo** para ver suas movimentações",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Extrato do Nubank",
      cardImageUrl: "/assets/nubank/step2.png", // Caminho para sua imagem
    },
    {
      title: "Acesse configurações",
      description: "Toque nos **três pontos** no canto superior direito",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Menu de configurações do Nubank",
      cardImageUrl: "/assets/nubank/step2.png", // Caminho para sua imagem
    },
    {
      title: "Exporte o extrato",
      description: "Selecione a opção **'Exportar extrato'** e escolha o período",
      imageUrl: "/placeholder.svg?height=600&width=400",
      imageAlt: "Exportação de extrato do Nubank",
      cardImageUrl: "/assets/nubank/step3.png", // Caminho para sua imagem
    },
  ],
}
