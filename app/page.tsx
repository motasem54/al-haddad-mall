import { ShoppingCart, Search, Menu, User, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'خضروات وفواكه', icon: '🥬', color: 'from-green-600 to-green-800' },
    { name: 'لحوم وأسماك', icon: '🥩', color: 'from-red-600 to-red-800' },
    { name: 'ألبان وأجبان', icon: '🧀', color: 'from-yellow-600 to-yellow-800' },
    { name: 'مخبوزات', icon: '🍞', color: 'from-amber-600 to-amber-800' },
    { name: 'مشروبات', icon: '🥤', color: 'from-blue-600 to-blue-800' },
    { name: 'معلبات', icon: '🥫', color: 'from-orange-600 to-orange-800' },
    { name: 'حلويات', icon: '🍫', color: 'from-pink-600 to-pink-800' },
    { name: 'منظفات', icon: '🧴', color: 'from-purple-600 to-purple-800' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary to-secondary-light shadow-2xl sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-primary py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-white text-sm">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Phone size={14} /> +970 599 123456</span>
              <span className="flex items-center gap-1"><Mail size={14} /> info@alhaddadmall.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>نابلس، فلسطين</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial' }}>
                  الحداد مول
                </h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن المنتجات..."
                  className="w-full px-6 py-3 pr-12 rounded-full border-2 border-primary/30 focus:border-primary outline-none text-gray-800 shadow-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={24} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-primary transition-colors">
                <User size={28} />
              </button>
              <button className="relative text-white hover:text-primary transition-colors">
                <ShoppingCart size={28} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                  0
                </span>
              </button>
              <button className="text-white hover:text-primary transition-colors lg:hidden">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center gap-8 py-3 text-white font-semibold">
              <li className="hover:text-accent-gold cursor-pointer transition-colors">الرئيسية</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">العروض</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">الأقسام</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">عن المتجر</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">اتصل بنا</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">مرحباً بك في الحداد مول</h2>
          <p className="text-xl mb-8 text-gray-100">تسوق أفضل المنتجات بأسعار منافسة وجودة عالية</p>
          <button className="bg-accent-gold hover:bg-yellow-500 text-secondary px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105">
            تصفح المنتجات الآن
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-secondary">
          <span className="border-b-4 border-primary pb-2">أقسام المتجر</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 text-center`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                  {category.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-secondary to-secondary-light text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-primary">الحداد مول</h4>
              <p className="text-gray-300">متجرك المفضل لجميع احتياجاتك اليومية بجودة عالية وأسعار منافسة</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-primary cursor-pointer transition-colors">عن المتجر</li>
                <li className="hover:text-primary cursor-pointer transition-colors">سياسة الخصوصية</li>
                <li className="hover:text-primary cursor-pointer transition-colors">الشروط والأحكام</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} /> +970 599 123456
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} /> info@alhaddadmall.com
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} /> نابلس، فلسطين
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 الحداد مول. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
