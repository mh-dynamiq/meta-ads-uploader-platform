import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook } from 'lucide-react';

export default function SignupPage() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Opret en konto</CardTitle>
        <CardDescription>
          Udfyld formularen nedenfor for at oprette din konto
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button className="w-full" variant="outline">
            <Facebook className="mr-2 h-4 w-4 text-blue-600" />
            Opret med Facebook
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Eller opret med email
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-medium leading-none">
              Fornavn
            </label>
            <Input id="first-name" placeholder="Fornavn" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium leading-none">
              Efternavn
            </label>
            <Input id="last-name" placeholder="Efternavn" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
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
          <label htmlFor="company" className="text-sm font-medium leading-none">
            Firma (valgfrit)
          </label>
          <Input
            id="company"
            placeholder="Dit firma"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium leading-none">
            Adgangskode
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
          />
          <p className="text-xs text-muted-foreground">
            Minimum 8 tegn med store og små bogstaver og tal
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            Jeg accepterer{' '}
            <Link href="/terms" className="text-blue-500 hover:text-blue-700">
              servicevilkårene
            </Link>{' '}
            og{' '}
            <Link href="/privacy" className="text-blue-500 hover:text-blue-700">
              privatlivspolitikken
            </Link>
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">Opret konto</Button>
        <div className="text-center text-sm">
          Har du allerede en konto?{' '}
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Log ind
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}