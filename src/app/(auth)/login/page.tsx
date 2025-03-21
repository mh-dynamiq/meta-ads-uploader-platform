import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook } from 'lucide-react';

export default function LoginPage() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Log ind på din konto</CardTitle>
        <CardDescription>
          Indtast din email og adgangskode for at logge ind
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button className="w-full" variant="outline">
            <Facebook className="mr-2 h-4 w-4 text-blue-600" />
            Fortsæt med Facebook
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Eller fortsæt med
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <Input
            id="email"
            placeholder="navn@firma.dk"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
              Glemt password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">Log ind</Button>
        <div className="text-center text-sm">
          Har du ikke en konto?{' '}
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Opret konto
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}