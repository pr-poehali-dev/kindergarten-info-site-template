import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl">Детский Мир</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">О себе</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#methods" className="hover:text-primary transition-colors">Методики</a>
              <a href="#parents" className="hover:text-primary transition-colors">Родителям</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-foreground">
                Добро пожаловать в мир детства
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональное воспитание и развитие вашего ребёнка в атмосфере любви и заботы
              </p>
              <Button size="lg" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <img 
                  src="https://cdn.poehali.dev/projects/9621ca31-1d25-4f28-a3ff-a449a594c4ce/files/d1806eda-359a-4289-ac94-ff257e3b3e1d.jpg" 
                  alt="Воспитатель" 
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading font-bold text-4xl mb-6 text-foreground">О себе</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Здравствуйте! Меня зовут Елена Иванова, и я воспитатель с 15-летним стажем работы с детьми дошкольного возраста.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Имею высшее педагогическое образование и регулярно повышаю квалификацию, изучая современные методики дошкольного образования.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Card className="flex-1 min-w-[150px] bg-primary/5 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Лет опыта</div>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 min-w-[150px] bg-secondary/5 border-secondary/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Детей</div>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 min-w-[150px] bg-accent/5 border-accent/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-accent mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Методик</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center text-foreground">Галерея</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "https://cdn.poehali.dev/projects/9621ca31-1d25-4f28-a3ff-a449a594c4ce/files/42667eca-0277-4ee7-a125-d20fa06bb0de.jpg",
                "https://cdn.poehali.dev/projects/9621ca31-1d25-4f28-a3ff-a449a594c4ce/files/c44e0508-61c8-4c4e-bf32-20d93dea37a7.jpg",
                "https://cdn.poehali.dev/projects/9621ca31-1d25-4f28-a3ff-a449a594c4ce/files/42667eca-0277-4ee7-a125-d20fa06bb0de.jpg"
              ].map((img, idx) => (
                <div key={idx} className="animate-fade-in group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img src={img} alt={`Галерея ${idx + 1}`} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-medium">Занятия с детьми</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center text-foreground">Расписание занятий</h2>
            <div className="space-y-4">
              {[
                { time: "09:00 - 09:30", activity: "Утренняя зарядка", icon: "Sun" },
                { time: "09:30 - 10:00", activity: "Завтрак", icon: "Coffee" },
                { time: "10:00 - 11:00", activity: "Развивающие занятия", icon: "BookOpen" },
                { time: "11:00 - 12:00", activity: "Прогулка", icon: "Trees" },
                { time: "12:00 - 13:00", activity: "Обед", icon: "Utensils" },
                { time: "13:00 - 15:00", activity: "Тихий час", icon: "Moon" },
                { time: "15:00 - 16:00", activity: "Творческие занятия", icon: "Palette" },
                { time: "16:00 - 17:00", activity: "Свободная игра", icon: "Gamepad2" }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-heading font-semibold text-lg">{item.activity}</div>
                      <div className="text-muted-foreground">{item.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="methods" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center text-foreground">Методики развития</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Методика Монтессори", desc: "Развитие самостоятельности и естественных способностей ребенка", icon: "Lightbulb" },
                { title: "Игровая методика", desc: "Обучение через игру и творческую деятельность", icon: "Gamepad2" },
                { title: "ТРИЗ-педагогика", desc: "Развитие творческого мышления и изобретательности", icon: "Sparkles" },
                { title: "Методика Никитиных", desc: "Физическое и интеллектуальное развитие", icon: "Trophy" },
                { title: "Вальдорфская педагогика", desc: "Гармоничное развитие личности ребенка", icon: "Heart" },
                { title: "Развитие эмоционального интеллекта", desc: "Понимание и управление эмоциями", icon: "Smile" }
              ].map((method, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Icon name={method.icon as any} className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{method.title}</h3>
                    <p className="text-muted-foreground">{method.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="parents" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center text-foreground">Родителям</h2>
            <Tabs defaultValue="tips" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tips">Советы</TabsTrigger>
                <TabsTrigger value="materials">Материалы</TabsTrigger>
                <TabsTrigger value="faq">Вопросы</TabsTrigger>
              </TabsList>
              <TabsContent value="tips" className="mt-8">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={24} />
                        Режим дня
                      </h3>
                      <p className="text-muted-foreground">
                        Соблюдение режима дня помогает ребенку чувствовать себя уверенно и спокойно. 
                        Старайтесь придерживаться одинакового расписания дома и в саду.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={24} />
                        Адаптация
                      </h3>
                      <p className="text-muted-foreground">
                        Период адаптации индивидуален для каждого ребенка. Будьте терпеливы и 
                        поддерживайте малыша в этот непростой период.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="materials" className="mt-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Развивающие игры для дома",
                    "Книги для чтения с детьми",
                    "Творческие занятия",
                    "Физическое развитие"
                  ].map((material, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 flex items-center gap-3">
                        <Icon name="FileText" className="text-primary" size={24} />
                        <span className="font-medium">{material}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="faq" className="mt-8">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        Как подготовить ребенка к детскому саду?
                      </h3>
                      <p className="text-muted-foreground">
                        Начните с постепенного привыкания к режиму, развивайте навыки самообслуживания, 
                        рассказывайте позитивные истории о садике.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        Что делать, если ребенок не хочет идти в сад?
                      </h3>
                      <p className="text-muted-foreground">
                        Выясните причину, будьте терпеливы, создайте позитивный настрой, поговорите с воспитателем.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center text-foreground">Контакты</h2>
            <Card>
              <CardContent className="p-8">
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <span className="text-lg">educator@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span className="text-lg">г. Москва, ул. Детская, д. 1</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Ваш email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} />
            <span className="font-heading font-bold text-xl">Детский Мир</span>
          </div>
          <p className="text-background/80 mb-4">
            Профессиональное воспитание с любовью и заботой
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-background/60 text-sm">
            © 2024 Детский Мир. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
