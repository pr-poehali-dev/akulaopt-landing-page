import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            AkulaOPT
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-purple-500 transition-colors">Главная</a>
            <a href="#advantages" className="hover:text-purple-500 transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-105 transition-transform">
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-montserrat font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                    AkulaOPT
                  </span>
                </h1>
                <p className="text-xl text-purple-200 font-medium">
                  Официальный дистрибьютор автозвука в РФ
                </p>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Мы предоставляем качественное оборудование для автозвука от ведущих мировых брендов. 
                Профессиональная техника, выгодные цены, надежное сотрудничество.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 text-lg animate-pulse-slow">
                  <Icon name="Volume2" className="mr-2" />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                  <Icon name="Phone" className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
              <div className="relative z-10">
                <img 
                  src="/img/9b2c6534-e740-4138-809c-80f5e161410f.jpg" 
                  alt="Профессиональное автозвуковое оборудование" 
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900">
              Наши <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">преимущества</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почему профессионалы выбирают AkulaOPT для своих проектов автозвука
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Официальное партнерство',
                description: 'Прямые поставки от производителей мирового уровня с гарантией качества',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                description: 'Отправка заказов по всей России в день оплаты. Собственная логистика',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: 'Users',
                title: 'Экспертная поддержка',
                description: 'Команда специалистов поможет подобрать оптимальное решение для вашего проекта',
                color: 'from-purple-600 to-cyan-500'
              },
              {
                icon: 'ShieldCheck',
                title: 'Гарантия качества',
                description: 'Все товары сертифицированы и имеют официальную гарантию от производителя',
                color: 'from-cyan-600 to-purple-500'
              },
              {
                icon: 'TrendingDown',
                title: 'Выгодные цены',
                description: 'Конкурентные цены благодаря прямым поставкам без посредников',
                color: 'from-purple-500 to-cyan-600'
              },
              {
                icon: 'Wrench',
                title: 'Техподдержка',
                description: 'Консультации по установке и настройке оборудования от наших инженеров',
                color: 'from-cyan-500 to-purple-600'
              }
            ].map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={advantage.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-montserrat font-bold">
                  Свяжитесь <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">с нами</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Готовы обсудить ваш проект? Наши специалисты ответят на все вопросы и помогут выбрать идеальное решение.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Телефон</p>
                    <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg font-semibold">info@akulaopt.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Адрес</p>
                    <p className="text-lg font-semibold">Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-white">
                  Форма обратной связи
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email адрес"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 min-h-24"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-200"
                  >
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AkulaOPT
              </div>
              <p className="text-gray-400 mt-2">Официальный дистрибьютор автозвука в РФ</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AkulaOPT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}