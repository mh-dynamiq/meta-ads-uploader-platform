import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Facebook, Instagram, Database, Cloud, Shield, BellRing } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Indstillinger</h1>
        <p className="text-muted-foreground">
          Administrer dine konto- og platform-indstillinger.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Profil</span>
          </TabsTrigger>
          <TabsTrigger value="meta-accounts" className="flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            <span>Meta Konti</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span>Integrationer</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <BellRing className="h-4 w-4" />
            <span>Notifikationer</span>
          </TabsTrigger>
        </TabsList>

        {/* Profil Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profil Oplysninger</CardTitle>
              <CardDescription>
                Opdater dine personlige informationer og kontaktoplysninger.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Fulde navn
                  </label>
                  <Input id="name" placeholder="Dit fulde navn" defaultValue="Demo Bruger" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="din@email.dk" defaultValue="demo@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Virksomhed
                  </label>
                  <Input id="company" placeholder="Virksomhedsnavn" defaultValue="Demo ApS" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <Input id="phone" placeholder="+45 12345678" defaultValue="+45 12345678" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Gem Ændringer</Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Adgangskode</CardTitle>
              <CardDescription>
                Opdater din adgangskode. Vi anbefaler, at du bruger en stærk adgangskode.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="current-password" className="text-sm font-medium">
                  Nuværende adgangskode
                </label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <label htmlFor="new-password" className="text-sm font-medium">
                  Ny adgangskode
                </label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium">
                  Bekræft ny adgangskode
                </label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Opdater Adgangskode</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Meta Accounts Tab */}
        <TabsContent value="meta-accounts">
          <Card>
            <CardHeader>
              <CardTitle>Forbundne Meta-konti</CardTitle>
              <CardDescription>
                Administrer dine forbindelser til Facebook og Instagram.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Facebook Account */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <Facebook className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">Facebook Business</h3>
                    <p className="text-sm text-muted-foreground">Forbundet som Demo Ads</p>
                    <p className="text-xs text-muted-foreground mt-1">Tilknyttet 4 ad konti</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Konfigurer</Button>
                  <Button variant="destructive" size="sm">Fjern</Button>
                </div>
              </div>

              {/* Instagram Account */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-medium">Instagram Business</h3>
                    <p className="text-sm text-muted-foreground">Forbundet via Facebook</p>
                    <p className="text-xs text-muted-foreground mt-1">2 konti tilknyttet</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Konfigurer</Button>
                  <Button variant="destructive" size="sm">Fjern</Button>
                </div>
              </div>

              {/* Add New Account */}
              <div className="flex items-center justify-center p-6 border border-dashed rounded-lg">
                <Button variant="outline">
                  <Facebook className="h-4 w-4 mr-2" />
                  Forbind ny Meta-konto
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Api Indstillinger</CardTitle>
              <CardDescription>
                Konfigurer dine Meta API tilladelser og tokens.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium">API Permission Status</label>
                <div className="p-2 bg-green-50 text-green-700 rounded-md flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Alle nødvendige tilladelser er aktive
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Sidst kontrolleret: 21. mar 2025, 10:23
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">Kontroller API-tilladelser</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Fil-opbevaringsintegrationer</CardTitle>
              <CardDescription>
                Forbind med eksterne tjenester til opbevaring af kreative assets.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Drive */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <Cloud className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Google Drive</h3>
                    <p className="text-sm text-muted-foreground">Ikke forbundet</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Forbind</Button>
              </div>

              {/* Dropbox */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <Cloud className="h-8 w-8 text-blue-700" />
                  <div>
                    <h3 className="font-medium">Dropbox</h3>
                    <p className="text-sm text-muted-foreground">Ikke forbundet</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Forbind</Button>
              </div>

              {/* OneDrive */}
              <div className="flex items-start justify-between p-4 border rounded-lg opacity-50">
                <div className="flex items-start gap-4">
                  <Cloud className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">OneDrive</h3>
                    <p className="text-sm text-muted-foreground">Kommer snart</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" disabled>Forbind</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Data Integration</CardTitle>
              <CardDescription>
                Konfigurer data-integration med andre systemer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium">API Adgangs-token</label>
                <div className="flex gap-2">
                  <Input value="●●●●●●●●●●●●●●●●●●●●●●●●●●●●" readOnly />
                  <Button variant="outline">Kopier</Button>
                  <Button variant="outline">Generer Ny</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Brug dette token til at give andre systemer adgang til din Meta Ads Platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifikationsindstillinger</CardTitle>
              <CardDescription>
                Administrer hvordan og hvornår du modtager notifikationer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2">
                <div>
                  <h3 className="font-medium">Upload-notifikationer</h3>
                  <p className="text-sm text-muted-foreground">Få besked når uploads er fuldført eller fejler</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="upload-notifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2">
                <div>
                  <h3 className="font-medium">Kampagne-notifikationer</h3>
                  <p className="text-sm text-muted-foreground">Få besked om kampagnestatusændringer</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="campaign-notifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2">
                <div>
                  <h3 className="font-medium">Email-notifikationer</h3>
                  <p className="text-sm text-muted-foreground">Modtag daglige sammendrag via email</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2">
                <div>
                  <h3 className="font-medium">System-meddelelser</h3>
                  <p className="text-sm text-muted-foreground">Få besked om vedligeholdelse og nye funktioner</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="system-notifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Gem Præferencer</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}