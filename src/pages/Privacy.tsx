import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary arabic-title">
              سياسة الخصوصية
            </h1>
            <p className="text-lg text-muted-foreground arabic-body">
              جمعية صباح الناصر التعاونية
            </p>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="space-y-6 arabic-body text-right">
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  المقدمة
                </h2>
                <p className="leading-relaxed">
                  تلتزم جمعية صباح الناصر التعاونية بحماية خصوصية مستخدمي
                  تطبيقنا وموقعنا الإلكتروني. توضح هذه السياسة كيفية جمع
                  واستخدام وحماية المعلومات الشخصية التي تقدمها لنا.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  المعلومات التي نجمعها
                </h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>معلومات التسجيل: الاسم، رقم الهاتف، البريد الإلكتروني</li>
                  <li>معلومات العضوية: رقم العضوية، تاريخ الانضمام</li>
                  <li>معلومات الاستخدام: تفاصيل المعاملات والطلبات</li>
                  <li>المعلومات التقنية: عنوان IP، نوع الجهاز، نظام التشغيل</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  كيفية استخدام المعلومات
                </h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تقديم خدمات الجمعية التعاونية</li>
                  <li>معالجة الطلبات والمعاملات</li>
                  <li>التواصل مع الأعضاء</li>
                  <li>تحسين جودة الخدمات</li>
                  <li>الامتثال للمتطلبات القانونية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  مشاركة المعلومات
                </h2>
                <p className="leading-relaxed">
                  لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات
                  التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
                  <li>بموافقتك الصريحة</li>
                  <li>للامتثال للقوانين واللوائح</li>
                  <li>مع مقدمي الخدمات المعتمدين لتشغيل التطبيق</li>
                  <li>في حالات الطوارئ لحماية سلامة المستخدمين</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  أمان المعلومات
                </h2>
                <p className="leading-relaxed">
                  نطبق إجراءات أمنية متقدمة لحماية معلوماتك، بما في ذلك التشفير
                  وأنظمة الحماية المتعددة الطبقات. نقوم بمراجعة وتحديث أنظمة
                  الأمان بانتظام.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  حقوقك
                </h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>الوصول إلى معلوماتك الشخصية</li>
                  <li>تصحيح أو تحديث المعلومات</li>
                  <li>حذف البيانات (في الحالات المسموحة قانونياً)</li>
                  <li>إيقاف استقبال الرسائل التسويقية</li>
                  <li>تقديم شكوى لدى الجهات المختصة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  ملفات تعريف الارتباط (Cookies)
                </h2>
                <p className="leading-relaxed">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل
                  استخدام الموقع. يمكنك إدارة إعدادات ملفات تعريف الارتباط من
                  خلال متصفحك.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  التحديثات على السياسة
                </h2>
                <p className="leading-relaxed">
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعارك بأي
                  تغييرات جوهرية عبر التطبيق أو البريد الإلكتروني.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  التواصل
                </h2>
                <p className="leading-relaxed">
                  لأي استفسارات حول الشروط والأحكام:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p>
                    <strong>جمعية صباح الناصر التعاونية</strong>
                  </p>
                  <p>الكويت - صباح الناصر</p>
                  <p>البريد الإلكتروني: info@sabahalnaser.com</p>
                  <p>
                    الهاتف:{" "}
                    <span
                      className="inline-block"
                      style={{ direction: "ltr", unicodeBidi: "embed" }}
                    >
                      +965 6040 1200
                    </span>
                  </p>
                  <p>ساعات العمل: 8:00 صباحاً - 10:00 مساءً</p>
                </div>
              </section>

              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  آخر تحديث: ديسمبر 2024
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
