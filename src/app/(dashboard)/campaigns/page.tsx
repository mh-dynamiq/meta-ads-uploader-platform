import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from '@/components/ui/table';
import { 
  Search, Filter, RefreshCw, Plus, 
  PlayCircle, PauseCircle, Activity 
} from 'lucide-react';
import Link from 'next/link';

export default function CampaignsPage() {
  // Dette er dummy-data. I en rigtig implementation ville vi hente denne data fra en API
  const campaigns = [
    {
      id: 'camp-001',
      name: 'Forårskampagne 2025',
      status: 'ACTIVE',
      budget: '25.000 DKK',
      spent: '12.450 DKK',
      startDate: '1. mar 2025',
      endDate: '30. apr 2025',
      objective: 'TRAFFIC',
    },
    {
      id: 'camp-002',
      name: 'Produkt Lancering',
      status: 'PAUSED',
      budget: '50.000 DKK',
      spent: '8.325 DKK',
      startDate: '15. feb 2025',
      endDate: '15. maj 2025',
      objective: 'CONVERSIONS',
    },
    {
      id: 'camp-003',
      name: 'Brand Awareness',
      status: 'ACTIVE',
      budget: '10.000 DKK',
      spent: '4.120 DKK',
      startDate: '1. jan 2025',
      endDate: '31. dec 2025',
      objective: 'REACH',
    },
  ];

  const getStatusBadge = (status: string) => {
    const baseStyle = "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit";
    
    if (status === 'ACTIVE') {
      return (
        <div className={`${baseStyle} bg-green-100 text-green-700`}>
          <PlayCircle className="h-3 w-3" />
          Aktiv
        </div>
      );
    }
    
    if (status === 'PAUSED') {
      return (
        <div className={`${baseStyle} bg-amber-100 text-amber-700`}>
          <PauseCircle className="h-3 w-3" />
          Paused
        </div>
      );
    }

    return (
      <div className={`${baseStyle} bg-gray-100 text-gray-700`}>
        {status}
      </div>
    );
  };

  const getObjectiveLabel = (objective: string) => {
    switch (objective) {
      case 'TRAFFIC':
        return 'Trafik';
      case 'CONVERSIONS':
        return 'Konverteringer';
      case 'REACH':
        return 'Rækkevidde';
      default:
        return objective;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Kampagner</h1>
        <p className="text-muted-foreground">
          Administrer dine Meta kampagner og annoncegrupper.
        </p>
      </div>

      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Søg kampagner..." 
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
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ny Kampagne
        </Button>
      </div>

      {/* Campaigns table */}
      <Card>
        <CardHeader>
          <CardTitle>Dine Kampagner</CardTitle>
          <CardDescription>
            Oversigt over alle dine Meta Ad kampagner.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kampagne Navn</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mål</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Brugt</TableHead>
                <TableHead>Periode</TableHead>
                <TableHead className="text-right">Handlinger</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map(campaign => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      {getObjectiveLabel(campaign.objective)}
                    </div>
                  </TableCell>
                  <TableCell>{campaign.budget}</TableCell>
                  <TableCell>{campaign.spent}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {campaign.startDate} 
                      {campaign.endDate && <> til <br/>{campaign.endDate}</>}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        Vis
                      </Button>
                      <Button variant="ghost" size="sm">
                        Rediger
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