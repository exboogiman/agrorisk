import React from 'react'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-black via-surface to-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-300 mb-4">
          AgroRisk — кредитный скоринг фермеров без кредитной истории
        </h1>
        <p className="text-gray-200 text-lg max-w-3xl">
          Платформа, которая превращает спутниковые, климатические и агрономические данные 
          в понятные кредитные метрики для банков и МФО. 
          Мы делаем фермеров «видимыми», а агрокредитование — безопасным.
        </p>
      </div>
    </section>
  )
}
