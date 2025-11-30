import React from 'react'

export default function Navbar() {
  const nav = [
    'Проблема',
    'Решение',
    'Почему это важно',
    'Команда',
    'Почему Мы',
    'Дорожная карта',
    'Реализация',
    'Бизнес-модель',
    'Конкуренты',
    'Трэкшн'
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-emerald-300 font-bold text-lg">AgroRisk</div>
        <nav className="hidden md:flex gap-5 text-sm text-gray-300">
          {nav.map(id => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-emerald-300"
            >
              {id}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
