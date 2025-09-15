import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary arabic-title">
              الشروط والأحكام
            </h1>
            <p className="text-lg text-muted-foreground arabic-body">
              جمعية العديلية التعاونية
            </p>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="space-y-6 arabic-body text-right">
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">مقدمة</h2>
                <p className="leading-relaxed">
                  مرحباً بكم في تطبيق جمعية العديلية التعاونية. باستخدامك لهذا التطبيق، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                  يرجى قراءة هذه الشروط بعناية قبل استخدام التطبيق.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">تعريفات</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li><strong>الجمعية:</strong> جمعية العديلية التعاونية</li>
                  <li><strong>التطبيق:</strong> تطبيق جمعية العديلية التعاونية للهواتف الذكية</li>
                  <li><strong>المستخدم:</strong> أي شخص يستخدم التطبيق</li>
                  <li><strong>العضو:</strong> العضو المسجل رسمياً في الجمعية</li>
                  <li><strong>الخدمات:</strong> جميع الخدمات المتاحة عبر التطبيق</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">شروط الاستخدام</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>يجب أن تكون عضواً مسجلاً في الجمعية لاستخدام بعض الخدمات</li>
                  <li>يجب تقديم معلومات صحيحة ودقيقة عند التسجيل</li>
                  <li>المحافظة على سرية كلمة المرور وبيانات الحساب</li>
                  <li>عدم استخدام التطبيق لأغراض غير قانونية أو ضارة</li>
                  <li>احترام حقوق المستخدمين الآخرين</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">الخدمات المتاحة</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تصفح المنتجات والخدمات</li>
                  <li>إجراء الطلبات والمعاملات</li>
                  <li>متابعة حالة الطلبات</li>
                  <li>الوصول لمعلومات العضوية</li>
                  <li>تلقي الإشعارات والعروض الخاصة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">التزامات المستخدم</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>الاستخدام المسؤول للتطبيق</li>
                  <li>عدم محاولة اختراق أو إلحاق الضرر بالنظام</li>
                  <li>احترام حقوق الملكية الفكرية</li>
                  <li>الإبلاغ عن أي مشاكل أو أخطاء في التطبيق</li>
                  <li>عدم مشاركة المحتوى غير المناسب</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">السياسة المالية</h2>
                <p className="leading-relaxed mb-3">
                  جميع المعاملات المالية تتم وفقاً للأنظمة والقوانين المعمول بها في دولة الكويت:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>جميع الأسعار معروضة بالدينار الكويتي</li>
                  <li>يتم تأكيد الطلبات قبل الدفع</li>
                  <li>حق الإرجاع وفقاً لسياسة الجمعية</li>
                  <li>رسوم التوصيل حسب المنطقة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">حقوق الملكية الفكرية</h2>
                <p className="leading-relaxed">
                  جميع المحتويات والتصاميم والعلامات التجارية في التطبيق مملوكة لجمعية العديلية التعاونية. 
                  يُمنع استخدامها دون إذن كتابي مسبق.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">المسؤولية والضمان</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>نسعى لتوفير خدمة موثوقة ولكن لا نضمن عدم انقطاعها</li>
                  <li>غير مسؤولين عن الأضرار الناتجة عن سوء الاستخدام</li>
                  <li>نحتفظ بالحق في تعديل أو إيقاف الخدمات</li>
                  <li>المسؤولية محدودة وفقاً للقانون الكويتي</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">الإنهاء والتعليق</h2>
                <p className="leading-relaxed">
                  نحتفظ بالحق في تعليق أو إنهاء حسابك في حالة مخالفة هذه الشروط. 
                  يمكنك أيضاً إلغاء حسابك في أي وقت.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">القانون الحاكم</h2>
                <p className="leading-relaxed">
                  تخضع هذه الشروط لقوانين دولة الكويت، وأي نزاع يُحال إلى المحاكم الكويتية المختصة.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">التعديلات</h2>
                <p className="leading-relaxed">
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بالتغييرات الجوهرية عبر التطبيق.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary mb-3">التواصل</h2>
                <p className="leading-relaxed">
                  لأي استفسارات حول الشروط والأحكام:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p><strong>جمعية العديلية التعاونية</strong></p>
                  <p>الكويت - العديلية</p>
                  <p>البريد الإلكتروني: info@adailiya-coop.com</p>
                  <p>الهاتف: +965 XXXX XXXX</p>
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

export default Terms;