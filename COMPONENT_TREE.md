# Árvore de Componentes - Turnus SPA

## 🌳 Hierarquia Visual

```
app/page.tsx (TurnusSPA)
│
├── 🎨 Global Styles
│   ├── Font Imports (DM Sans, DM Serif Display)
│   ├── .font-serif-brand
│   ├── .font-sans-brand
│   ├── .glass-nav
│   └── .bento-card
│
├── 🧭 Navigation
│   ├── HourglassLogo
│   ├── Desktop Menu
│   │   ├── Link: Soluções
│   │   ├── Link: Funcionalidades
│   │   ├── Link: Planos
│   │   └── Button: Acessar Sistema
│   └── Mobile Menu Toggle
│
├── 🎯 Hero
│   ├── Badge: Nova versão
│   ├── Título Principal
│   ├── Descrição
│   └── CTAs
│       ├── Button: Agendar Demonstração
│       └── Button: Ver Tour
│
├── ⚡ Features (Bento Grid)
│   ├── Card 1: Escala Inteligente (Large)
│   │   ├── HourglassLogo (decorativo)
│   │   ├── Icon: Zap
│   │   └── Progress Card
│   ├── Card 2: Compliance (Dark)
│   │   └── Icon: Shield
│   ├── Card 3: Financeiro (Mint)
│   │   └── Icon: TrendingUp
│   ├── Card 4: App Nativo (Tall)
│   │   └── Phone Mockup
│   │       ├── Header
│   │       └── Content Cards
│   └── Card 5: Trocas (Wide)
│       └── Avatar Stack
│
├── 💬 Testimonials
│   ├── Header
│   │   ├── Icon: MessageSquareQuote
│   │   └── Rating: 4.9/5 Stars
│   └── Grid de 3 Depoimentos
│       ├── Testimonial 1 (Light)
│       ├── Testimonial 2 (Dark - Featured)
│       └── Testimonial 3 (Light)
│
├── 💰 Pricing
│   ├── Header
│   ├── Toggle: Mensal/Anual
│   └── Grid de 3 Planos
│       ├── Plan 1: Turnus Start
│       │   ├── Features List
│       │   └── CTA Button
│       ├── Plan 2: Turnus Pro (Featured)
│       │   ├── Badge: Mais Escolhido
│       │   ├── Features List
│       │   └── CTA Button
│       └── Plan 3: Turnus Corp
│           ├── Features List
│           └── CTA Button
│
├── 📣 CTA
│   ├── Título
│   ├── Descrição
│   └── Buttons
│       ├── Button: Começar Agora
│       └── Button: Falar com Especialista
│
└── 🔗 Footer
    ├── Brand Section
    │   ├── HourglassLogo
    │   └── Tagline
    ├── Links Grid
    │   ├── Produto
    │   ├── Empresa
    │   └── Legal
    └── Bottom Bar
        ├── Copyright
        └── VOID Signature
```

## 📦 Dependências entre Componentes

```
HourglassLogo (Shared)
    ↓
├── Navigation
├── Features
└── Footer

Navigation ← page.tsx (state: isScrolled, mobileMenuOpen)
Pricing ← page.tsx (state: annualBilling)

Hero (standalone)
Features (standalone)
Testimonials (standalone)
CTA (standalone)
Footer (standalone)
```

## 🔄 Fluxo de Estado

```
page.tsx (Parent)
│
├── State: isScrolled
│   └── → Navigation
│
├── State: mobileMenuOpen
│   └── → Navigation
│
└── State: annualBilling
    └── → Pricing
```

## 📊 Tamanho dos Componentes

| Componente    | Linhas | Complexidade | Reutilizável |
| ------------- | ------ | ------------ | ------------ |
| HourglassLogo | 15     | Baixa        | ✅ Sim       |
| Navigation    | 68     | Média        | ✅ Sim       |
| Hero          | 42     | Baixa        | ⚠️ Parcial   |
| Features      | 136    | Alta         | ⚠️ Parcial   |
| Testimonials  | 86     | Média        | ✅ Sim       |
| Pricing       | 226    | Alta         | ✅ Sim       |
| CTA           | 20     | Baixa        | ⚠️ Parcial   |
| Footer        | 68     | Baixa        | ✅ Sim       |
| **page.tsx**  | **68** | **Baixa**    | -            |

## 🎨 Componentes por Categoria

### UI Base

- `HourglassLogo` - Logo SVG customizado

### Layout

- `Navigation` - Header fixo com scroll effect
- `Footer` - Rodapé com links

### Seções de Conteúdo

- `Hero` - Primeira dobra
- `Features` - Demonstração de funcionalidades
- `Testimonials` - Prova social
- `Pricing` - Conversão
- `CTA` - Fechamento

## 🚀 Ordem de Renderização

1. **Navigation** (Fixed, z-50)
2. **Hero** (pt-32 para compensar nav)
3. **Features** (bg-white)
4. **Testimonials** (bg-white, bordered)
5. **Pricing** (bg-dark)
6. **CTA** (bg-light)
7. **Footer** (bg-dark)

---

_Estrutura otimizada para manutenção e escalabilidade_
