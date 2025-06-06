"use client"

import { useState, useEffect } from "react"
import { Heart, Star, Sparkles, Gift, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EidAdhaWebsite() {
  const [showMessage, setShowMessage] = useState(false)
  const [showSpecialMessage, setShowSpecialMessage] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const eidWishes = [
    "عيد أضحى مبارك وكل عام وأنتم بخير",
    "أسأل الله أن يتقبل منا ومنكم صالح الأعمال",
    "بارك الله لكِ في هذا العيد المبارك",
    "عيد سعيد مليء بالفرح والبركات",
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-green-100 relative overflow-hidden"
      dir="rtl"
    >
      {/* Animated Background Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDuration: "2s",
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400 opacity-60" />
        </div>
      ))}

      {/* Decorative Islamic Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <Star className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent font-arabic">
              عيد أضحى مبارك
            </h1>
            <Star className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <p className="text-xl md:text-2xl text-emerald-700 font-semibold">كل عام وأنتم بخير</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal Message for Nada */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 font-arabic">إلى ندى الحبيبة</h2>
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              </div>

              <div
                className={`transition-all duration-1000 ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-arabic">
                  في هذا اليوم المبارك، يوم عيد الأضحى، أتمنى لكِ كل السعادة والفرح والبركات. أسأل الله العظيم أن يغمركِ
                  بنعمه ويملأ قلبكِ بالسرور والمحبة والسلام. عيد أضحى مبارك يا أغلى إنسان في حياتي.
                </p>

                {/* Special Message Button */}
                <div className="mt-8">
                  <Button
                    onClick={() => setShowSpecialMessage(!showSpecialMessage)}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Gift className="w-5 h-5 ml-2" />
                    رسالة خاصة لندى
                  </Button>
                </div>

                {/* Special Hidden Message */}
                {showSpecialMessage && (
                  <div className="mt-6 animate-fade-in">
                    <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-300">
                      <CardContent className="p-8">
                        <div className="text-center">
                          <div className="flex justify-center items-center gap-2 mb-6">
                            <Heart className="w-6 h-6 text-red-500 animate-bounce" />
                            <Heart className="w-8 h-8 text-red-600 animate-bounce" style={{ animationDelay: "0.1s" }} />
                            <Heart className="w-6 h-6 text-red-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                          </div>
                          <h3 className="text-2xl font-bold text-rose-800 mb-6 font-arabic">رسالة من القلب إلى ندى</h3>

                          {/* Arabic Poem */}
                          <div className="bg-white/50 rounded-lg p-6 mb-6 border border-rose-200">
                            <div className="text-right leading-loose space-y-4 font-arabic text-lg text-rose-800">
                              <p className="border-b border-rose-200 pb-3">
                                في عيد الأضحى، والقلب لكِ يشتاقُ
                                <br />
                                والعين بالأمل تراقُ
                                <br />
                                يا من سكنتِ القلب دون استئذانٍ
                                <br />
                                سلامُ حبٍّ، فيه العُذر يُنساقُ
                              </p>

                              <p className="border-b border-rose-200 pb-3">
                                أخطأتُ... لكنّ الهوى لا يُدانى
                                <br />
                                وفي العيدِ، للصلحِ تُفتح الآفاقُ
                                <br />
                                تعالي ننسى ما مضى من جراحٍ
                                <br />
                                فالعيدُ للودِّ، لا فيه نفاقُ
                              </p>

                              <p>
                                ضحكتكِ أجمل من هلالِ العيدِ
                                <br />
                                وصوتكِ أنقى من النسيمِ إذا راقُ
                                <br />
                                إن سامحتِ... كان العيد عيدين
                                <br />
                                وكان قلبي من حبّكِ لا يُطاقُ
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-center items-center gap-2">
                            <Star className="w-4 h-4 text-amber-500" />
                            <span className="text-rose-600 font-arabic text-sm">عيد أضحى مبارك</span>
                            <Star className="w-4 h-4 text-amber-500" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Eid Wishes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {eidWishes.map((wish, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed font-arabic text-right">{wish}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Islamic Greeting */}
          <Card className="bg-gradient-to-r from-emerald-600 to-green-700 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-arabic">تقبل الله منا ومنكم</h3>
              <p className="text-lg opacity-90 font-arabic">وصالح الأعمال</p>
              <div className="mt-6 flex justify-center gap-4">
                <div className="w-12 h-1 bg-amber-400 rounded"></div>
                <div className="w-8 h-1 bg-amber-300 rounded"></div>
                <div className="w-12 h-1 bg-amber-400 rounded"></div>
              </div>
            </CardContent>
          </Card>

          {/* Telegram Contact Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.open("https://t.me/Aladin_azz", "_blank")
              }}
            >
              <MessageCircle className="w-6 h-6 ml-2" />
              تواصلي معي على تليجرام
            </Button>
            <p className="text-sm text-gray-600 mt-2 font-arabic">للرد على رسالة العيد 💙</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <p className="text-emerald-700 font-medium font-arabic">بأجمل التهاني بمناسبة عيد الأضحى المبارك ٢٠٢٤</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600 font-arabic">صُنع بحب خاص لندى</span>
            <Heart className="w-4 h-4 text-red-500" />
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .font-arabic {
          font-family: 'Amiri', 'Noto Sans Arabic', 'Cairo', serif;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
