This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









my-next-app/
├── node_modules/
├── public/                  # <== (1) เก็บไฟล์สาธารณะ (Public Assets)
│   └── images/              #     - ไฟล์ต่างๆ ที่นี่จะเข้าถึงได้โดยตรงผ่าน URL (เช่น /images/logo/logo.svg)
│       └── logo/            #     - เหมาะสำหรับเก็บ รูปภาพ, ไอคอน, Font หรือไฟล์ Static อื่นๆ
│           ├── logo.svg
│           ├── logo-dark.svg
│           └── logo-icon.svg
├── src/                     # <== (2) โฟลเดอร์หลักเก็บซอร์สโค้ด (Source Code Root)
│   ├── app/                 # <== (3) หัวใจหลักของ App Router (Routing & Layouts)
│   │   ├── (auth)/          #     - **Route Group:** สำหรับกลุ่มหน้าที่ไม่ต้องใช้ Layout หลัก (เช่น Login, Register)
│   │   │   ├── signin/
│   │   │   │   └── page.tsx   #       - UI สำหรับหน้า /signin (ดึงมาจาก features)
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   ├── (main)/          #     - **Route Group:** สำหรับกลุ่มหน้าหลักที่ใช้ Layout (Header/Sidebar)
│   │   │   ├── layout.tsx     #       - **Nested Layout:** กำหนด Layout เฉพาะกลุ่มนี้ (AppHeader + AppSidebar) **"use client"**
│   │   │   ├── page.tsx       #       - UI สำหรับหน้า / (ดึง DashboardPage)
│   │   │   ├── calendar/
│   │   │   │   └── page.tsx   #       - UI สำหรับหน้า /calendar
│   │   │   └── profile/
│   │   │       └── page.tsx   #       - UI สำหรับหน้า /profile
│   │   ├── api/             #     - **API Routes:** สำหรับสร้าง Backend Endpoints (เช่น /api/auth/...)
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts #       - NextAuth Handler (ใช้ route.ts)
│   │   ├── layout.tsx         #     - **Root Layout:** Layout ชั้นนอกสุด (<html>, <body>, Global Providers)
│   │   └── globals.css      #     - **Global Styles:** ไฟล์ CSS ที่ใช้ทั้งแอป (มัก import ที่ Root Layout)
│   │
│   ├── core/                # <== (4) ส่วนกลาง / ใช้ร่วมกัน (Core/Shared Module)
│   │   ├── components/      #     - **Shared Components:** UI ที่ใช้ซ้ำได้หลายที่
│   │   │   ├── common/      #       - Components ทั่วไป (Button, Input, ThemeToggleButton)
│   │   │   ├── icons/       #       - SVG Icons ที่แปลงเป็น React Components
│   │   │   └── layout/      #       - Components เฉพาะสำหรับ Layout (AppHeader, AppSidebar) **"use client"**
│   │   ├── constants/       #     - **Shared Constants:** ค่าคงที่กลาง (API URLs, Route Paths)
│   │   ├── context/         #     - **Shared Context:** Global State Management (SidebarContext) **"use client"**
│   │   ├── hooks/           #     - **Shared Hooks:** Custom Hooks ที่ใช้ซ้ำ (useDebounce)
│   │   ├── services/        #     - **Shared Services:** ตั้งค่า Library/Clients (Apollo Client)
│   │   └── utils/           #     - **Shared Utilities:** ฟังก์ชันช่วยเหลือทั่วไป (formatDate)
│   │
│   ├── features/            # <== (5) ศูนย์รวม Feature ต่างๆ (Feature Modules)
│   │   ├── dashboard/       #     - **Feature Module:** แต่ละโฟลเดอร์คือ 1 หน่วยธุรกิจ/ฟังก์ชัน
│   │   │   ├── constants/   #       - ค่าคงที่เฉพาะ Feature นี้
│   │   │   ├── view/        #       - **(V) View:** ส่วนแสดงผล UI (React Components) เช่น `DashboardPage.tsx`
│   │   │   ├── viewmodel/   #       - **(VM) ViewModel:** Logic & State ของ View (เช่น `useDashboardViewModel.ts`)
│   │   │   └── model/       #       - **(M) Model:** Data & Business Logic (GraphQL Calls, types.ts)
│   │   └── # ... (Features อื่นๆ ตามโครงสร้าง V, VM, M)
│   │
│   ├── graphql/             # <== (6) คลังเก็บ GraphQL Operations
│   │   ├── queries/         #     - **Queries:** เก็บ GraphQL Queries
│   │   ├── mutations/       #     - **Mutations:** เก็บ GraphQL Mutations
│   │   └── fragments/       #     - **Fragments:** (ถ้ามี) เก็บส่วนย่อยของ Query ที่ใช้ซ้ำ
│   │
│   └── types/               # <== (7) คลังเก็บ TypeScript Definitions กลาง
│       └── svg.d.ts         #     - **Declaration File:** ไฟล์ประกาศ Type (เช่น .svg)
│
├── .eslintrc.json           # <== (8) การตั้งค่า ESLint (Code Linter)
├── .gitignore               # <== (8) ไฟล์/โฟลเดอร์ ที่ไม่ต้องเก็บใน Git
├── next.config.mjs          # <== (8) การตั้งค่าหลักของ Next.js
├── package.json             # <== (8) รายการ Dependencies และ Scripts
└── tsconfig.json            # <== (8) การตั้งค่า TypeScript Compiler