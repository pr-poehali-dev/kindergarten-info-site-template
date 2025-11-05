import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold font-heading">Воспитатель детского сада</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-accent transition-colors">О воспитателе</a>
            <a href="#program" className="hover:text-accent transition-colors">Программа</a>
            <a href="#schedule" className="hover:text-accent transition-colors">Расписание</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/9621ca31-1d25-4f28-a3ff-a449a594c4ce/files/fa2a29fe-ff6d-43c1-8157-5add06a48bbe.jpg" 
          alt="Детский сад" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl font-bold font-heading mb-4 animate-fade-in">Добро пожаловать!</h2>
          <p className="text-xl mb-8 animate-slide-up">Развиваем, обучаем и заботимся о ваших детях</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/ac878ccc-eb5e-4ce3-a6bd-d5915e31848d.jpg" 
                alt="Воспитатель" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6 text-primary">О воспитателе</h2>
              <p className="text-muted-foreground mb-4 text-lg">Здравствуйте! Меня зовут Ларина Рафаиловна, я работаю воспитателем детского сада №34 за моей спиной куча лет опыта и практики!</p>
              <p className="text-lg text-muted-foreground mb-4">
                Для меня каждый ребёнок — это уникальная личность с огромным потенциалом. Моя миссия — создать безопасную, 
                тёплую и развивающую среду, где дети учатся, играют и растут.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary flex items-center gap-2">
                  <Icon name="GraduationCap" size={24} />
                  Образование
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">ФГБОУ ВО "Уральский государственный педагогический университет"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Российский государственный профессионально-педагогический университет</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <Card className="flex-1">
                  <CardContent className="p-6 text-center">
                    <Icon name="GraduationCap" size={40} className="mx-auto mb-2 text-primary" />
                    <p className="font-semibold">15+ лет опыта</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={40} className="mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Высшая категория</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-primary">Образовательная программа</h2>
          <div className="grid md:grid-cols-3 gap-8 rounded-0 py-0 mx-0 px-[7px]">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="BookOpen" size={48} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-bold font-heading mb-3">Развитие речи</h3>
                <p className="text-muted-foreground">
                  Развиваем словарный запас, учим выражать мысли, читаем стихи и сказки.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Palette" size={48} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-bold font-heading mb-3">Творчество</h3>
                <p className="text-muted-foreground">
                  Рисование, лепка, аппликации — развиваем креативность и мелкую моторику.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Calculator" size={48} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-bold font-heading mb-3">Математика</h3>
                <p className="text-muted-foreground">
                  Знакомство с цифрами, формами, размерами через игру и практику.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Dumbbell" size={48} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-bold font-heading mb-3">Физкультура</h3>
                <p className="text-muted-foreground">
                  Подвижные игры, зарядка, развитие координации и выносливости.
                </p>
              </CardContent>
            </Card>
            
            <div className="md:col-start-2">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="Users" size={48} className="mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold font-heading mb-3">Социализация</h3>
                  <p className="text-muted-foreground">
                    Учим дружить, общаться, работать в команде и решать конфликты.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-primary">Режим дня</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  { time: "8:00 - 8:30", activity: "Приём детей, свободная игра" },
                  { time: "8:30 - 9:00", activity: "Утренняя зарядка, завтрак" },
                  { time: "9:00 - 10:00", activity: "Образовательная деятельность" },
                  { time: "10:00 - 10:30", activity: "Второй завтрак, подготовка к прогулке" },
                  { time: "10:30 - 12:00", activity: "Прогулка на свежем воздухе" },
                  { time: "12:00 - 12:30", activity: "Возвращение с прогулки, обед" },
                  { time: "12:30 - 15:00", activity: "Тихий час" },
                  { time: "15:00 - 15:30", activity: "Подъём, полдник" },
                  { time: "15:30 - 16:30", activity: "Игры, творческая деятельность" },
                  { time: "16:30 - 17:00", activity: "Ужин" },
                  { time: "17:00 - 18:00", activity: "Свободная игра, уход домой" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-center p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="font-semibold text-primary">{item.time}</span>
                    </div>
                    <span className="text-muted-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-primary">Наша жизнь в саду</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/ddf8bc21-3cdf-4dc9-b3e6-6c6205c832e8.png" 
                alt="Наша группа" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/4f2b202c-5517-4299-94e3-002d3ad1ac33.png" 
                alt="День России" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/a8d03dfa-d517-4f33-a1bd-b982fbc06da3.png" 
                alt="Творческие работы детей" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-primary">Контактная информация</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Электронная почта</p>
                      <a href="mailto:elena.petrova@kindergarten.ru" className="text-muted-foreground hover:text-primary">
                        elena.petrova@kindergarten.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Детская, д. 15, корп. 2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Время работы</p>
                      <p className="text-muted-foreground">
                        Пн-Пт: 8:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold font-heading mb-4">Записаться на встречу</h3>
                  <p className="text-muted-foreground mb-4">
                    Свяжитесь со мной, чтобы обсудить программу обучения и познакомиться с группой.
                  </p>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Написать сообщение
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} className="text-accent" />
            <p className="text-lg font-semibold">Воспитатель детского сада</p>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Елена Петровна. Создано с заботой о детях.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;