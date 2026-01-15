# Loan Program Template

Use this template to add new loan programs to the Loan Programs page (`/components/LoanPrograms.tsx`).

---

## Template Structure

Copy the section below and fill in your details, then add it to the `loanPrograms` array in `/components/LoanPrograms.tsx`.

```typescript
{
  id: [NEXT_SEQUENTIAL_NUMBER],
  title: "[PROGRAM_NAME]",
  icon: <[ICON_NAME] className="size-6 text-white" />,
  description: "[SHORT_DESCRIPTION_ONE_SENTENCE]",
  features: [
    "[FEATURE_1]",
    "[FEATURE_2]",
    "[FEATURE_3]",
    "[FEATURE_4]"
  ],
  idealFor: [
    "[TARGET_AUDIENCE_1]",
    "[TARGET_AUDIENCE_2]",
    "[TARGET_AUDIENCE_3]",
    "[TARGET_AUDIENCE_4]"
  ]
}
```

---

## Field Descriptions

### 1. **id** (number)
- The unique identifier for the program
- Use the next sequential number (currently 7 for the next program)
- Example: `7`, `8`, `9`, etc.

### 2. **title** (string)
- The name/header of the loan program
- Keep it concise and descriptive
- Example: `"Bank Statement Loans"`, `"DSCR Loans"`, `"VA Loans"`

### 3. **icon** (React Component)
- The icon displayed in the card header
- Available icons from `lucide-react`:
  - `Home` - House/residential properties
  - `Building2` - Commercial/investment properties
  - `FileText` - Documentation/paperwork
  - `DollarSign` - Money/financial
  - `TrendingUp` - Growth/investment
  - `Users` - Groups/communities
  - `Calculator` - Calculations
  - `Briefcase` - Business/professional
  - `Key` - Access/ownership
  - `Shield` - Protection/security
  - `Globe` - International/global
  - `Zap` - Fast/quick
- Format: `<IconName className="size-6 text-white" />`
- **Important**: Make sure to import any new icons at the top of the file:
  ```typescript
  import { ArrowLeft, CheckCircle2, DollarSign, Home, TrendingUp, Building2, Users, FileText, [YOUR_NEW_ICON] } from "lucide-react";
  ```

### 4. **description** (string)
- A brief one-sentence description that appears in the card header
- Keep it under 100 characters for best display
- Should quickly convey the main benefit or purpose
- Example: `"Perfect for self-employed borrowers who can't provide traditional income documentation."`

### 5. **features** (array of strings)
- 4 key features of the loan program
- These appear as bulleted items with checkmark icons
- Keep each feature concise (ideally under 30 characters)
- Focus on specific benefits, requirements, or capabilities
- Examples:
  - `"12 or 24-month bank statements"`
  - `"No tax returns required"`
  - `"Up to 90% LTV available"`
  - `"Purchase or refinance"`

### 6. **idealFor** (array of strings)
- 4 types of borrowers or situations this program is ideal for
- These appear in the expandable section when users click the card
- Keep each item concise (ideally under 30 characters)
- Focus on specific audiences or use cases
- Examples:
  - `"Self-employed professionals"`
  - `"Business owners"`
  - `"Freelancers and contractors"`
  - `"Commission-based income"`

---

## Example: Complete Loan Program Entry

```typescript
{
  id: 7,
  title: "FHA Loans",
  icon: <Shield className="size-6 text-white" />,
  description: "Government-backed loans for first-time buyers with flexible credit requirements.",
  features: [
    "As low as 3.5% down payment",
    "Credit scores from 580",
    "Seller concessions allowed",
    "Gift funds permitted"
  ],
  idealFor: [
    "First-time home buyers",
    "Low-to-moderate income families",
    "Buyers with limited savings",
    "Those rebuilding credit"
  ]
}
```

---

## Step-by-Step Instructions

### Adding a New Loan Program:

1. **Open** `/components/LoanPrograms.tsx`

2. **Locate** the `loanPrograms` array (starts around line 21)

3. **Find** the last program entry (currently "Portfolio Loans" with `id: 6`)

4. **Add a comma** after the closing brace `}` of the last entry

5. **Paste** your new program entry using the template above

6. **If using a new icon**, add it to the import statement at the top:
   ```typescript
   import { ArrowLeft, CheckCircle2, DollarSign, Home, TrendingUp, Building2, Users, FileText, Shield } from "lucide-react";
   ```

7. **Save** the file - the page will automatically update!

---

## Available Icons Reference

Here are the most commonly used icons for loan programs:

| Icon Name | Best For | Visual |
|-----------|----------|--------|
| `Home` | Residential loans, primary homes | 🏠 |
| `HousePlus` | New home purchases, first-time buyers | 🏠+ |
| `Building2` | Multi-unit, investment properties | 🏢 |
| `Building` | Commercial properties, business | 🏢 |
| `Hotel` | Hospitality, short-term rentals | 🏨 |
| `Warehouse` | Industrial, storage properties | 🏭 |
| `FileText` | Documentation-based programs | 📄 |
| `DollarSign` | Financial, cash-related | 💲 |
| `CircleDollarSign` | Money, financing, cash programs | 💲⭕ |
| `BadgeDollarSign` | Premium financing, certified programs | 💲🏅 |
| `CirclePercent` | Interest rates, APR, percentages | ⭕% |
| `TrendingUp` | Investment, growth, jumbo | 📈 |
| `Users` | Community, groups, portfolios | 👥 |
| `Shield` | Government-backed, protected | 🛡️ |
| `Key` | New homeownership, access | 🔑 |
| `HeartHandshake` | Care, trust, relationship-based | 🤝❤️ |
| `Fingerprint` | Identity, unique situations | 👆 |
| `Briefcase` | Business, professional | 💼 |
| `Globe` | Foreign nationals, international | 🌍 |
| `Calculator` | Complex calculations, custom | 🧮 |
| `CircleGauge` | Performance, metrics, scoring | 📊 |
| `Gauge` | Credit scores, ratings, assessment | 📊 |
| `Box` | Package deals, bundled products | 📦 |
| `Boxes` | Multiple products, portfolios | 📦📦 |
| `Brain` | Smart solutions, AI-powered | 🧠 |
| `BrainCircuit` | Tech-driven, innovative | 🧠⚡ |
| `Zap` | Fast approval, quick process | ⚡ |

Browse more icons at: https://lucide.dev/icons/

---

## Tips for Writing Great Content

### Title
- Keep it under 25 characters
- Use official industry terms when possible
- Be specific and clear

### Description
- One clear sentence
- Focus on the main benefit
- Answer "Why would someone want this?"

### Features
- Start with numbers when relevant ("Up to 90% LTV")
- Use action words
- Be specific, avoid vague terms
- Highlight what makes this unique

### Ideal For
- Think about specific personas
- Use job titles or life situations
- Make it relatable
- Help users self-identify

---

## Need Help?

If you need assistance or want to verify your entry before adding it, feel free to ask!