import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 mt-10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} AgroRisk — Demo site for AI500
    </footer>
  )
}
