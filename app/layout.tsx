import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '```json
[
  {
    "title": "Text Extraction for Social Media Insights",
    "description": "أداة تستخدم تقنية OCR لاستخراج النصوص من لقطات الشاشة للمنشورات والتعليقات على وسائل التواصل الاجتماعي، مما يساعد الشركات على تحليل ردود الفعل والمشاعر.",
    "mvp_plan": "إنشاء واجهة بسيطة لتحميل لقطات الشاشة، واستخدام مكتبة OCR لاستخراج النصوص، ثم تحليل النصوص باستخدام أدوات تحليل المشاعر. يمكن استخدام مكتبة مثل Tesseract لـ OCR وNLTK لتحليل المشاعر."
  },
  {
    "title": "Smart Recipe Generator from Food Photos",
    "description": "أداة تستخدم OCR لاستخراج النصوص من لقطات الشاشة لوصفات الطعام، وتحويلها إلى وصفات قابلة للتنفيذ مع مقادير دقيقة.",
    "mvp_plan": "تطوير واجهة لتحميل صور للوصفات، واستخدام OCR لاستخراج النصوص، ثم إنشاء خوارزمية بسيطة لتحويل النصوص إلى وصفات. يمكن البدء بمكتبة Tesseract لـ OCR وHTML/CSS لواجهة المستخدم."
  },
  {
    "title": "Digital Note Organizer",
    "description": "أداة لتحويل لقطات الشاشة من الملاحظات المكتوبة بخط اليد إلى نصوص رقمية منظمة، مما يسهل عملية البحث والتنظيم.",
    "mvp_plan": "إنشاء واجهة لتحميل لقطات الشاشة للملاحظات، واستخدام OCR لاستخراج النصوص، ثم تنظيم النصوص في قاعدة بيانات بسيطة. يمكن استخدام Tesseract لـ OCR وSQLite لتخزين البيانات."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}