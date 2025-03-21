import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUp, Activity, Users, Clock, Image, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Dette er dummy-data. I en rigtig implementation ville vi hente denne data fra en API
  const stats = [
    {
      title: 'Aktive Kampagner',
      value: '4',
      description: '2 afventer godkendelse',
      icon: Activity,
    },
    {
      title: 'Uploadede Annoncer',
      value: '24',
      description: 'Denne måned',
      icon: FileUp,
    },
    {
      title: 'Rækkevidde',
      value: '32,590',
      description: 'Unikke brugere',
      icon: Users,
    },
    {
      title: 'Tidsbesparelse',
      value: '80%',
      description: 'Vs. manuel upload',
      icon: Clock,
    },
  ];

  // Dummy quick actions
  const quickActions = [
    {
      title: 'Upload Annoncer',
      description: 'Opret og upload nye annoncer til Meta',
      href: '/upload',
      icon: FileUp,
    },
    {
      title: 'Se Kampagner',
      description: 'Administrer dine aktive kampagner',
      href: '/campaigns',
      icon: Activity,
    },
  ];

  // Dummy seneste assets
  const recentAssets = [
    { id: '1', name: 'Produktbillede 1.jpg', type: 'image', thumbnail: '#' },
    { id: '2', name: 'Kampagnevideo.mp4', type: 'video', thumbnail: '#' },
    { id: '3', name: 'Banner til Facebook.png', type: 'image', thumbnail: '#' },
    { id: '4', name: 'Instagram Story.jpg', type: 'image', thumbnail: '#' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Velkommen til Meta Ads Platform. Her kan du få et overblik over dine annoncer og kampagner.
        </p>
      </div>

      {/* Statistik kort */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Hurtige handlinger</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Button asChild>
                    <Link href={action.href}>Start</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Seneste Assets */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Seneste Assets</h2>
          <Button variant="outline" asChild>
            <Link href="/assets">
              Se alle assets
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentAssets.map((asset) => (
            <Card key={asset.id} className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image className="h-10 w-10 text-muted-foreground" />
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-sm truncate font-medium">{asset.name}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="overflow-hidden border-dashed">
            <div className="aspect-square flex items-center justify-center">
              <Button variant="ghost" asChild className="h-full w-full rounded-none">
                <Link href="/upload" className="flex flex-col items-center justify-center gap-2">
                  <Plus className="h-8 w-8" />
                  <span>Upload Nyt</span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Aktivitetsoversigt */}
      <Card>
        <CardHeader>
          <CardTitle>Seneste aktivitet</CardTitle>
          <CardDescription>
            De seneste handlinger i systemet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">Upload Gennemført</p>
                <p className="text-sm text-muted-foreground">10 annoncer blev uploadet i går</p>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">I går kl. 15:30</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div>
                <p className="font-medium">Kampagne Sat på Pause</p>
                <p className="text-sm text-muted-foreground">Forårskampagne 2025</p>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">For 2 dage siden</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium">Meta Konto Forbundet</p>
                <p className="text-sm text-muted-foreground">Ny konto tilføjet til platformen</p>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">12. mar 2025</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}