import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Upload, BarChart, Settings } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Meta Ads Platform</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Funktioner
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Priser
            </Link>
            <Link href="/help" className="text-sm font-medium hover:text-primary">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log ind
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Kom i gang</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Automatiser dine <span className="text-primary">Meta annoncer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl">
            Spar tid og effektiviser din proces med at uploade og administrere annoncer på Facebook og Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="h-12 px-8">
                Start gratis prøveperiode
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Se demo
              </Button>
            </Link>
          </div>
          <div className="mt-12 text-sm text-slate-500">
            Ingen kreditkort nødvendigt. 14 dages gratis prøveperiode.
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hvorfor Meta Ads Platform?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Vi gør det nemt at oprette, administrere og optimere dine Meta annoncer uden tidskrævende manuel håndtering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gradient-to-b from-slate-50 to-white">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spar tid</h3>
              <p className="text-slate-600">
                Reducér den tid, du bruger på at uploade annoncer, med op til 80% gennem automatisering.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gradient-to-b from-slate-50 to-white">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bulk Upload</h3>
              <p className="text-slate-600">
                Upload flere annoncer på én gang med direkte integration til Google Drive og Dropbox.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gradient-to-b from-slate-50 to-white">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Præcision</h3>
              <p className="text-slate-600">
                Fejlfrie uploads gennem forhåndsvalidering mod Meta's regler og automatiske formatkontroller.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-gradient-to-b from-slate-50 to-white">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sømløs integration</h3>
              <p className="text-slate-600">
                Direkte integration med Meta Ads API sikrer hurtig og problemfri upload af annoncer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klar til at spare tid på dine Meta annoncer?</h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Kom i gang med Meta Ads Platform i dag og giv dine mediebuyere mere tid til kreativt arbejde.
          </p>
          <Link href="/signup">
            <Button size="lg" className="h-12 px-8 bg-white text-slate-900 hover:bg-slate-100">
              Start din gratis prøveperiode
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enkle, gennemsigtige priser</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Vælg den plan, der passer til dit behov - alle planer inkluderer vores kernefunktionalitet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="flex flex-col border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-slate-600 mb-6">Perfekt til mindre virksomheder</p>
              <div className="text-4xl font-bold mb-2">299 kr<span className="text-lg font-normal text-slate-600">/md</span></div>
              <p className="text-slate-600 mb-6">Op til 100 annoncer pr. måned</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Bulk upload af annoncer</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Lokal filupload</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Forhåndsvisning af annoncer</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-auto">
                Start gratis prøveperiode
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col border rounded-lg p-8 bg-slate-50 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Populær
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-slate-600 mb-6">For voksende marketing teams</p>
              <div className="text-4xl font-bold mb-2">699 kr<span className="text-lg font-normal text-slate-600">/md</span></div>
              <p className="text-slate-600 mb-6">Op til 500 annoncer pr. måned</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Alt i Starter-planen</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Google Drive & Dropbox integration</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Duplicering på tværs af kampagner</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Prioriteret support</span>
                </li>
              </ul>
              <Button className="mt-auto">
                Start gratis prøveperiode
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-600 mb-6">Til større marketingafdelinger</p>
              <div className="text-4xl font-bold mb-2">Kontakt os<span className="text-lg font-normal text-slate-600"></span></div>
              <p className="text-slate-600 mb-6">Ubegrænset antal annoncer</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Alt i Pro-planen</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Team samarbejdsfunktioner</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Avanceret kampagnestyring</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>Dedikeret kontoansvarlig</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-auto">
                Kontakt salg
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 mt-auto">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-slate-600 hover:text-primary">Funktioner</Link></li>
                <li><Link href="#pricing" className="text-sm text-slate-600 hover:text-primary">Priser</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Fordelsprogram</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ressourcer</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-sm text-slate-600 hover:text-primary">Support</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Dokumentation</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Guides</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Virksomhed</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Om os</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Partnere</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Juridisk</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Privatlivspolitik</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Servicevilkår</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">Cookiepolitik</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 hover:text-primary">GDPR</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Meta Ads Platform. Alle rettigheder forbeholdes.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link href="#" className="text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}