"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Images,
  FileUp,
  ListFilter,
  Settings,
  HelpCircle,
  Menu,
  X,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavItem } from '@/types';

// Navigation struktur
const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Assets',
    href: '/assets',
    icon: Images,
  },
  {
    title: 'Upload Annoncer',
    href: '/upload',
    icon: FileUp,
  },
  {
    title: 'Kampagner',
    href: '/campaigns',
    icon: ListFilter,
  },
  {
    title: 'Indstillinger',
    href: '/settings',
    icon: Settings,
  },
  {
    title: 'Hjælp',
    href: '/help',
    icon: HelpCircle,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Navgitationslink komponent
  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
          isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
        )}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{item.title}</span>
      </Link>
    );
  };

  // Desktop sidebar
  const SidebarContent = (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="font-bold">Meta Ads Platform</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="flex flex-col gap-1 py-2">
          {navigationItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  // Mobil sidebar (Sheet)
  return (
    <>
      {/* Mobil trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Åbn menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          {SidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className={cn("hidden h-screen border-r lg:block", className)}>
        {SidebarContent}
      </div>
    </>
  );
}