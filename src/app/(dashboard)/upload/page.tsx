import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileUp, Upload, FolderUp, FileText } from 'lucide-react';

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Upload Annoncer</h1>
        <p className="text-muted-foreground">
          Upload og konfigurer dine annoncer til Meta-platforme.
        </p>
      </div>

      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Upload Assets</TabsTrigger>
          <TabsTrigger value="configure">Konfigurer Annoncer</TabsTrigger>
          <TabsTrigger value="review">Gennemse & Upload</TabsTrigger>
        </TabsList>

        {/* Upload Assets Tab */}
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Kreative Assets</CardTitle>
              <CardDescription>
                Upload billeder og videoer til dine annoncer. Understøttede formater: JPG, PNG, GIF, MP4.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button variant="outline" className="flex gap-2">
                  <Upload className="h-4 w-4" />
                  Upload fra computer
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <FolderUp className="h-4 w-4" />
                  Google Drive
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <FolderUp className="h-4 w-4" />
                  Dropbox
                </Button>
              </div>

              {/* Upload zone */}
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center">
                <FileUp className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium">Træk filer hertil eller klik for at browse</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Upload op til 20 filer på én gang. Maks. 50MB per fil.
                </p>
              </div>

              {/* Empty state for uploaded files (ville indeholde en liste i en rigtig implementation) */}
              <div className="mt-4 text-center p-4 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">Ingen filer uploadet endnu</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="flex gap-2">
              Fortsæt til Konfiguration
            </Button>
          </div>
        </TabsContent>

        {/* Configure Ads Tab */}
        <TabsContent value="configure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Konfigurer Annonceinformation</CardTitle>
              <CardDescription>
                Tilføj tekst, overskrifter og call-to-action til dine annoncer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium block mb-1">Primær Tekst</label>
                  <Input placeholder="Primær annoncetekst" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maks. 125 tegn
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Overskrift</label>
                  <Input placeholder="Annoncens overskrift" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maks. 40 tegn
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium block mb-1">Beskrivelse</label>
                  <Input placeholder="Beskrivelse (valgfri)" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maks. 30 tegn
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Call to Action</label>
                  <Input placeholder="F.eks. 'Køb nu', 'Lær mere'" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">Destination URL</label>
                <Input placeholder="https://example.com/landing-page" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tilknyt Assets</CardTitle>
              <CardDescription>
                Vælg hvilke billeder eller videoer der skal bruges til denne annonce.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 bg-muted/20 rounded-lg">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Ingen assets tilgængelige. Upload assets i første trin.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline">Tilbage til Upload</Button>
            <Button>Fortsæt til Gennemgang</Button>
          </div>
        </TabsContent>

        {/* Review & Upload Tab */}
        <TabsContent value="review" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gennemse Annoncer</CardTitle>
              <CardDescription>
                Kontroller dine annoncer før du uploader dem til Meta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">Du har ikke konfigureret nogen annoncer endnu.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline">Tilbage til Konfiguration</Button>
            <Button disabled>Upload til Meta</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}