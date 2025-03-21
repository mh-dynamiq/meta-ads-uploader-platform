import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from '@/components/ui/table';
import { FileUp, Search, Filter, Image, Video, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function AssetsPage() {
  // Dette er dummy-data. I en rigtig implementation ville vi hente denne data fra en API
  const assets = [
    {
      id: 'asset-001',
      name: 'Produkt Banner 1',
      type: 'IMAGE',
      dimensions: '1200 x 628',
      size: '245 KB',
      uploadDate: '15. mar 2025',
      thumbnailUrl: '#', // Dette ville være en ægte URL
    },
    {
      id: 'asset-002',
      name: 'Produkt Video',
      type: 'VIDEO',
      dimensions: '1080 x 1080',
      size: '4.2 MB',
      uploadDate: '12. mar 2025',
      thumbnailUrl: '#',
    },
    {
      id: 'asset-003',
      name: 'Instagram Story',
      type: 'IMAGE',
      dimensions: '1080 x 1920',
      size: '380 KB',
      uploadDate: '10. mar 2025',
      thumbnailUrl: '#',
    },
  ];

  const renderIcon = (type: string) => {
    if (type === 'IMAGE') return <Image className="h-4 w-4 text-blue-500" />;
    if (type === 'VIDEO') return <Video className="h-4 w-4 text-purple-500" />;
    return <FileUp className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Assets Bibliotek</h1>
        <p className="text-muted-foreground">
          Administrer kreative assets til dine Meta annoncer.
        </p>
      </div>

      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Søg assets..." 
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <Button asChild>
          <Link href="/upload">
            <FileUp className="h-4 w-4 mr-2" />
            Upload nye assets
          </Link>
        </Button>
      </div>

      {/* Assets table */}
      <Card>
        <CardHeader>
          <CardTitle>Dine Assets</CardTitle>
          <CardDescription>
            Alle billeder og videoer du har uploadet til platformen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Type</TableHead>
                <TableHead>Navn</TableHead>
                <TableHead>Dimensioner</TableHead>
                <TableHead>Størrelse</TableHead>
                <TableHead>Upload Dato</TableHead>
                <TableHead className="text-right">Handlinger</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map(asset => (
                <TableRow key={asset.id}>
                  <TableCell>{renderIcon(asset.type)}</TableCell>
                  <TableCell className="font-medium">{asset.name}</TableCell>
                  <TableCell>{asset.dimensions}</TableCell>
                  <TableCell>{asset.size}</TableCell>
                  <TableCell>{asset.uploadDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        Vis
                      </Button>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}