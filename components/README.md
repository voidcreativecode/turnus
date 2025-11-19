# Turnus SPA - Componentes

Esta pasta contém todos os componentes modulares da landing page do Turnus.

## Estrutura de Componentes

### 🎨 Componentes de UI Base

- **`HourglassLogo.tsx`** - Logo da marca Turnus (ampulheta customizada)

### 📐 Componentes de Layout

- **`Navigation.tsx`** - Barra de navegação com scroll effect

  - Props: `isScrolled`, `mobileMenuOpen`, `setMobileMenuOpen`
  - Responsivo com menu mobile

- **`Footer.tsx`** - Rodapé com links e assinatura VOID
  - Inclui links para produto, empresa e legal
  - Assinatura da software house

### 🎯 Seções da Landing Page

- **`Hero.tsx`** - Seção hero principal

  - Título, subtítulo e CTAs principais
  - Efeitos de blur decorativos

- **`Features.tsx`** - Grade Bento com funcionalidades

  - Layout em grid responsivo
  - Cards interativos com hover effects
  - Mockup de app mobile

- **`Testimonials.tsx`** - Depoimentos de clientes

  - 3 cards de depoimentos
  - Rating de satisfação
  - Variações de estilo

- **`Pricing.tsx`** - Tabela de preços

  - Props: `annualBilling`, `setAnnualBilling`
  - 3 planos: Start, Pro (featured), Corp
  - Toggle mensal/anual com desconto

- **`CTA.tsx`** - Call-to-action final
  - Botões de conversão
  - Mensagem de fechamento

## Uso

```tsx
import { Navigation, Hero, Features } from "@/components";

// Ou importação individual
import { Navigation } from "@/components/Navigation";
```

## Paleta de Cores

```tsx
const colors = {
  dark: "#3B3B3B",
  grey: "#4A5568",
  mint: "#C3FFD4",
  cyan: "#B5FFFF",
  softBlue: "#839CC7",
  white: "#FFFFFF",
};
```

## Tipografia

- **Serif**: DM Serif Display (títulos)
- **Sans**: DM Sans (corpo de texto)

## Notas Técnicas

- Todos os componentes são client-side quando necessário
- Utiliza Lucide React para ícones
- TailwindCSS para estilização
- Componentes totalmente responsivos
