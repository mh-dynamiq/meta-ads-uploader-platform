import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, HelpCircle, FileText, MessageCircle, Video, Link2 } from 'lucide-react';

export default function HelpPage() {
  // Dummy FAQs
  const faqs = [
    {
      question: 'Hvordan forbinder jeg min Meta Ads konto?',
      answer: 'Gå til Indstillinger > Meta Konti og klik på "Forbind ny Meta-konto". Du vil blive omdirigeret til Meta, hvor du skal godkende de nødvendige tilladelser.',
    },
    {
      question: 'Hvilke filformater understøttes til uploads?',
      answer: 'Vi understøtter JPG, PNG og GIF til billeder samt MP4 og MOV til videoer. Se vores dokumentation for specifikke størrelsesbegrænsninger.',
    },
    {
      question: 'Hvordan uploader jeg flere annoncer på én gang?',
      answer: 'På upload-siden kan du trække flere filer til upload-zonen eller vælge flere filer via "Upload fra computer" knappen.',
    },
    {
      question: 'Hvad sker der, hvis en annonce bliver afvist af Meta?',
      answer: 'Du modtager en notifikation med detaljer om afvisningen, og annoncen markeres som afvist i din oversigt. Du kan derefter redigere annoncen og prøve igen.',
    },
    {
      question: 'Kan jeg planlægge uploads på forhånd?',
      answer: 'Ja, i den avancerede uploadfunktion kan du vælge en fremtidig dato og tid for hvornår dine annoncer skal offentliggøres.',
    },
  ];

  // Dummy guides
  const guides = [
    {
      title: 'Kom i gang med Meta Ads Platform',
      description: 'En grundlæggende vejledning til at opsætte din konto og komme i gang med at bruge platformen.',
      icon: FileText,
      url: '#',
    },
    {
      title: 'Bulk Upload Tutorial',
      description: 'Lær hvordan du effektivt uploader og administrerer flere annoncer på én gang.',
      icon: Video,
      url: '#',
    },
    {
      title: 'Integration med Google Drive',
      description: 'Sådan forbinder du din Google Drive for nem adgang til kreative assets.',
      icon: Link2,
      url: '#',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Hjælp & Support</h1>
        <p className="text-muted-foreground">
          Find svar på almindelige spørgsmål, guider og kontakt vores supportteam.
        </p>
      </div>

      {/* Søgebar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative max-w-xl mx-auto">
            <Input 
              placeholder="Søg i hjælpeartikler..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList>
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>Ofte stillede spørgsmål</span>
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Guides</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Kontakt Support</span>
          </TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Ofte stillede spørgsmål</CardTitle>
              <CardDescription>
                Find svar på almindelige spørgsmål om Meta Ads Platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Har du ikke fundet svar på dit spørgsmål? 
                <Button variant="link" className="px-1 h-auto">Kontakt vores supportteam</Button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Guides Tab */}
        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle>Vejledninger & Ressourcer</CardTitle>
              <CardDescription>
                Detaljerede guides til at hjælpe dig med at få mest muligt ud af Meta Ads Platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guides.map((guide, i) => {
                  const Icon = guide.icon;
                  return (
                    <Card key={i} className="flex flex-col">
                      <CardHeader>
                        <Icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <a href={guide.url}>Åbn Guide</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Kontakt Support</CardTitle>
              <CardDescription>
                Har du brug for personlig hjælp? Udfyld formularen nedenfor, og vores supportteam vil vende tilbage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Navn
                  </label>
                  <Input id="name" placeholder="Dit navn" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="din@email.dk" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Emne
                </label>
                <Input id="subject" placeholder="Hvad drejer din henvendelse sig om?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Besked
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Beskriv dit problem eller spørgsmål i detaljer..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agree-terms"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="agree-terms" className="text-sm text-muted-foreground">
                  Jeg accepterer, at I gemmer mine oplysninger for at kunne besvare min henvendelse
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Svartid er typisk 1-2 hverdage
              </p>
              <Button>Send Besked</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}