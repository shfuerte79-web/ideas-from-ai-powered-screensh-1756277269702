export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}