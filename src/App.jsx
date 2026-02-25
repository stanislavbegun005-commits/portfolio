import { Navigate, Route, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { content } from './data/content'
import IntroOverlay from './components/IntroOverlay'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CasesPage from './pages/CasesPage'
import CaseDetailPage from './pages/CaseDetailPage'
import ResumePage from './pages/ResumePage'
import ContactsPage from './pages/ContactsPage'

export default function App() {
  const [lang, setLang] = useState('ru')
  const [introDone, setIntroDone] = useState(false)
  const dictionary = useMemo(() => content[lang], [lang])

  return (
    <div className="min-h-screen bg-noir text-white">
      {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      <Navbar lang={lang} setLang={setLang} nav={dictionary.nav} />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage data={dictionary.home} nav={dictionary.nav} />} />
          <Route path="/about" element={<AboutPage data={dictionary.about} />} />
          <Route path="/cases" element={<CasesPage data={dictionary.cases} />} />
          <Route path="/cases/:caseId" element={<CaseDetailPage data={dictionary.cases} />} />
          <Route path="/resume" element={<ResumePage data={dictionary.resume} />} />
          <Route path="/contacts" element={<ContactsPage data={dictionary.contacts} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
