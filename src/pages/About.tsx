import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cooperativeLogo from "@/assets/cooperative-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <img
              src={cooperativeLogo}
              alt="شعار جمعية ضاحية صباح الناصر التعاونية"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-primary mb-4 arabic-title">
              نبذة عن جمعية ضاحية صباح الناصر التعاونية
            </h1>
            <p className="text-xl text-muted-foreground arabic-body">
              1989 - 2025
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center arabic-title text-primary">
                تاريخ الجمعية
              </CardTitle>
            </CardHeader>
            <CardContent className="arabic-body text-lg leading-relaxed">
              <p className="mb-4">
                تم إشهار جمعية ضاحية صباح الناصر التعاونية سنة 1989 لتمارس
                نشاطها ضمن الأهداف التي أنشأت من أجلها وتخدم الجمعية منطقة ضاحية
                صباح الناصر.
              </p>
              <p>
                يوجد بها عدد (2) سوق مركزي بمركز الضاحية الرئيسي يعمل على مدار
                24 ساعة يومياً وعدد (12) فرع كأسواق مصغرة بكل قطعة سكنية.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center arabic-title text-primary">
                أهداف الجمعية
              </CardTitle>
            </CardHeader>
            <CardContent className="arabic-body text-lg">
              <p className="mb-6 leading-relaxed">
                تهدف الجمعية إلى الارتقاء بالمستوى الاقتصادي والاجتماعي لأعضائها
                عن طريق اتباع المبادئ التعاونية والسبيل إلى ذلك أن تقوم بما يلي:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="font-semibold">ترسيخ المفهوم التعاوني</h3>
                  </div>
                  <p className="text-muted-foreground mr-11">
                    ترسيخ المفهوم التعاوني لدى أعضائها
                  </p>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="font-semibold">توفير الخدمات والأنشطة</h3>
                  </div>
                  <p className="text-muted-foreground mr-11">
                    توفير الخدمات والأنشطة التي يحتاجها الأعضاء
                  </p>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="font-semibold">أسعار تعاونية</h3>
                  </div>
                  <p className="text-muted-foreground mr-11">
                    توفير السلع والاحتياجات بأسعار تعاونية
                  </p>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h3 className="font-semibold">الخدمات الاجتماعية</h3>
                  </div>
                  <p className="text-muted-foreground mr-11">
                    تقديم الخدمات الاجتماعية للمنطقة
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-lg arabic-body text-muted-foreground">
                مع تحيات / مجلس إدارة جمعية صباح الناصر التعاونية
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
