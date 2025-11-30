import React from 'react'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16">
      <h2 className="text-3xl font-semibold text-emerald-200 mb-6">{title}</h2>
      {children}
    </section>
  )
}
